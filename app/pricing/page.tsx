
import Pricing from "@/components/pricing";
import { business } from "@/config/business";

export default function Home() {
  return (
    <main>

      <Pricing
        tiers={business.teir}
        
        comparisonFeatures={business.table}
      />
    </main>
  );
}