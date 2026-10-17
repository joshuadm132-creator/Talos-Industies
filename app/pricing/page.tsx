// app/pricing/page.tsx
import type { Metadata } from "next";
import Pricing from "@/components/pricing";
import { business } from "@/config/business";
import { site } from "@/config/businesses/site";

export const metadata: Metadata = {
  title: "Packages & Care Plans",
  description:
    "Transparent website packages and monthly care plans for Zimbabwe businesses. Starter, Business, and Pro builds from $250.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: `${site.url}/pricing`,
    title: "Packages & Care Plans | Valis Technologies",
    description:
      "Starter, Business, and Pro website builds from $250 with monthly care plans from $15.",
  },
};

/* AEO: AggregateOffer structured data
   Adjust lowPrice/highPrice to match your real tiers. */
const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  name: `${site.name} Website Packages`,
  priceCurrency: "USD",
  lowPrice: "250",
  highPrice: "1500",
  offerCount: business.Pricing.tiers.length,
  provider: { "@id": `${site.url}/#organization` },
  offers: business.Pricing.tiers.map((t: any) => ({
    "@type": "Offer",
    name: t.name,
    price: t.price?.toString().replace(/[^0-9.]/g, ""),
    priceCurrency: "USD",
    description: t.description,
    url: `${site.url}/pricing#${t.name.toLowerCase().replace(/\s+/g, "-")}`,
    availability: "https://schema.org/InStock",
  })),
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Pricing
        title={business.Pricing.title}
        subtitle={business.Pricing.subtitle}
        tabs={business.Pricing.tabs}
        tiers={business.Pricing.tiers}
        comparisonFeatures={business.Pricing.comparison}
        addons={business.Pricing.addons}
        care={business.Pricing.care}
        includedEverywhere={business.Pricing.includedEverywhere}
      />
    </main>
  );
}