export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password1, firstName, lastName } = JSON.parse(req?.body);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
        password1,
        password2: password1,
      }),
    };
    const response = await fetch(
      `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}registration/`,
      options
    );
    const result = await response.json();
    return res.json({ success: response.ok, data: result });
  }

  return res.status(405).end();
}
