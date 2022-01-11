import { getSession } from "next-auth/react";

import fetchJson from "@/twoopstracker/utils/fetchJson";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === "PATCH") {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      }),
    };
    const results = await fetchJson(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}user/`,
      session,
      options
    );
    return res.json(results);
  }

  return res.status(405).end();
}
