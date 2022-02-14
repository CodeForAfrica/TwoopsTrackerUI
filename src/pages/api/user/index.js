import { getSession } from "next-auth/react";

import fetchJson from "@/twoopstracker/utils/fetchJson";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const session = await getSession({ req });
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await fetchJson(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}user/`,
      session,
      options
    );
    console.log("boom", result);

    return res.status(result.status).json();
  }

  return res.status(405).end();
}
