import Reveal from "@/components/Reveal";

type ValueItem = {
  id: string;
  title: string;
  description: string;
};

type ValuesProps = {
  title: string;
  subtitle?: string;
  items: ValueItem[];
};

export default function Values({ title, subtitle, items }: ValuesProps) {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-text-muted leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <div className="h-full p-8 border border-border bg-background hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}