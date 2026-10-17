// app/contact/page.tsx
import type { Metadata } from "next";
import Contact from "@/components/contact";
import { business } from "@/config/business";
import { site } from "@/config/businesses/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Valis Technologies in Harare. Send a message, chat on WhatsApp, or call to discuss your website project.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${site.url}/contact`,
    title: "Contact Valis Technologies",
    description:
      "Message, WhatsApp, or call to discuss your website project in Zimbabwe.",
  },
};

/* AEO: ContactPage structured data */
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.contact.phone,
        email: business.contact.email,
        contactType: "sales",
        areaServed: "ZW",
        availableLanguage: ["en"],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Contact
        content={business.contactContent}
        phone={business.contact.phone}
        email={business.contact.email}
        address={business.contact.address}
        whatsapp={business.contact.whatsapp}
        socials={business.contact.socials}
      />
    </main>
  );
}