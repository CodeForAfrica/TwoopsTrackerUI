import { lists, APIRequest } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const results = await lists();
    return res.status(200).json(results);
  }

  if (req.method === "POST") {
    const { body, method } = req;
    const results = await APIRequest(body, method);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}