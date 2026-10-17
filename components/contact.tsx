
"use client";

import { useState, type FormEvent } from "react";

type ContactContent = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  detailsTitle: string;
  detailsDescription: string;
  formEyebrow: string;
  formTitle: string;
  formDescription: string;
  fields: {
    name: string;
    phone: string;
    message: string;
  };
  placeholders: {
    name: string;
    phone: string;
    message: string;
  };
  submitLabel: string;
  inquiries: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
};

type SocialLink = {
  label: string;
  href: string;
};

type ContactProps = {
  content: ContactContent;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  socials?: SocialLink[];
};

const inputClass =
  "mt-2 w-full min-w-0 rounded-none border border-border bg-background px-4 py-3 text-text placeholder:text-text-muted/70 outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

export default function Contact({
  content,
  email,
  phone,
  whatsapp,
  address,
  socials = [],
}: ContactProps) {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [notice, setNotice] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
    setNotice("");
  }

  function selectTopic(id: string) {
    const topic = content.inquiries.items.find((item) => item.id === id);
    if (!topic) return;

    setSelectedTopic(id);
    setFormData((previous) => ({
      ...previous,
      message: previous.message.trim()
        ? previous.message
        : `I'm interested in ${topic.title.toLowerCase()}.\n\n`,
    }));

    document.getElementById("contact-message")?.focus({ preventScroll: true });
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("");

    const number = whatsapp.replace(/\D/g, "");
    if (!number) {
      setNotice("WhatsApp is not configured. Please contact us by email.");
      return;
    }

    const topic = content.inquiries.items.find((item) => item.id === selectedTopic);

    const message = [
      "Hello Valis Tech!",
      "",
      `Name: ${formData.name}`,
      formData.phone ? `Phone: ${formData.phone}` : "",
      topic ? `Enquiry: ${topic.title}` : "",
      "",
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="bg-background text-text">
      {/* INTRODUCTION */}
      <section className="border-b bg-hero-bg border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-green-500" />
            {content.eyebrow}
            <span className="h-px w-8 bg-primary" />
          </p>

          <h1 className="mt-6 max-w-4xl text-slate-200 text-4xl font-heading font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {content.title}{" "}
            <span className="text-primary">{content.highlightedTitle}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
            {content.description}
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* CONTACT INFORMATION */}
          <aside className="flex min-w-0 flex-col">
            <div className="border-b border-border pb-5">
              <h2 className="text-xl font-heading font-bold">{content.detailsTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {content.detailsDescription}
              </p>
            </div>

            <div className="divide-y divide-border">
              <div className="py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-block break-all font-medium text-text hover:text-primary"
                >
                  {email}
                </a>
              </div>

              <div className="py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Phone
                </p>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="mt-2 inline-block font-medium text-text hover:text-primary"
                >
                  {phone}
                </a>
              </div>

              <div className="py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Location
                </p>
                <p className="mt-2 font-medium">{address}</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            {socials.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Find us elsewhere
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-muted underline-offset-4 hover:text-primary hover:underline"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* CONTACT FORM */}
          <div id="contact-form" className="min-w-0 border-t-2 border-primary pt-6 sm:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {content.formEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-heading font-bold sm:text-3xl">
              {content.formTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              {content.formDescription}
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* NAME */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold">
                  {content.fields.name} <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={updateField}
                  placeholder={content.placeholders.name}
                  className={inputClass}
                />
              </div>

              {/* PHONE */}
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold">
                  {content.fields.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  value={formData.phone}
                  onChange={updateField}
                  placeholder={content.placeholders.phone}
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold">
                  {content.fields.message} <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  minLength={3}
                  maxLength={5000}
                  value={formData.message}
                  onChange={updateField}
                  placeholder={content.placeholders.message}
                  className={`${inputClass} resize-y`}
                />
                <p className="mt-2 text-right text-xs text-text-muted">
                  {formData.message.length}/5000 characters
                </p>
              </div>

              {notice && (
                <p
                  role="status"
                  className="border-l-2 border-primary bg-surface px-4 py-3 text-sm leading-6"
                >
                  {notice}
                </p>
              )}

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-3 bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Continue to WhatsApp <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHAT CAN WE HELP WITH? */}
      <section aria-labelledby="contact-inquiries-title" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {content.inquiries.eyebrow}
              </p>
              <h2 id="contact-inquiries-title" className="mt-4 max-w-md text-3xl font-heading font-bold leading-tight sm:text-4xl">
                {content.inquiries.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-text-muted sm:text-base">
                {content.inquiries.description}
              </p>
            </div>

            <div>
              {content.inquiries.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selectedTopic === item.id}
                  onClick={() => selectTopic(item.id)}
                  className={`group grid w-full grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-start gap-4 border-b border-border py-5 text-left transition-colors first:border-t hover:bg-primary/[0.04] sm:grid-cols-[3rem_minmax(0,1fr)_2rem] ${
                    selectedTopic === item.id ? "bg-primary/[0.06]" : ""
                  }`}
                >
                  <span className="pt-0.5 text-sm font-semibold tabular-nums text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-text group-hover:text-primary">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-text-muted">
                      {item.description}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </div>

          <p className="mt-8 border-t border-border pt-5 text-sm text-text-muted">
            Every project starts with a conversation.{" "}
            <span className="font-semibold text-text">Project quotes are free.</span>
          </p>
        </div>
      </section>
    </main>
  );
}


// "use client";

// import { useState, type FormEvent } from "react";

// type ContactContent = {
//   eyebrow: string;
//   title: string;
//   highlightedTitle: string;
//   description: string;
//   detailsTitle: string;
//   detailsDescription: string;
//   formEyebrow: string;
//   formTitle: string;
//   formDescription: string;
//   channels: {
//     email: string;
//     whatsapp: string;
//   };
//   fields: {
//     name: string;
//     email: string;
//     phone: string;
//     message: string;
//   };
//   placeholders: {
//     name: string;
//     email: string;
//     phone: string;
//     message: string;
//   };
//   submitLabel: string;
//   inquiries: {
//     eyebrow: string;
//     title: string;
//     description: string;
//     items: {
//       id: string;
//       title: string;
//       description: string;
//     }[];
//   };
// };

// type SocialLink = {
//   label: string;
//   href: string;
// };

// type ContactProps = {
//   content: ContactContent;
//   email: string;
//   phone: string;
//   whatsapp: string;
//   address: string;
//   socials?: SocialLink[];
// };

// type ContactChannel = "email" | "whatsapp";

// const inputClass =
//   "mt-2 w-full min-w-0 rounded-none border border-border bg-background px-4 py-3 text-text placeholder:text-text-muted/70 outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

// export default function Contact({
//   content,
//   email,
//   phone,
//   whatsapp,
//   address,
//   socials = [],
// }: ContactProps) {
//   const [channel, setChannel] =
//     useState<ContactChannel>("email");

//   const [selectedTopic, setSelectedTopic] =
//     useState("");

//   const [notice, setNotice] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   function updateField(
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement
//     >
//   ) {
//     const { name, value } = e.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setNotice("");
//   }

//   function selectTopic(id: string) {
//     const topic = content.inquiries.items.find(
//       (item) => item.id === id
//     );

//     if (!topic) return;

//     setSelectedTopic(id);

//     setFormData((previous) => ({
//       ...previous,
//       message: previous.message.trim()
//         ? previous.message
//         : `I'm interested in ${topic.title.toLowerCase()}.\n\n`,
//     }));

//     document
//       .getElementById("contact-message")
//       ?.focus({ preventScroll: true });

//     document.getElementById("contact-form")?.scrollIntoView({
//       behavior: window.matchMedia(
//         "(prefers-reduced-motion: reduce)"
//       ).matches
//         ? "auto"
//         : "smooth",
//       block: "center",
//     });
//   }

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setNotice("");

//     if (channel === "email") {
//       // Email delivery will be connected to a server endpoint
//       // in the next implementation step.
//       setNotice(
//         "The contact form is ready for email integration."
//       );
//       return;
//     }

//     const number = whatsapp.replace(/\D/g, "");

//     if (!number) {
//       setNotice(
//         "WhatsApp is not configured. Please contact us by email."
//       );
//       return;
//     }

//     const topic = content.inquiries.items.find(
//       (item) => item.id === selectedTopic
//     );

//     const message = [
//       "Hello Valis Tech!",
//       "",
//       `Name: ${formData.name}`,
//       formData.email
//         ? `Email: ${formData.email}`
//         : "",
//       formData.phone
//         ? `Phone: ${formData.phone}`
//         : "",
//       topic ? `Enquiry: ${topic.title}` : "",
//       "",
//       formData.message,
//     ]
//       .filter(Boolean)
//       .join("\n");

//     window.open(
//       `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
//       "_blank",
//       "noopener,noreferrer"
//     );
//   }

//   return (
//     <main className="bg-background text-text">
//       {/* INTRODUCTION */}
//       <section className="border-b border-border">
//         <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
//           <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
//             <span className="h-px w-8 bg-green-700" />
//             {content.eyebrow}
//             <span className="h-px w-8 bg-primary" />
//           </p>

//           <h1 className="mt-6 max-w-4xl text-4xl font-heading font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
//             {content.title}{" "}
//             <span className="text-primary">
//               {content.highlightedTitle}
//             </span>
//           </h1>

//           <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
//             {content.description}
//           </p>
//         </div>
//       </section>

//       {/* CONTACT DETAILS + FORM */}
//       <section>
//         <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
//           {/* CONTACT INFORMATION */}
//           <aside className="flex min-w-0 flex-col">
//             <div className="border-b border-border pb-5">
//               <h2 className="text-xl font-heading font-bold">
//                 {content.detailsTitle}
//               </h2>

//               <p className="mt-2 text-sm leading-6 text-text-muted">
//                 {content.detailsDescription}
//               </p>
//             </div>

//             <div className="divide-y divide-border">
//               <div className="py-5">
//                 <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
//                   Email
//                 </p>

//                 <a
//                   href={`mailto:${email}`}
//                   className="mt-2 inline-block break-all font-medium text-text hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//                 >
//                   {email}
//                 </a>
//               </div>

//               <div className="py-5">
//                 <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
//                   Phone
//                 </p>

//                 <a
//                   href={`tel:${phone.replace(/[^\d+]/g, "")}`}
//                   className="mt-2 inline-block font-medium text-text hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//                 >
//                   {phone}
//                 </a>
//               </div>

//               <div className="py-5">
//                 <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
//                   Location
//                 </p>

//                 <p className="mt-2 font-medium">{address}</p>
//               </div>
//             </div>

//             {/* DIRECT WHATSAPP BUTTON */}
//             <div className="mt-6 border-t border-border pt-6">
//               <p className="text-sm leading-6 text-text-muted">
//                 Prefer a quick conversation? Connect with us
//                 directly.
//               </p>

//               <a
//                 href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
//               >
//                 <svg
//                   aria-hidden="true"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   className="h-5 w-5"
//                 >
//                   <path d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5Z" />
//                   <path d="M8.5 8.3c.3-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.9 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.7 1.6-.5.5-1.2.8-2 .7-1.1-.1-2.5-.7-3.8-1.9-1.1-1-2-2.3-2.3-3.4-.3-1.1.1-2.2.6-3Z" />
//                 </svg>

//                 Open WhatsApp
//                 <span aria-hidden="true">↗</span>
//               </a>
//             </div>

//             {/* SOCIAL LINKS */}
//             {socials.length > 0 && (
//               <div className="mt-8 border-t border-border pt-6">
//                 <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
//                   Find us elsewhere
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
//                   {socials.map((social) => (
//                     <a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm text-text-muted underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//                     >
//                       {social.label}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </aside>

//           {/* CONTACT FORM */}
//           <div
//             id="contact-form"
//             className="min-w-0 border-t-2 border-primary pt-6 sm:pt-8"
//           >
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
//               {content.formEyebrow}
//             </p>

//             <h2 className="mt-3 text-2xl font-heading font-bold sm:text-3xl">
//               {content.formTitle}
//             </h2>

//             <p className="mt-3 text-sm leading-6 text-text-muted">
//               {content.formDescription}
//             </p>

//             <form
//               onSubmit={handleSubmit}
//               className="mt-7 space-y-5"
//             >
//               {/* CHANNEL TOGGLE */}
//               <fieldset>
//                 <legend className="mb-3 text-sm font-semibold">
//                   How would you like to contact us?
//                 </legend>

//                 <div className="grid grid-cols-2 border border-border">
//                   <button
//                     type="button"
//                     aria-pressed={channel === "email"}
//                     onClick={() => {
//                       setChannel("email");
//                       setNotice("");
//                     }}
//                     className={`min-h-12 px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
//                       channel === "email"
//                         ? "bg-primary text-white"
//                         : "bg-background text-text-muted hover:bg-surface"
//                     }`}
//                   >
//                     {content.channels.email}
//                   </button>

//                   <button
//                     type="button"
//                     aria-pressed={channel === "whatsapp"}
//                     onClick={() => {
//                       setChannel("whatsapp");
//                       setNotice("");
//                     }}
//                     className={`min-h-12 border-l border-border px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
//                       channel === "whatsapp"
//                         ? "bg-emerald-600 text-white"
//                         : "bg-background text-text-muted hover:bg-surface"
//                     }`}
//                   >
//                     {content.channels.whatsapp}
//                   </button>
//                 </div>

//                 <p className="mt-3 text-sm leading-6 text-text-muted">
//                   {channel === "email"
//                     ? "Send an enquiry through our website."
//                     : "Complete your message and continue to WhatsApp to send it."}
//                 </p>
//               </fieldset>

//               {/* NAME */}
//               <div>
//                 <label
//                   htmlFor="contact-name"
//                   className="block text-sm font-semibold"
//                 >
//                   {content.fields.name}{" "}
//                   <span className="text-primary">*</span>
//                 </label>

//                 <input
//                   id="contact-name"
//                   name="name"
//                   autoComplete="name"
//                   required
//                   maxLength={100}
//                   value={formData.name}
//                   onChange={updateField}
//                   placeholder={content.placeholders.name}
//                   className={inputClass}
//                 />
//               </div>

//               {/* EMAIL + PHONE */}
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="contact-email"
//                     className="block text-sm font-semibold"
//                   >
//                     {content.fields.email}
//                     {channel === "email" && (
//                       <span className="text-primary"> *</span>
//                     )}
//                   </label>

//                   <input
//                     id="contact-email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required={channel === "email"}
//                     maxLength={254}
//                     value={formData.email}
//                     onChange={updateField}
//                     placeholder={content.placeholders.email}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="contact-phone"
//                     className="block text-sm font-semibold"
//                   >
//                     {content.fields.phone}
//                   </label>

//                   <input
//                     id="contact-phone"
//                     name="phone"
//                     type="tel"
//                     autoComplete="tel"
//                     maxLength={30}
//                     value={formData.phone}
//                     onChange={updateField}
//                     placeholder={content.placeholders.phone}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               {/* MESSAGE */}
//               <div>
//                 <label
//                   htmlFor="contact-message"
//                   className="block text-sm font-semibold"
//                 >
//                   {content.fields.message}{" "}
//                   <span className="text-primary">*</span>
//                 </label>

//                 <textarea
//                   id="contact-message"
//                   name="message"
//                   rows={5}
//                   required
//                   minLength={3}
//                   maxLength={5000}
//                   value={formData.message}
//                   onChange={updateField}
//                   placeholder={content.placeholders.message}
//                   className={`${inputClass} resize-y`}
//                 />

//                 <p className="mt-2 text-right text-xs text-text-muted">
//                   {formData.message.length}/5000 characters
//                 </p>
//               </div>

//               {notice && (
//                 <p
//                   role="status"
//                   className="border-l-2 border-primary bg-surface px-4 py-3 text-sm leading-6"
//                 >
//                   {notice}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 className={`flex min-h-12 w-full items-center justify-center gap-3 px-5 py-3 font-semibold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
//                   channel === "whatsapp"
//                     ? "bg-emerald-600 hover:bg-emerald-700 focus-visible:ring-emerald-500"
//                     : "bg-primary hover:bg-primary-hover focus-visible:ring-primary"
//                 }`}
//               >
//                 {channel === "email"
//                   ? content.submitLabel
//                   : "Continue to WhatsApp"}

//                 <span aria-hidden="true">↗</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* WHAT CAN WE HELP WITH? */}
//       <section
//         aria-labelledby="contact-inquiries-title"
//         className="border-t border-border bg-surface"
//       >
//         <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
//           <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
//                 {content.inquiries.eyebrow}
//               </p>

//               <h2
//                 id="contact-inquiries-title"
//                 className="mt-4 max-w-md text-3xl font-heading font-bold leading-tight sm:text-4xl"
//               >
//                 {content.inquiries.title}
//               </h2>

//               <p className="mt-4 max-w-md text-sm leading-7 text-text-muted sm:text-base">
//                 {content.inquiries.description}
//               </p>
//             </div>

//             <div>
//               {content.inquiries.items.map((item, index) => (
//                 <button
//                   key={item.id}
//                   type="button"
//                   aria-pressed={selectedTopic === item.id}
//                   onClick={() => selectTopic(item.id)}
//                   className={`group grid w-full grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-start gap-4 border-b border-border py-5 text-left transition-colors first:border-t hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:grid-cols-[3rem_minmax(0,1fr)_2rem] ${
//                     selectedTopic === item.id
//                       ? "bg-primary/[0.06]"
//                       : ""
//                   }`}
//                 >
//                   <span className="pt-0.5 text-sm font-semibold tabular-nums text-primary">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="min-w-0">
//                     <span className="block font-semibold text-text group-hover:text-primary">
//                       {item.title}
//                     </span>

//                     <span className="mt-1 block text-sm leading-6 text-text-muted">
//                       {item.description}
//                     </span>
//                   </span>

//                   <span
//                     aria-hidden="true"
//                     className="text-xl text-primary transition-transform group-hover:translate-x-1"
//                   >
//                     ↗
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-8 border-t border-border pt-5 text-sm text-text-muted">
//             Every project starts with a conversation.{" "}
//             <span className="font-semibold text-text">
//               Project quotes are free.
//             </span>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }
