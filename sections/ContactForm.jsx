"use client";

import { useState } from "react";
import { allServices } from "@/data/services";

const initialState = { name: "", email: "", phone: "", service: "", subject: "", message: "" };

export default function ContactForm({ variant = "full", title }) {
  const compact = variant === "callback";
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function validate(values) {
    const errs = {};
    if (!values.name || values.name.trim().length < 3) {
      errs.name = "Please enter your full name (min 3 characters).";
    }
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "Please enter a valid email address.";
    }
    // International clients: accept 7–15 digits with optional country code
    const digits = (values.phone || "").replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!compact && (!values.message || values.message.trim().length < 10)) {
      errs.message = "Please share a few details about your enquiry (min 10 characters).";
    }
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          type: compact ? "callback" : "contact",
          message: form.message || (compact ? "Please call me back." : ""),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={`contactFormWrapper ${compact ? "contactFormWrapperCompact" : ""}`} data-aos="fade-up">
      {title && <h3 className="contactFormTitle">{title}</h3>}
      {status === "success" && (
        <div className="contactSuccessModal">
          <i className="bi bi-check-circle-fill" />
          <h3>Your message was sent successfully.</h3>
          <p>Thank you for reaching out. Our team will contact you shortly.</p>
          <button className="btn-luxury" onClick={() => setStatus("idle")}>
            Send Another Enquiry
          </button>
        </div>
      )}

      {status !== "success" && (
        <form className="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="contactFormRow">
            <div className="contactFormGroup">
              <label htmlFor={`${variant}-name`}>Full Name *</label>
              <input id={`${variant}-name`} name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              {errors.name && <span className="contactFormError">{errors.name}</span>}
            </div>
            <div className="contactFormGroup">
              <label htmlFor={`${variant}-phone`}>Phone Number *</label>
              <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="e.g. +91 98765 43210" />
              {errors.phone && <span className="contactFormError">{errors.phone}</span>}
            </div>
          </div>

          <div className="contactFormRow">
            <div className="contactFormGroup">
              <label htmlFor={`${variant}-email`}>Email Address *</label>
              <input id={`${variant}-email`} name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
              {errors.email && <span className="contactFormError">{errors.email}</span>}
            </div>
            <div className="contactFormGroup">
              <label htmlFor={`${variant}-service`}>Service Required</label>
              <select id={`${variant}-service`} name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service</option>
                {allServices.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>Surveillance / Recertification</option>
                <option>Certification Transfer</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {!compact && (
          <>
          <div className="contactFormGroup">
            <label htmlFor={`${variant}-subject`}>Subject</label>
            <input id={`${variant}-subject`} name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. ISO 9001 certification enquiry" />
          </div>

          <div className="contactFormGroup">
            <label htmlFor={`${variant}-message`}>Message *</label>
            <textarea id={`${variant}-message`} name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your organization and requirements..." />
            {errors.message && <span className="contactFormError">{errors.message}</span>}
          </div>
          </>
          )}

          {status === "error" && (
            <p className="contactFormError contactFormErrorGlobal">
              Sorry! Something went wrong. Please try again or call us directly.
            </p>
          )}

          <button type="submit" className="btn-luxury contactFormSubmit" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <span className="contactFormSpinner" /> Sending...
              </>
            ) : (
              <>
                <i className="bi bi-send" /> {compact ? "Submit" : "Send"}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
