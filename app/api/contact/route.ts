
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Double Trouble Studio" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Website Inquiry from ${name.replace(/[\r\n]/g, " ")}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f5f7fb;padding:24px;">
          <div style="max-width:600px;margin:auto;background:#fff;padding:24px;border-radius:14px;">

            <h2 style="color:#0D2444;">
              New Website Inquiry
            </h2>

            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>

            <p><strong>Message:</strong></p>

            <p style="line-height:1.6;white-space:pre-wrap;">
              ${escapeHtml(message)}
            </p>

            <hr style="border:0;border-top:1px solid #e5e7eb;margin:24px 0;">

            <p style="font-size:13px;color:#666;">
              This inquiry was submitted from the
              Double Trouble Studio website.
            </p>

          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
