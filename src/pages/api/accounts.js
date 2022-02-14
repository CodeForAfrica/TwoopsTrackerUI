import { getSession } from "next-auth/react";

import { tweeterAccounts } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const results = await tweeterAccounts(req.query, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
