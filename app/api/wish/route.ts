import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Get the API key only when the request is actually made.
    // This prevents Next.js from trying to initialize Resend
    // during the production build.
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const receiverEmail = process.env.WISH_RECEIVER_EMAIL;

    if (!receiverEmail) {
      console.error("WISH_RECEIVER_EMAIL is not configured.");

      return Response.json(
        {
          success: false,
          error: "Receiver email is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Get submitted data
    const body = await request.json();

    const wish =
      typeof body.wish === "string"
        ? body.wish.trim()
        : "";

    // Validate wish
    if (!wish) {
      return Response.json(
        {
          success: false,
          error: "Please write a wish first.",
        },
        { status: 400 }
      );
    }

    // Optional protection against extremely large requests
    if (wish.length > 2000) {
      return Response.json(
        {
          success: false,
          error: "Your wish is too long.",
        },
        { status: 400 }
      );
    }

    // Send the wish
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
  console.error("Resend error:", error);

  return Response.json(
    {
      success: false,
      error: error.message || "Failed to send the wish.",
    },
    { status: 500 }
  );
}

    console.log("Wish sent successfully:", data?.id);

    return Response.json({
      success: true,
      message: "Wish sent successfully ❤️",
      id: data?.id,
    });
  } catch (error) {
    console.error("Wish API error:", error);

    return Response.json(
      {
        success: false,
        error: "Something went wrong while sending the wish.",
      },
      { status: 500 }
    );
  }
}

