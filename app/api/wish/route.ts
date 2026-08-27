
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    console.log("=== WISH API STARTED ===");

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.WISH_RECEIVER_EMAIL;

    console.log("API key exists:", !!apiKey);
    console.log("Receiver email exists:", !!receiverEmail);

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return Response.json(
        {
          success: false,
          error: "RESEND_API_KEY is missing on the server.",
        },
        { status: 500 }
      );
    }

    if (!receiverEmail) {
      console.error("WISH_RECEIVER_EMAIL is missing");

      return Response.json(
        {
          success: false,
          error: "WISH_RECEIVER_EMAIL is missing on the server.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    console.log("Request body received:", body);

    const wish =
      typeof body.wish === "string"
        ? body.wish.trim()
        : "";

    if (!wish) {
      return Response.json(
        {
          success: false,
          error: "Please write a wish first.",
        },
        { status: 400 }
      );
    }

    if (wish.length > 2000) {
      return Response.json(
        {
          success: false,
          error: "Your wish is too long.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    console.log("Sending email...");

    const { data, error } = await resend.emails.send({
      from: "Winnie's Birthday <onboarding@resend.dev>",
      to: receiverEmail,
      subject: "🎂 Winnie made a birthday wish ❤️",
      text: `
Winnie made a birthday wish! ❤️

--------------------------------

${wish}

--------------------------------

Sent from Winnie's Birthday Website 🎂
      `.trim(),
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        {
          success: false,
          error: error.message || "Resend failed to send the email.",
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return Response.json({
      success: true,
      message: "Wish sent successfully ❤️",
      id: data?.id,
    });
  } catch (error) {
    console.error("=== WISH API ERROR ===");
    console.error(error);

    const message =
      error instanceof Error
        ? error.message
        : String(error);

    return Response.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}

