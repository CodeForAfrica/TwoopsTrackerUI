import { getSession } from "next-auth/client";

import { allUsernames } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const queryParams = {};

    if (req.query.page) {
      queryParams.page = req.query.page;
    }
    if (req.query.page_size) {
      queryParams.pageSize = req.query.page_size;
    }
    const results = await allUsernames(session, queryParams);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
