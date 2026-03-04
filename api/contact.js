export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name = "",
    email = "",
    phone = "",
    subject = "",
    readableSubject = "General Inquiry",
    message = "",
  } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "cascoconstructionlimited@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "CASCO Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    return res.status(500).json({ error: "Server is not configured for email sending" });
  }

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "N/A"}`,
    `Subject: ${readableSubject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Website] ${readableSubject}`,
        text: textBody,
      }),
    });

    if (!resendResponse.ok) {
      return res.status(502).json({ error: "Email provider rejected the request" });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Failed to send message" });
  }
}
