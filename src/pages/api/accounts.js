import { getSession } from "next-auth/client";

import { allAccounts } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const results = await allAccounts(session, req.query);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
