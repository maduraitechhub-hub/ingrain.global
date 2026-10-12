"use client";

import { useState } from "react";

// Fields mirror the "Apply Online" form on ingrain.world/apply-online.
const STANDARDS = ["ISO 9001", "ISO 13485", "ISO 14001", "ISO 21000", "ISO 22000", "ISO 27001", "ISO 45001", "HACCP", "GMP", "Other"];

const initialState = {
  organizationName: "",
  addressLine1: "",
  addressLine2: "",
  postalCode: "",
  state: "",
  country: "India",
  telephone: "",
  mobile: "",
  email: "",
  website: "",
  contactName: "",
  contactTitle: "",
  contactPhone: "",
  contactEmail: "",
  natureOfOrganization: "",
  companyType: "",
  branches: "",
  gstNo: "",
  departments: "",
  plantSize: "",
  standard: "",
  standardOther: "",
  scope: "",
  operatesShifts: "",
  shifts: "",
  maxEmployees: "",
  partTimeEmployees: "",
  paymentMethod: "",
  newApplication: "",
  existingCertificateNo: "",
  existingStandard: "",
  transfer: false,
  previousCB: "",
  departmentProcesses: "",
  outsourcedProcesses: "",
  declarationName: "",
  declarationTitle: "",
  declarationDate: "",
  declarationConfirm: false,
};

