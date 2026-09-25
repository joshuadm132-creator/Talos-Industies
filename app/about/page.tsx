import About from "@/components/about";
import { business } from "@/config/business";

export default function AboutPage() {
  return (
    <main>
      <About
        title={business.About.title}
        description= {business.About.description}
      />
    </main>
  );
}