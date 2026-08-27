import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const wish = body.wish?.trim();

    if (!wish) {
      return NextResponse.json(
        {
          error: "Wish is required",
        },
        {
          status: 400,
        }
      );
    }

    if (wish.length > 300) {
      return NextResponse.json(
        {
          error: "Wish is too long",
        },
        {
          status: 400,
        }
      );
    }

    const receiver = process.env.WISH_RECEIVER_EMAIL;

    if (!receiver) {
      return NextResponse.json(
        {
          error: "Receiver email is not configured",
        },
        {
          status: 500,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "Winnie's Birthday <onboarding@resend.dev>",
      to: receiver,
      subject: "💌 Winnie made a birthday wish",
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 40px 25px;
            background: #09090f;
            color: #ffffff;
            border-radius: 20px;
          "
        >

          <h1
            style="
              color: #f9a8d4;
              margin-bottom: 10px;
            "
          >
            💌 Winnie made a wish
          </h1>

          <p
            style="
              color: #a1a1aa;
              font-size: 15px;
            "
          >
            Someone special just made a birthday wish. ✨
          </p>

          <div
            style="
              margin-top: 30px;
              padding: 25px;
              background: #18181f;
              border-radius: 16px;
              border: 1px solid #27272a;
            "
          >

            <p
              style="
                color: #71717a;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 2px;
              "
            >
              Winnie's wish
            </p>

            <p
              style="
                color: #f4f4f5;
                font-size: 16px;
                line-height: 1.8;
                font-style: italic;
              "
            >
              "${wish}"
            </p>

          </div>

          <p
            style="
              margin-top: 30px;
              color: #71717a;
              font-size: 12px;
            "
          >
            Sent from Winnie's birthday website ❤️
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Failed to send wish",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Wish API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}