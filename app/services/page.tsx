// app/services/page.tsx
import type { Metadata } from "next";
import Services from "@/components/services";
import { business } from "@/config/business";
import { site } from "@/config/businesses/site";
import Walkthrough from "@/components/walkTrough";
import NotOffered from "@/components/NotOffered";
import MapNavigation from "@/components/Map/MapNavigation";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description:
    "Custom websites, property listings, payment integration, and SEO for businesses in Harare and across Zimbabwe.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: `${site.url}/services`,
    title: "Web Design & Development Services",
    description:
      "Custom websites, property listings, payment integration, and SEO for Zimbabwe businesses.",
  },
};

/* AEO: Service + OfferCatalog structured data */
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design and Development",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: [
    { "@type": "Country", name: "Zimbabwe" },
    { "@type": "Place", name: "Southern Africa" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Valis Technologies Services",
    itemListElement: business.services.contents.map((s: any) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <MapNavigation />
      <Services
        headline={business.services.headline}
        subheadline={business.services.subheadline}
        services={business.services.contents}
        variant="full"
      />
      <Walkthrough walkthrough={business.services.walkthrough} />
      <NotOffered
        title={business.notOffered.title}
        intro={business.notOffered.intro}
        items={business.notOffered.items}
        closing={business.notOffered.closing}
        background={business.notOffered.background}
      />
    </main>
  );
}