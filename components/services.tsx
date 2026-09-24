type Service = {
  title: string;
  description: string;
};

type ServicesProps = {
  services: Service[];
};

export default function Services({ services }: ServicesProps) {
  return (
   <section className="px-6 py-20">
      <h2 className="text-3xl font-bold text-center">
        Our Services
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}