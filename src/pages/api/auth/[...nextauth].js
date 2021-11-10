import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
    signIn: async (user) => {
      // check useremail against db/env to see if they are allowed to login
      if (process.env.ALLOWED_EMAILS.includes(user.email)) {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    },
  },

  pages: {
    signIn: "/",
    error: "/404", // Error code passed in query string as ?error=
  },
};

export default (req, res) => NextAuth(req, res, options);
