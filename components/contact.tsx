"use client";

import { useState, FormEvent } from "react";
import {
  SOCIAL_ICONS,
  WhatsAppIcon,
  type SocialIconName,
} from "@/components/socialIcon";

/* ---------- Inline icons ---------- */
function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

type SocialLink = {
  label?: string;
  href?: string;
  icon: SocialIconName;
};

type ContactProps = {
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
  socials: SocialLink[];
  businessName?: string;
  form?: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitLabel: string;
    successMessage: string;
  };
};

export default function Contact({
  phone,
  email,
  address,
  whatsapp,
  socials = [],
  businessName = "Website",
  form,
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [method, setMethod] = useState<"email" | "whatsapp">("email");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppLink = () => {
    if (!whatsapp) return "#";

    const lines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      "",
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // WhatsApp needs name + message. Email needs name + email + message.
    const requiresEmail = method === "email";

    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name and message.");
      return;
    }

    if (requiresEmail && !formData.email.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your email address.");
      return;
    }

    if (requiresEmail && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMsg("That email address doesn't look right.");
      return;
    }

    if (method === "whatsapp") {
      window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New message from ${formData.name}`,
          from_name: businessName,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* ---------- Section header ---------- */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">
            Contact
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-text">
            Let's build something together
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Choose how you'd like to reach us — by email or WhatsApp. We reply
            within one business day.
          </p>
        </div>

        {/* ---------- Toggle ---------- */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 bg-background border border-border rounded-xl shadow-sm">
            <button
              type="button"
              onClick={() => setMethod("email")}
              aria-pressed={method === "email"}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition ${
                method === "email"
                  ? "bg-primary text-text-inverse shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <MailIcon className="w-4 h-4" />
              Send Email
            </button>

            <button
              type="button"
              onClick={() => setMethod("whatsapp")}
              disabled={!whatsapp}
              aria-pressed={method === "whatsapp"}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed ${
                method === "whatsapp"
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>

        {/* ---------- Two columns ---------- */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {/* LEFT: Contact info cards */}
          <div className="space-y-4">
            {/* Phone card */}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-md transition"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-text-inverse transition">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Phone
                </p>
                <p className="mt-1 text-lg font-medium text-text truncate">
                  {phone}
                </p>
              </div>
            </a>

            {/* Email card */}
            <a
              href={`mailto:${email}`}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-md transition"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-text-inverse transition">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Email
                </p>
                <p className="mt-1 text-lg font-medium text-text truncate">
                  {email}
                </p>
              </div>
            </a>

            {/* Address card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <PinIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Address
                </p>
                <p className="mt-1 text-lg font-medium text-text">{address}</p>
              </div>
            </div>

            {/* Socials */}
            {socials.length > 0 && (
              <div className="pt-4">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Follow us
                </p>
                <div className="mt-3 flex gap-3">
                  {socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.label ?? social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-background border border-border text-text-muted hover:text-text-inverse hover:bg-hero-bg hover:border-hero-bg transition"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Form */}
          {form && (
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-heading font-bold text-text">
                {method === "whatsapp" ? "Send us a WhatsApp" : form.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {method === "whatsapp"
                  ? "Fill in your details and we'll open WhatsApp with your message ready to send."
                  : form.subtitle}
              </p>

              {status === "sent" ? (
                <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/30 text-text">
                  {method === "whatsapp"
                    ? "WhatsApp opened in a new tab — press send there to deliver your message."
                    : form.successMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.name}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.email}
                      {method === "whatsapp" && (
                        <span className="ml-2 text-xs font-normal text-text-muted">
                          (optional)
                        </span>
                      )}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.phone}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full py-3 rounded-lg font-medium transition disabled:opacity-60 disabled:cursor-not-allowed ${
                      method === "whatsapp"
                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                        : "bg-primary text-text-inverse hover:bg-primary-hover"
                    }`}
                  >
                    {status === "sending"
                      ? "Sending..."
                      : method === "whatsapp"
                        ? "Open WhatsApp"
                        : form.submitLabel}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
