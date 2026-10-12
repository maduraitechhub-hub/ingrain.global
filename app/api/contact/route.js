import { NextResponse } from "next/server";
import {
  getTransporter,
  adminInbox,
  fromAddress,
  clean,
  adminNotificationHtml,
  autoReplyHtml,
} from "@/lib/mailer";

// Handles the Contact page form and the homepage "Request a Call Back" form.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, subject, message, type } = body || {};
  const isCallback = type === "callback";

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email)) || String(message).length > 5000) {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  let transporter;
  try {
    transporter = getTransporter();
  } catch (error) {
    console.error("Contact form email is not configured:", error.message);
    return NextResponse.json({ error: "Email sending is not configured on the server yet." }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from: fromAddress(),
      to: adminInbox(),
      replyTo: clean(email),
      subject: `${isCallback ? "Call Back Request" : "New Enquiry"}: ${clean(subject) || clean(service) || "General"} - ${clean(name)}`,
      html: adminNotificationHtml({ name, email, phone, service, subject: isCallback ? "Request a Call Back" : subject, message }),
    });

    await transporter.sendMail({
      from: fromAddress(),
      to: clean(email),
      subject: "We've received your enquiry - Ingrain Global Standard",
      html: autoReplyHtml({ name, what: isCallback ? "call back request" : "enquiry" }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form send error:", error.message);
    return NextResponse.json({ error: "Failed to send enquiry. Please try again or contact us directly." }, { status: 500 });
  }
}
