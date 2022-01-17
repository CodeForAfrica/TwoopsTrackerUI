import { getSession } from "next-auth/react";

import fetchJson from "@/twoopstracker/utils/fetchJson";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).end();
  }
  if (req.method === "POST") {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: JSON.parse(req.body).email,
        password1: JSON.parse(req.body).password,
        password2: JSON.parse(req.body).password,
      }),
    };
    const user = await fetchJson(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}registration/`,
      null,
      options
    );
    const updatedUser = await fetchJson(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}user/`,
      { accessToken: user.access_token },
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: JSON.parse(req.body).firstName,
          last_name: JSON.parse(req.body).lastName,
        }),
      }
    );
    return res.json(updatedUser);
  }

  return res.status(405).end();
}
