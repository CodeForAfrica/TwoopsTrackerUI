import { getSession } from "next-auth/client";

import { allAccounts } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const queryParams = {};

    if (req.query.page) {
      queryParams.page = req.query.page;
    }
    if (req.query.pageSize) {
      queryParams.pageSize = req.query.pageSize;
    }
    const results = await allAccounts(session, queryParams);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
