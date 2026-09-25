
import {Hero} from "@/components/hero";
import About from "@/components/about"
import Services from "@/components/services"
import { business } from "@/config/business";
import Gallery from "@/components/galler";
export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
    <Hero
      title={business.name}
      description={business.description}
    />
    <About
        title={business.About.title}
        description= {business.About.description}
      />
    <Services
        services={business.services}
      />

    <Gallery
        items={[
          {
            title: "Engine Diagnostics",
            src: "https://placehold.co/600x800?text=Engine+Diagnostics",
            alt: "Engine diagnostics",
          },
          {
            title: "Brake Replacement",
            src: "https://placehold.co/600x800?text=Brake+Replacement",
            alt: "Brake replacement",
          },
          {
            title: "Suspension Tuning",
            src: "https://placehold.co/600x800?text=Suspension+Tuning",
            alt: "Suspension tuning",
          },
        ]}
      />

    </main>


  );
  
}

