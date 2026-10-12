"use client";

import { useState } from "react";

// Mailing-list sign-up. Sends the address to the IGS inbox via /api/subscribe.
export default function FooterSubscribe({ className = "" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | invalid

  async function handleSubmit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`footerSubscribe ${className}`} onSubmit={handleSubmit} noValidate>
      <label htmlFor={`subscribe-${className || "footer"}`} className="visually-hidden">
        Email address
      </label>
      <input
        id={`subscribe-${className || "footer"}`}
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle") setStatus("idle");
        }}
      />
      <button type="submit" aria-label="Subscribe" disabled={status === "sending"}>
        <i className={`bi ${status === "sending" ? "bi-hourglass-split" : "bi-send"}`} />
      </button>
      {status === "success" && <p className="footerSubscribeMsg">Thank you for subscribing!</p>}
      {status === "invalid" && <p className="footerSubscribeMsg footerSubscribeMsgError">Please enter a valid email address.</p>}
      {status === "error" && <p className="footerSubscribeMsg footerSubscribeMsgError">Sorry! Something went wrong. Please try again.</p>}
    </form>
  );
}
