import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECEIVER_EMAIL = "utsavkarki0215@gmail.com";

/**
 * Escape user-provided values before inserting them into HTML.
 * This prevents HTML injection inside the email body.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
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

    /**
     * Honeypot
     *
     * This field is hidden from normal users.
     * If a bot fills it, silently pretend the submission succeeded.
     */
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    /**
     * Basic required-field validation
     */
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Type validation
     */
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof projectType !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          error: "Invalid form data.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Phone is optional.
     * If provided, it must be a string.
     */
    if (phone !== undefined && typeof phone !== "string") {
      return NextResponse.json(
        {
          error: "Invalid phone number.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Trim values once so validation and email content
     * use the same cleaned data.
     */
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone?.trim() || "";
    const cleanProjectType = projectType.trim();
    const cleanMessage = message.trim();

    /**
     * Make sure required values aren't just whitespace.
     */
    if (
      !cleanName ||
      !cleanEmail ||
      !cleanProjectType ||
      !cleanMessage
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Length validation
     */
    if (cleanName.length > 100) {
      return NextResponse.json(
        {
          error: "Name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanEmail.length > 200) {
      return NextResponse.json(
        {
          error: "Email is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanPhone.length > 20) {
      return NextResponse.json(
        {
          error: "Phone number is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanProjectType.length > 100) {
      return NextResponse.json(
        {
          error: "Project type is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        {
          error: "Message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Email validation
     */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Sanitize values before inserting them into HTML.
     */
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(
      cleanPhone || "Not provided"
    );
    const safeProjectType = escapeHtml(cleanProjectType);
    const safeMessage = escapeHtml(cleanMessage);

    /**
     * Make sure Resend is configured.
     */
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    /**
     * Send email through Resend.
     */
    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "onboarding@resend.dev",

      to: [RECEIVER_EMAIL],

      replyTo: cleanEmail,

      subject: `New CodeDrip inquiry — ${cleanProjectType}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            padding: 24px;
            color: #0f172a;
            background: #ffffff;
          "
        >
          <h2
            style="
              margin: 0 0 24px;
              color: #0f172a;
            "
          >
            New CodeDrip Project Inquiry
          </h2>

          <div
            style="
              padding: 20px;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              background: #f8fafc;
            "
          >
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
          </div>

          <div
            style="
              margin-top: 24px;
              padding: 20px;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
            "
          >
            <h3
              style="
                margin-top: 0;
                color: #0f172a;
              "
            >
              Project Message
            </h3>

            <p
              style="
                white-space: pre-wrap;
                line-height: 1.7;
                color: #334155;
              "
            >
              ${safeMessage}
            </p>
          </div>

          <hr
            style="
              margin: 28px 0;
              border: 0;
              border-top: 1px solid #e2e8f0;
            "
          />

          <p
            style="
              margin: 0;
              color: #64748b;
              font-size: 14px;
            "
          >
            You can reply directly to this email to contact
            ${safeName}.
          </p>
        </div>
      `,
    });

    /**
     * Resend failed.
     */
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error:
            "Failed to send message. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    /**
     * Success.
     */
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}