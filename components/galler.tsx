type GalleryItem = {
  title: string;
  src: string;
  alt: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Work
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-88 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}