import { NextResponse } from "next/server";
import { getTransporter, adminInbox, fromAddress, clean, genericAdminHtml } from "@/lib/mailer";

// "Subscribe Us" mailing-list sign-up → emailed to the IGS inbox.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const email = clean(body?.email, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  let transporter;
  try {
    transporter = getTransporter();
  } catch (error) {
    console.error("Subscribe email is not configured:", error.message);
    return NextResponse.json({ error: "Email sending is not configured on the server yet." }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from: fromAddress(),
      to: adminInbox(),
      replyTo: email,
      subject: `New mailing list subscriber: ${email}`,
      html: genericAdminHtml("New Mailing List Subscriber", "A visitor subscribed to IGS updates and news.", [["Email", email]]),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe send error:", error.message);
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}
