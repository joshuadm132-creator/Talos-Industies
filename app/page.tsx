import Nav from "@/components/nav";
import {Hero} from "@/components/hero";
import About from "@/components/about"
import Services from "@/components/services"

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <Nav logo ="Template Business" />
     <Hero 
      title="place hero tag"
      description="We provide quality services for our customers."
      />
    <About
        title="About Our Business"
        description="We provide reliable automotive services to customers in Harare."
      />
    <Services
        services={[
          {
            title: "Engine Repairs",
            description: "Professional engine diagnostics and repairs.",
          },
          {
            title: "Brake Services",
            description: "Brake inspection, maintenance and repairs.",
          },
          {
            title: "Oil Changes",
            description: "Keep your engine running smoothly.",
          },
           {
            title: "window Tint",
            description: "Professional engine diagnostics and repairs.",
          },
          {
            title: "Carb clean",
            description: "Brake inspection, maintenance and repairs.",
          },
          {
            title: "Happy ending",
            description: "Keep your engine running smoothly.",
          },
        ]}
      />
    </main>
  );
}

console.log("Hieeeee")