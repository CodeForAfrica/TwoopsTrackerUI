import jwtDecode from "jwt-decode";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function fetchToken(token, url = process.env.AUTH_URL) {
  const raw = JSON.stringify(token);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(url, requestOptions).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `exp`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
  try {
    const refreshedTokens = await fetchToken(
      { refresh: token.refreshToken },
      process.env.REFRESH_URL
    );
    return {
      ...token,
      accessToken: refreshedTokens.access,
      exp: jwtDecode(refreshedTokens.access).exp * 1000,
      refreshToken: refreshedTokens?.refresh ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return null;
  }
}

const options = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ account }) {
      const token = await fetchToken({
        provider: account?.provider,
        tokens: {
          access_token: account?.access_token,
          id_token: account?.id_token,
        },
      });
      if (token.access_token) {
        return true;
      }
      return false;
    },
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        const { access_token: accessToken, refresh_token: refreshToken } =
          await fetchToken({
            provider: account?.provider,
            tokens: {
              access_token: account?.access_token,
              id_token: account?.id_token,
            },
          });
        return {
          accessToken,
          exp: jwtDecode(accessToken).exp * 1000,
          refreshToken,
          idToken: account?.idToken,
          user,
        };
      }
      // Return previous token if the access token has not expired yet
      if (token && Date.now() < jwtDecode(token?.accessToken).exp * 1000) {
        return token;
      }
      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    // Attach user and token to be available in the frontend https://next-auth.js.org/v3/tutorials/refresh-token-rotation#server-side
    async session({ session, token }) {
      if (!session || !token) {
        return null;
      }
      const newSession = { ...session, ...token };
      return newSession;
    },
  },

  pages: {
    signIn: "/login",
    error: "/404", // Error code passed in query string as ?error=
  },
};

export default NextAuth(options);
