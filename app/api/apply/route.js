import { NextResponse } from "next/server";
import { getTransporter, adminInbox, fromAddress, clean, genericAdminHtml, autoReplyHtml } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED = [
  "organizationName", "addressLine1", "postalCode", "state", "country", "mobile", "email",
  "contactName", "contactTitle", "contactPhone", "contactEmail", "natureOfOrganization",
  "companyType", "departments", "plantSize", "standard", "scope", "paymentMethod",
  "newApplication", "declarationName", "declarationTitle", "declarationDate",
];

// Label → field, in the order of the application form (sent to the IGS inbox).
const LABELS = [
  ["Organization Name", "organizationName"], ["Address Line 1", "addressLine1"], ["Address Line 2", "addressLine2"],
  ["Postal Code", "postalCode"], ["State", "state"], ["Country", "country"], ["Telephone No", "telephone"],
  ["Mobile No", "mobile"], ["Email", "email"], ["Website", "website"], ["Contact Name", "contactName"],
  ["Title & Department", "contactTitle"], ["Contact No", "contactPhone"], ["Contact Email", "contactEmail"],
  ["Nature of Organization", "natureOfOrganization"], ["Type of Company", "companyType"], ["No. of Branches", "branches"],
  ["GST No.", "gstNo"], ["No. of Departments", "departments"], ["Plant Size (sq. m)", "plantSize"],
  ["Standard Applied For", "standard"], ["Other Standard", "standardOther"], ["Scope of Certification", "scope"],
  ["Operates Shifts", "operatesShifts"], ["Number of Shifts", "shifts"], ["Max Employees On Site", "maxEmployees"],
  ["Part-Time Employees", "partTimeEmployees"], ["Payment Method", "paymentMethod"], ["New Application", "newApplication"],
  ["Existing Certificate No.", "existingCertificateNo"], ["Existing Standard", "existingStandard"],
  ["Transfer from another CB", "transfer"], ["Previous CB", "previousCB"],
  ["Department-wise Processes", "departmentProcesses"], ["Outsourced Processes", "outsourcedProcesses"],
  ["Declaration — Name", "declarationName"], ["Declaration — Job Title", "declarationTitle"], ["Declaration — Date", "declarationDate"],
];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => !String(body?.[k] ?? "").trim());
  if (missing.length || !body.declarationConfirm) {
    return NextResponse.json({ error: "Missing required fields.", missing }, { status: 400 });
  }
  if (!EMAIL_RE.test(String(body.email)) || !EMAIL_RE.test(String(body.contactEmail))) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const rows = LABELS.map(([label, key]) => {
    const v = body[key];
    if (typeof v === "boolean") return [label, v ? "Yes" : ""];
    return [label, String(v ?? "").slice(0, 3000)];
  });

  let transporter;
  try {
    transporter = getTransporter();
  } catch (error) {
    console.error("Application email is not configured:", error.message);
    return NextResponse.json({ error: "Email sending is not configured on the server yet." }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from: fromAddress(),
      to: adminInbox(),
      replyTo: clean(body.contactEmail || body.email),
      subject: `New Certification Application: ${clean(body.standard)} - ${clean(body.organizationName)}`,
      html: genericAdminHtml("New Certification Application", "A new application for certification was submitted online.", rows),
    });
    await transporter.sendMail({
      from: fromAddress(),
      to: clean(body.contactEmail || body.email),
      subject: "Application received - Ingrain Global Standard",
      html: autoReplyHtml({ name: body.contactName, what: "application for certification" }),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application send error:", error.message);
    return NextResponse.json({ error: "Failed to submit application." }, { status: 500 });
  }
}
