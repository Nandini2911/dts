import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          success: false,
          message: "Email configuration is missing.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Double Trouble Studio" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f5f7fb; padding: 24px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 24px; border-radius: 14px;">
            <h2 style="color: #0D2444; margin-bottom: 16px;">
              New Website Inquiry
            </h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>User Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

            <p><strong>Message:</strong></p>
            <p style="line-height: 1.6;">${message}</p>

            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p style="font-size: 13px; color: #666;">
              This inquiry was submitted from the Double Trouble Studio website.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mail successfully sent.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Mail not sent. Please try again.",
      },
      { status: 500 }
    );
  }
}