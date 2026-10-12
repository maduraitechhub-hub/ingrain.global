import { NextResponse } from "next/server";
import { getTransporter, adminInbox, fromAddress, clean, genericAdminHtml } from "@/lib/mailer";

// Certificate verification request → emailed to IGS, who reply to the requester.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { verificationType, certificateNumber, name, email } = body || {};
  if (!verificationType || !certificateNumber || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ""))) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  let transporter;
  try {
    transporter = getTransporter();
  } catch (error) {
    console.error("Verification email is not configured:", error.message);
    return NextResponse.json({ error: "Email sending is not configured on the server yet." }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from: fromAddress(),
      to: adminInbox(),
      replyTo: clean(email),
      subject: `Certificate Verification: ${clean(certificateNumber, 80)} (${clean(verificationType, 40)})`,
      html: genericAdminHtml("Certificate Verification Request", "Someone has asked to verify a certificate. Reply to this email to confirm validity.", [
        ["Verification Type", verificationType],
        ["Certificate Number", String(certificateNumber).slice(0, 120)],
        ["Requested By", name],
        ["Email", email],
      ]),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Verification send error:", error.message);
    return NextResponse.json({ error: "Failed to submit request." }, { status: 500 });
  }
}
