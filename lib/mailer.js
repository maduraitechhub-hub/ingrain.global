import nodemailer from "nodemailer";
import { siteConfig } from "@/data/siteConfig";

// Creates a reusable SMTP transporter from environment variables.
// See .env.example and README.md → "Contact & application emails".
export function getTransporter() {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
    throw new Error(
      "Email is not configured. Set EMAIL_HOST, EMAIL_USER, and EMAIL_PASS " +
        "in your hosting provider's environment variables (see .env.example)."
    );
  }

  const port = Number(EMAIL_PORT || 465);

  return nodemailer.createTransport({
    host: EMAIL_HOST,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
}

export function adminInbox() {
  return process.env.ADMIN_EMAIL || process.env.CONTACT_RECEIVER || process.env.EMAIL_USER;
}

export function fromAddress() {
  return `"${process.env.EMAIL_FROM_NAME || "Ingrain Global Website"}" <${process.env.EMAIL_USER}>`;
}

// Escape user-submitted text before putting it into email HTML.
export function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Strip line breaks from anything that goes into an email header.
export function clean(v, max = 150) {
  return String(v || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

const ACCENT = "#7a1017";
const DARK = "linear-gradient(135deg,#60080e 0%,#7a1017 60%,#82575b 100%)";

function emailShell({ headerTitle, bodyHtml }) {
  return `
  <div style="font-family:'Open Sans',Arial,sans-serif;max-width:640px;margin:0 auto;background:#fdfcfd;border:1px solid #e7d7d7;border-radius:6px;overflow:hidden;">
    <div style="background-color:#60080e;background-image:${DARK};padding:26px 32px;">
      <span style="color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;">Ingrain Global Standard</span>
      <h2 style="margin:14px 0 0;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:19px;">${headerTitle}</h2>
    </div>
    <div style="padding:28px 32px;color:#2c2222;font-size:14px;line-height:1.7;">
      ${bodyHtml}
    </div>
    <div style="background:#e7d7d7;padding:18px 32px;font-size:12px;color:#82575b;">
      <strong>${siteConfig.legalName}</strong><br/>
      ${siteConfig.fullAddress}<br/>
      Phone: ${siteConfig.phone} / ${siteConfig.phoneAlt} &nbsp;|&nbsp; Email: ${siteConfig.email}
    </div>
  </div>`;
}

export function rowsTable(rows) {
  const body = rows
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:6px 12px 6px 0;color:#82575b;font-weight:600;width:190px;vertical-align:top;">${esc(label)}</td>
      <td style="padding:6px 0;white-space:pre-wrap;">${esc(value)}</td>
    </tr>`
    )
    .join("");
  return `<table style="width:100%;border-collapse:collapse;margin-bottom:18px;">${body}</table>`;
}

export function adminNotificationHtml(raw) {
  const body = `
    <p style="margin:0 0 18px;">You've received a new enquiry from the website.</p>
    ${rowsTable([
      ["Name", raw.name],
      ["Email", raw.email],
      ["Phone", raw.phone],
      ["Service", raw.service || "General Enquiry"],
      ["Subject", raw.subject],
    ])}
    <div style="background:#e7d7d7;border-left:3px solid ${ACCENT};padding:14px 16px;border-radius:4px;">
      <p style="margin:0 0 6px;color:#82575b;font-weight:600;">Message</p>
      <p style="margin:0;white-space:pre-wrap;">${esc(raw.message)}</p>
    </div>
    <p style="margin:18px 0 0;font-size:13px;color:#82575b;">Reply directly to this email to respond to ${esc(raw.name)}.</p>
  `;
  return emailShell({ headerTitle: "New Website Enquiry", bodyHtml: body });
}

export function genericAdminHtml(title, intro, rows) {
  return emailShell({
    headerTitle: esc(title),
    bodyHtml: `<p style="margin:0 0 18px;">${esc(intro)}</p>${rowsTable(rows)}`,
  });
}

export function autoReplyHtml({ name, what = "enquiry" }) {
  const safeName = esc(name);
  const body = `
    <p style="margin:0 0 14px;">Dear ${safeName},</p>
    <p style="margin:0 0 14px;">
      Thank you for contacting ${siteConfig.legalName}. We've received your ${esc(what)} and our
      team will get back to you shortly.
    </p>
    <p style="margin:0 0 14px;">
      For urgent queries, call us at
      <a href="tel:${siteConfig.phoneRaw}" style="color:#60080e;">${siteConfig.phone}</a>
      or email <a href="mailto:${siteConfig.email}" style="color:#60080e;">${siteConfig.email}</a>.
    </p>
    <p style="margin:24px 0 0;">Warm regards,<br/>Team IGS</p>
  `;
  return emailShell({ headerTitle: `Thank You, ${safeName}`, bodyHtml: body });
}
