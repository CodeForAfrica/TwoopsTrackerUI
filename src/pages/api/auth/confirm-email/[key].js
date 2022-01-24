export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const key = req?.query?.key;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key }),
      };
      const result = await fetch(
        `${process.env.NEXTAUTH_PROVIDERS_OAUTH_LOGIN_URL}registration/verify-email/`,
        options
      );

      if (result.ok) {
        // Redirect to login.
        res.redirect("/login");
      }
    } catch (error) {
      return res.status(error?.status || 401).json({
        message:
          error?.message ||
          "An error occurred while attempting to verify your email",
      });
    }
  }

  return res.status(405).end();
}
