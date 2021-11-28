import { getSession } from "next-auth/client";

import { lists, APIRequest } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSession({ req });

    const results = await lists(session);
    return res.status(200).json(results);
  }

  if (req.method === "POST") {
    const session = await getSession({ req });

    const { body, method } = req;
    const results = await APIRequest(body, method, null, session);
    return res.status(200).json(results);
  }

  if (req.method === "PUT") {
    const session = await getSession({ req });

    const { body, method } = req;
    const results = await APIRequest(body, method, null, session);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
