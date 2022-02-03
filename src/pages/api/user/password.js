import { getSession } from "next-auth/react";

import fetchJson from "@/twoopstracker/utils/fetchJson";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getSession({ req });
    const body = JSON.parse(req?.body);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_password1: body?.newPassword,
        new_password2: body?.newPassword,
        old_password: body?.oldPassword,
      }),
    };
    const result = await fetchJson(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}password/change/`,
      session,
      options
    );

    return res.json(result);
  }

  return res.status(405).end();
}
