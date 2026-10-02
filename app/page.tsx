
import Hero from "@/components/hero";
import About from "@/components/AboutContent"
import Services from "@/components/services"
import { business } from "@/config/business";
import FeatureGrid from "@/components/FeatureGrid";
import Process from "@/components/workProcess";
 import OurWork from "@/components/workPreview";

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
    <Hero
        variant="home"
        title="Building the digital infrastructure for growing businesses."
        description="..."
      />

      <FeatureGrid
        eyebrow={business.whatWeDo.eyebrow}
        title={business.whatWeDo.title}
        subtitle={business.whatWeDo.subtitle}
        items={business.whatWeDo.items}
        variant={business.whatWeDo.variant}
        columns={business.whatWeDo.columns}
        background={business.whatWeDo.background}
        cta={business.whatWeDo.cta}
      />

          <FeatureGrid
        eyebrow={business.whyYouNeedWebsite.eyebrow}
        title={business.whyYouNeedWebsite.title}
        subtitle={business.whyYouNeedWebsite.subtitle}
        items={business.whyYouNeedWebsite.items}
        variant={business.whyYouNeedWebsite.variant}
        columns={business.whyYouNeedWebsite.columns}
        background={business.whyYouNeedWebsite.background}
        cta={business.whyYouNeedWebsite.cta}
      />

      <FeatureGrid
        eyebrow={business.whatWeDontDo.eyebrow}
        title={business.whatWeDontDo.title}
        subtitle={business.whatWeDontDo.subtitle}
        items={business.whatWeDontDo.items}
        variant={business.whatWeDontDo.variant}
        columns={business.whatWeDontDo.columns}
        background={business.whatWeDontDo.background}
      />
   
    <OurWork />
  <Process
          title={business.process.title}
          subtitle={business.process.subtitle}
          steps={business.process.steps}
          variant="flow"
        />
   <Services
      headline={business.services.headline}
      subheadline={business.services.subheadline}
      services={business.services.contents}
      variant="preview"
    />
     


    </main>


  );
  
}

//SEO AND AEO
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Design in Harare, Zimbabwe",
  description:
    "Talos Industries builds custom websites for Zimbabwe businesses. Fast, responsive, SEO ready. Starter sites from $250 with monthly care plans from $15.",
  alternates: {
    canonical: "/",
  },
};