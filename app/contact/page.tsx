import Contact from "@/components/contact";
import { business } from "@/config/business";
export default function ContactPage() {
  return (
    <main>
      <Contact
        phone={business.contact.phone}
        email={business.contact.email}
        address={business.contact.adress}
      />
    </main>
  );
}