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
        new_password1: req.body.newPassword1,
        newpassword2: req.body.newPassword2,
      }),
    };
    const results = await fetchJson(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}password/change/`,
      session,
      options
    );
    return res.json(results);
  }

  return res.status(405).end();
}
