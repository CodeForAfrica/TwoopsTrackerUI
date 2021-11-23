import { getSession } from "next-auth/client";

export default async function request(
  url,
  method = "GET",
  payload,
  isProtected = false
) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (isProtected) {
    const session = await getSession();
    if (session) {
      const { accessToken } = session;
      if (accessToken) {
        headers.append("Authorization", `Bearer ${accessToken}`);
      }
    }
  }
  const data = await fetch(url, {
    "Content-Type": "application/json",
    method,
    headers,
    body: JSON.stringify(payload),
  });

  const result = await data.json();
  return result;
}
