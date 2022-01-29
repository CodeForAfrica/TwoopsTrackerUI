import jwtDecode from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import fetchJson from "@/twoopstracker/utils/fetchJson";

// NOTE(kilemensi): There is no point defining this via env vars at the moment
//                  because for each provider, we'd need to modify code to
//                  include it in NextAuth.providers
const OAUTH_PROVIDERS = ["google"];

async function fetchToken(url, params) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    redirect: "follow",
  };

  return fetch(url, requestOptions).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

async function fetchNewToken({ account, user: nextAuthUser }) {
  const url = new URL(
    `${account.provider}/`,
    process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL
  ).toString();
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    user: authUser,
  } = await fetchToken(url, { access_token: account?.id_token });
  const user = { ...nextAuthUser, ...authUser };

  return {
    accessToken,
    exp: jwtDecode(accessToken).exp * 1000,
    idToken: account?.id_token ?? null,
    refreshToken,
    user: {
      ...user,
      lastName: user?.last_name,
      firstName: user?.first_name ?? user?.name?.split(" ")[0] ?? user?.email,
    },
  };
}

async function fetchRefreshedToken({ token: currentToken }) {
  try {
    const params = { refresh: currentToken.refreshToken };
    const url = process.env.NEXTAUTH_JWT_TOKEN_REFRESH_URL;
    const { access: accessToken, refresh: refreshToken } = await fetchToken(
      url,
      params
    );
    return {
      ...currentToken,
      accessToken,
      exp: jwtDecode(accessToken).exp * 1000,
      // Fall back to current refresh token if new one is not available
      refreshToken: refreshToken || currentToken.refreshToken,
    };
  } catch (error) {
    // TODO(kilemensi): Add Sentry and capture error
    return null;
  }
}

const options = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const authBody = {
          email: credentials.email,
          password: credentials.password,
        };
        try {
          const response = await fetch(
            `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}login/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(authBody),
            }
          );
          const result = await response.json();
          if (response.ok && result) {
            const {
              access_token: accessToken,
              refresh_token: refreshToken,
              user,
            } = result;

            return {
              exp: jwtDecode(accessToken).exp * 1000,
              accessToken,
              refreshToken,
              user: {
                ...user,
                firstName: user?.first_name ?? user?.email,
                lastName: user?.last_name,
              },
            };
          }
          const [error] = Object.values(result);
          throw new Error(error);
        } catch (e) {
          throw new Error(e.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXTAUTH_PROVIDERS_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_PROVIDERS_GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // see: https://next-auth.js.org/configuration/callbacks#sign-in-callback
    async signIn() {
      // TODO(kilemensi): Confirm if there are any situations where we want to
      //                  disable sign in for some users.
      const isAllowedToSignIn = true;

      return isAllowedToSignIn;
    },

    // see: https://next-auth.js.org/configuration/callbacks#jwt-callback
    async jwt({ token, user, account }) {
      // when created: e.g. at sign in
      //              fetch new access token
      if (account && user) {
        if (OAUTH_PROVIDERS.includes(account.provider)) {
          return fetchNewToken({ account, user });
        }

        if (account.provider === "credentials") {
          return user;
        }
      }
      // when updated: e.g. when session is accessed in the client
      //               return current token if the access token
      //               has not expired yet
      if (token && Date.now() < token.exp) {
        return token;
      }
      //               otherwise, refresh the current token
      return fetchRefreshedToken({ token });
    },

    // see: https://next-auth.js.org/configuration/callbacks#session-callback
    async session({ session, token }) {
      const user = await fetchJson(
        `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}user`,
        token
      );
      const newToken = token;
      newToken.user = { ...token.user, ...user };
      if (!(session && token)) {
        return null;
      }
      // anything added to jwt callback i.e in token, need to be explicitly
      // forwarded here
      return { ...session, ...newToken };
    },
  },

  pages: {
    signIn: "/login",
    // TODO(kilemensi): Replace this with 500 error page
    error: "/404", // Error code passed in query string as ?error=
  },
};

export default NextAuth(options);
