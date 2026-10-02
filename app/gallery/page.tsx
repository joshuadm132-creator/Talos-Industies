import Gallery from "@/components/galler";
import { business } from "@/config/business";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent websites, listings sites, landing pages, and SEO campaigns built by Talos Industries for businesses in Zimbabwe.",
  alternates: {
    canonical: "/gallery",
  },
};
export default function ContactPage() {
  return (
    <main>
      <Gallery
        title={business.Gallery.title}
        items={business.Gallery.items}
        
      />
    </main>
  );
}