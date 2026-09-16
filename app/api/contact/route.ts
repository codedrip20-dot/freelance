import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECEIVER_EMAIL = "utsavkarki0215@gmail.com";

const ALLOWED_ORIGINS = [
  "https://codedriptech.com",
  "https://www.codedriptech.com",
  "https://codedriptech.netlify.app",
];

function getCorsHeaders(origin: string | null) {
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin)
      ? origin
      : "https://codedriptech.com";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Handle browser CORS preflight request
export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");

  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      projectType,
      message,
      website,
    } = body;

    // Honeypot — catches simple bots
    if (website) {
      return NextResponse.json(
        { success: true },
        { headers: corsHeaders }
      );
    }

    // Basic validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Type validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof projectType !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid form data." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Phone is optional, but if provided it must be a string
    if (phone !== undefined && typeof phone !== "string") {
      return NextResponse.json(
        { error: "Invalid phone number." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Length validation
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    if (email.length > 200) {
      return NextResponse.json(
        { error: "Email is too long." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    if (phone && phone.length > 20) {
      return NextResponse.json(
        { error: "Phone number is too long." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Sanitize values before inserting them into HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone?.trim() || "Not provided");
    const safeProjectType = escapeHtml(projectType.trim());
    const safeMessage = escapeHtml(message.trim());

    // Send email through Resend
    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",

      to: [RECEIVER_EMAIL],

      replyTo: email.trim(),

      subject: `New CodeDrip inquiry — ${projectType}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: auto;
            color: #0f172a;
          "
        >
          <h2>New CodeDrip Project Inquiry</h2>

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <p>
            <strong>Phone:</strong>
            ${safePhone}
          </p>

          <p>
            <strong>Project Type:</strong>
            ${safeProjectType}
          </p>

          <hr />

          <h3>Project Message</h3>

          <p style="white-space: pre-wrap;">
            ${safeMessage}
          </p>

          <hr />

          <p>
            You can reply directly to this email to contact ${safeName}.
          </p>
        </div>
      `,
    });

    // Resend failed
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      {
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}