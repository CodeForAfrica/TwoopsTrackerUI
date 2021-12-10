import { nanoid } from "nanoid";
import { AuthorizationCode } from "simple-oauth2";

import site from "@/twoopstracker/utils/site";

const client = new AuthorizationCode({
  client: {
    id: process.env.ADMIN_OAUTH_CLIENT_ID,
    secret: process.env.ADMIN_OAUTH_CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://github.com",
    authorizePath: "/login/oauth/authorize",
  },
});

// Authorization uri definition
const authorizationUri = client.authorizeURL({
  redirect_uri: new URL(
    process.env.ADMIN_OAUTH_BACKEND_AUTH_ENDPOINT,
    site.url
  ).toString(),
  scope: process.env.ADMIN_OAUTH_SCOPE,
  state: nanoid(),
});

// Initial page redirecting to Github
export default async (req, res) => {
  res.writeHead(302, { Location: authorizationUri });
  res.end();
};
