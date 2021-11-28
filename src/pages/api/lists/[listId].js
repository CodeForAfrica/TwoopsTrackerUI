import { getSession } from "next-auth/client";

import { APIRequest } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const { body, method, query } = req;
  if (method === "PUT") {
    const session = await getSession({ req });

    const results = await APIRequest(body, method, query.listId, session);
    return res.status(200).json(results);
  }

  if (method === "GET" || method === "DELETE") {
    const results = await APIRequest(null, method, query.listId);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
