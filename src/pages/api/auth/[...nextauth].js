import jwtDecode from "jwt-decode";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function fetchToken(token, url = process.env.AUTH_URL) {
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
      { refresh: token.refreshToken, id_token: token.idToken },
      process.env.REFRESH_URL
    );

    return {
      ...token,
      accessToken: refreshedTokens.access,
      exp: jwtDecode(refreshedTokens.access).exp * 1000,
      refreshToken: refreshedTokens?.refresh ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],

  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
     *                           Return `false` to deny access
     */
    signIn: async (user, account) => {
      const token = await fetchToken({
        provider: account?.provider,
        tokens: {
          access_token: account?.accessToken,
          id_token: account?.idToken,
        },
      });
      if (token.access_token) {
        return true;
      }
      return false;
    },
    jwt: async (token, user, account) => {
      // Initial sign in
      if (account && user) {
        const { access_token: accessToken, refresh_token: refreshToken } =
          await fetchToken({
            provider: account?.provider,
            tokens: {
              access_token: account?.accessToken,
              id_token: account?.idToken,
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
      if (Date.now() < token.exp) {
        return token;
      }
      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    // Attach user and token to be available in the frontend https://next-auth.js.org/v3/tutorials/refresh-token-rotation#server-side
    session: async (session, token) => {
      const newSession = { ...session };
      if (token) {
        newSession.user = token.user;
        newSession.accessToken = token.accessToken;
        newSession.error = token.error;
      }
      return newSession;
    },
  },
  pages: {
    signIn: "/login",
    error: "/404", // Error code passed in query string as ?error=
  },
};

export default (req, res) => NextAuth(req, res, options);
