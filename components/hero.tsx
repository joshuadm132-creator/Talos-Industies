type HeroProps = {
  title: string;
  description: string;
};

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="min-h-[90vh] flex flex-col items-start justify-center text-center px-6 bg-gray-100 md:items-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl">
        {title}
      </h1>

      <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl">
        {description}
      </p>

      <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Contact Us
      </button>
    </section>
  );
}