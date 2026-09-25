type AboutProps = {
  title: string;
  description: string;
};

export default function About({ title, description }: AboutProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}