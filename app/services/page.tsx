 
import Services from "@/components/services";
import { business } from "@/config/business";
import Hero from "@/components/hero";
import FeatureGrid from "@/components/FeatureGrid";
import NotOffered from "@/components/NotOffered";
export default function Home() {
  return (
    <main>
    
    <Services
        headline={business.services.headline}
        subheadline={business.services.subheadline}
        services={business.services.contents}
        variant="full"
      />
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

export const metadata = {
  title: "Web Design & Development Services | Talos Industries",
  description: "Custom websites, property listings, payment integration, and SEO for businesses in Harare and across Zimbabwe.",
  alternates: {
    canonical: "/services",
  },
};