const REQUIRED = {
  organizationName: "Organization name",
  addressLine1: "Address line 1",
  postalCode: "Postal code",
  state: "State",
  country: "Country",
  mobile: "Mobile number",
  email: "Email",
  contactName: "Contact name",
  contactTitle: "Title & department",
  contactPhone: "Contact number",
  contactEmail: "Contact email",
  natureOfOrganization: "Nature of organization",
  companyType: "Type of company",
  departments: "Number of departments",
  plantSize: "Plant size",
  standard: "Standard applied for",
  scope: "Scope of certification",
  paymentMethod: "Payment method",
  newApplication: "New application",
  declarationName: "Print name",
  declarationTitle: "Job title",
  declarationDate: "Date",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({ id, label, required, error, children, wide }) {
  return (
    <div className={`applyField ${wide ? "applyFieldWide" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="applyRequired"> *</span>}
      </label>
      {children}
      {error && <span className="contactFormError">{error}</span>}
    </div>
  );
}

function Choice({ name, options, value, onChange }) {
  return (
    <div className="applyChoices" role="radiogroup">
      {options.map((opt) => (
        <label key={opt} className="applyChoice">
          <input type="radio" name={name} value={opt} checked={value === opt} onChange={onChange} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

export default function ApplyForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate(values) {
    const errs = {};
    for (const [key, label] of Object.entries(REQUIRED)) {
      if (!String(values[key] || "").trim()) errs[key] = `${label} is required.`;
    }
    if (values.email && !EMAIL_RE.test(values.email)) errs.email = "Please enter a valid email address.";
    if (values.contactEmail && !EMAIL_RE.test(values.contactEmail)) errs.contactEmail = "Please enter a valid email address.";
    if (values.standard === "Other" && !values.standardOther.trim()) errs.standardOther = "Please specify the standard.";
    if (!values.declarationConfirm) errs.declarationConfirm = "Please confirm the declaration.";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = document.querySelector(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialState);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contactSuccessModal applySuccess">
        <i className="bi bi-check-circle-fill" />
        <h3>Thank you for applying</h3>
        <p>
          Your application has been received. Our team will review it and contact you with the
          quotation and next steps, including payment details.
        </p>
        <button className="btn-luxury" onClick={() => setStatus("idle")}>
          Submit Another Application
        </button>
      </div>
    );
  }

  const input = (name, props = {}) => (
    <input id={`apply-${name}`} name={name} value={form[name]} onChange={handleChange} {...props} />
  );

  return (
    <form className="applyForm" onSubmit={handleSubmit} noValidate>
      <fieldset className="applySection">
        <legend>General Information</legend>
        <div className="applyGrid">
          <Field id="apply-organizationName" label="Organization Name" required error={errors.organizationName} wide>
            {input("organizationName", { autoComplete: "organization" })}
          </Field>
          <Field id="apply-addressLine1" label="Address Line 1" required error={errors.addressLine1}>
            {input("addressLine1", { autoComplete: "address-line1" })}
          </Field>
          <Field id="apply-addressLine2" label="Address Line 2">
            {input("addressLine2", { autoComplete: "address-line2" })}
          </Field>
          <Field id="apply-postalCode" label="Postal Code" required error={errors.postalCode}>
            {input("postalCode", { autoComplete: "postal-code" })}
          </Field>
          <Field id="apply-state" label="State" required error={errors.state}>
            {input("state", { autoComplete: "address-level1" })}
          </Field>
          <Field id="apply-country" label="Country" required error={errors.country}>
            {input("country", { autoComplete: "country-name" })}
          </Field>
          <Field id="apply-telephone" label="Telephone No">
            {input("telephone", { type: "tel" })}
          </Field>
          <Field id="apply-mobile" label="Mobile No" required error={errors.mobile}>
            {input("mobile", { type: "tel", autoComplete: "tel" })}
          </Field>
          <Field id="apply-email" label="Email" required error={errors.email}>
            {input("email", { type: "email", autoComplete: "email" })}
          </Field>
          <Field id="apply-website" label="Website">
            {input("website", { type: "url", placeholder: "https://" })}
          </Field>
        </div>

        <h4 className="applySubheading">Contact Person</h4>
        <div className="applyGrid">
          <Field id="apply-contactName" label="Contact Name" required error={errors.contactName}>
            {input("contactName", { autoComplete: "name" })}
          </Field>
          <Field id="apply-contactTitle" label="Title & Department" required error={errors.contactTitle}>
            {input("contactTitle")}
          </Field>
          <Field id="apply-contactPhone" label="Contact No" required error={errors.contactPhone}>
            {input("contactPhone", { type: "tel" })}
          </Field>
          <Field id="apply-contactEmail" label="Email ID" required error={errors.contactEmail}>
            {input("contactEmail", { type: "email" })}
          </Field>
        </div>
      </fieldset>

      <fieldset className="applySection">
        <legend>Organization Information</legend>
        <div className="applyGrid">
          <Field id="apply-natureOfOrganization" label="Nature of Organization" required error={errors.natureOfOrganization} wide>
            <Choice name="natureOfOrganization" options={["Manufacturer", "Service", "Others"]} value={form.natureOfOrganization} onChange={handleChange} />
          </Field>
          <Field id="apply-companyType" label="Type of Company" required error={errors.companyType} wide>
            <Choice name="companyType" options={["PVT Limited", "Partnership", "Sole Proprietorship", "Other"]} value={form.companyType} onChange={handleChange} />
          </Field>
          <Field id="apply-branches" label="No. of Branches">
            {input("branches", { inputMode: "numeric" })}
          </Field>
          <Field id="apply-gstNo" label="GST No.">
            {input("gstNo")}
          </Field>
          <Field id="apply-departments" label="No. of Departments" required error={errors.departments}>
            {input("departments", { inputMode: "numeric" })}
          </Field>
          <Field id="apply-plantSize" label="Plant Size (sq. metres)" required error={errors.plantSize}>
            {input("plantSize")}
          </Field>
          <Field id="apply-standard" label="Standard Applied For" required error={errors.standard}>
            <select id="apply-standard" name="standard" value={form.standard} onChange={handleChange}>
              <option value="">Choose your option</option>
              {STANDARDS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          {form.standard === "Other" && (
            <Field id="apply-standardOther" label="Other Standard" required error={errors.standardOther}>
              {input("standardOther")}
            </Field>
          )}
          <Field id="apply-scope" label="Scope of Certification" required error={errors.scope} wide>
            <textarea id="apply-scope" name="scope" rows={3} value={form.scope} onChange={handleChange} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="applySection">
        <legend>Facility Information</legend>
        <div className="applyGrid">
          <Field id="apply-operatesShifts" label="Does the organization operate shifts?">
            <Choice name="operatesShifts" options={["Yes", "No"]} value={form.operatesShifts} onChange={handleChange} />
          </Field>
          {form.operatesShifts === "Yes" && (
            <Field id="apply-shifts" label="If Yes, Number of Shifts">
              {input("shifts", { inputMode: "numeric" })}
            </Field>
          )}
          <Field id="apply-maxEmployees" label="Maximum employees on site at any one time">
            {input("maxEmployees", { inputMode: "numeric" })}
          </Field>
          <Field id="apply-partTimeEmployees" label="Number of Part-Time Employees">
            {input("partTimeEmployees", { inputMode: "numeric" })}
          </Field>
          <Field id="apply-paymentMethod" label="Payment Method" required error={errors.paymentMethod}>
            <Choice name="paymentMethod" options={["Pay Online", "Pay Later"]} value={form.paymentMethod} onChange={handleChange} />
          </Field>
          <Field id="apply-newApplication" label="Is this a new application for certification?" required error={errors.newApplication}>
            <Choice name="newApplication" options={["Yes", "No"]} value={form.newApplication} onChange={handleChange} />
          </Field>
          {form.newApplication === "No" && (
            <>
              <Field id="apply-existingCertificateNo" label="Certificate No.">
                {input("existingCertificateNo")}
              </Field>
              <Field id="apply-existingStandard" label="Standard">
                {input("existingStandard")}
              </Field>
            </>
          )}
          <div className="applyField applyFieldWide">
            <label className="applyCheckbox">
              <input type="checkbox" name="transfer" checked={form.transfer} onChange={handleChange} />
              <span>
                Transfer from another Certification Body — please forward your latest audit report and
                current certificate.
              </span>
            </label>
          </div>
          {form.transfer && (
            <Field id="apply-previousCB" label="Name of Previous CB" wide>
              {input("previousCB")}
            </Field>
          )}
          <Field id="apply-departmentProcesses" label="Department-wise process details" wide>
            <textarea id="apply-departmentProcesses" name="departmentProcesses" rows={3} value={form.departmentProcesses} onChange={handleChange} />
          </Field>
          <Field id="apply-outsourcedProcesses" label="Outsourced processes (vital processes or services other companies perform on your behalf)" wide>
            <textarea id="apply-outsourcedProcesses" name="outsourcedProcesses" rows={3} value={form.outsourcedProcesses} onChange={handleChange} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="applySection">
        <legend>Declaration</legend>
        <div className="applyGrid">
          <div className="applyField applyFieldWide">
            <label className="applyCheckbox">
              <input type="checkbox" name="declarationConfirm" checked={form.declarationConfirm} onChange={handleChange} />
              <span>
                I confirm that I am an authorized representative of the organization and that the
                information provided is correct.
              </span>
            </label>
            {errors.declarationConfirm && <span className="contactFormError">{errors.declarationConfirm}</span>}
          </div>
          <Field id="apply-declarationName" label="Print Name" required error={errors.declarationName}>
            {input("declarationName")}
          </Field>
          <Field id="apply-declarationTitle" label="Job Title" required error={errors.declarationTitle}>
            {input("declarationTitle")}
          </Field>
          <Field id="apply-declarationDate" label="Date" required error={errors.declarationDate}>
            {input("declarationDate", { type: "date" })}
          </Field>
        </div>
      </fieldset>

      {Object.keys(errors).some((k) => errors[k]) && (
        <p className="contactFormError contactFormErrorGlobal">Please complete the highlighted fields.</p>
      )}
      {status === "error" && (
        <p className="contactFormError contactFormErrorGlobal">
          Sorry! Something went wrong. Please try again, or email your application to head@ingrain.world.
        </p>
      )}

      <button type="submit" className="btn-luxury applySubmit" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span className="contactFormSpinner" /> Submitting...
          </>
        ) : (
          <>
            <i className="bi bi-send" /> Submit Application
          </>
        )}
      </button>
    </form>
  );
}
