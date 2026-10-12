"use client";

import { useState } from "react";

// Same fields as the "Verify Certificate" pop-up on ingrain.world.
// There is no public certificate database in this project, so the request is
// emailed to IGS, who confirm validity to the requester.
export default function VerifyCertificateForm() {
  const [form, setForm] = useState({ verificationType: "", certificateNumber: "", name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = {};
    if (!form.verificationType) errs.verificationType = "Please select a verification type.";
    if (!form.certificateNumber.trim()) errs.certificateNumber = "Please enter the certificate number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email so we can reply.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contactSuccessModal">
        <i className="bi bi-check-circle-fill" />
        <h3>Verification request received</h3>
        <p>
          We&apos;ll confirm the validity and certification details for certificate{" "}
          <strong>{form.certificateNumber}</strong> by email.
        </p>
        <button
          className="btn-luxury"
          onClick={() => {
            setForm({ verificationType: "", certificateNumber: "", name: "", email: "" });
            setStatus("idle");
          }}
        >
          Verify Another Certificate
        </button>
      </div>
    );
  }

  return (
    <form className="contactForm verifyForm" onSubmit={handleSubmit} noValidate>
      <div className="contactFormGroup">
        <label htmlFor="verify-type">Verification Type *</label>
        <select id="verify-type" name="verificationType" value={form.verificationType} onChange={handleChange}>
          <option value="">Select an option</option>
          <option>Organization Certificate</option>
          <option>Auditor Certificate</option>
        </select>
        {errors.verificationType && <span className="contactFormError">{errors.verificationType}</span>}
      </div>
      <div className="contactFormGroup">
        <label htmlFor="verify-number">Certificate Number *</label>
        <input id="verify-number" name="certificateNumber" value={form.certificateNumber} onChange={handleChange} placeholder="Certificate registration number" />
        {errors.certificateNumber && <span className="contactFormError">{errors.certificateNumber}</span>}
      </div>
      <div className="contactFormRow">
        <div className="contactFormGroup">
          <label htmlFor="verify-name">Your Name</label>
          <input id="verify-name" name="name" autoComplete="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="contactFormGroup">
          <label htmlFor="verify-email">Your Email *</label>
          <input id="verify-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="contactFormError">{errors.email}</span>}
        </div>
      </div>
      {status === "error" && (
        <p className="contactFormError contactFormErrorGlobal">Sorry! Something went wrong. Please try again.</p>
      )}
      <button type="submit" className="btn-luxury contactFormSubmit" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span className="contactFormSpinner" /> Submitting...
          </>
        ) : (
          <>
            <i className="bi bi-patch-check" /> Submit
          </>
        )}
      </button>
    </form>
  );
}
