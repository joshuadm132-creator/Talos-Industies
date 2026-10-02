import Pricing from "@/components/pricing";
import { business } from "@/config/business";

export default function PricingPage() {
  return (
    <main>
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

export const metadata = {
  title: "Packages & Care Plans | Talos Industries",
  description: "Transparent website packages and monthly care plans for Zimbabwe businesses. Starter, Business, and Pro builds from $250.",
};