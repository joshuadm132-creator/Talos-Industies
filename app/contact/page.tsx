
import Contact from "@/components/contact";
import { business } from "@/config/business";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Talos Industries in Harare. Send a message, chat on WhatsApp, or call to discuss your website project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
  

      <Contact
        phone={business.contact.phone}
        email={business.contact.email}
        address={business.contact.address}
        whatsapp={business.contact.whatsapp}
        socials={business.contact.socials}
        form={business.contact.form}
      />

     
    </main>
  );
}