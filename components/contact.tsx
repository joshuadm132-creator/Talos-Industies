type ContactProps = {
  phone: string;
  email: string;
  address: string;
};

export default function Contact({
  phone,
  email,
  address,
}: ContactProps) {
  return (
    <section className="px-6 py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mt-6 text-gray-600">
          Get in touch with us for more information about our services.
        </p>

        <div className="mt-8 space-y-3 text-gray-700">
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </section>
  );
}