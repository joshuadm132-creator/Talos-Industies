import { business } from "@/config/business";
export default function Nav() {
    return (
    <nav className="md:flex flex-row items-center justify-between px-8 py-5 bg-gray-250 border-b">
      
      <div>
        <h2 className="text-xl md:text-3xl font-bold ">
          {business.logo}
        </h2>
      </div>
      <div className="flex gap-6">
        <a href="/" className="text-gray-600 hover:text-black">
          Home
        </a>

        <a href="/about" className="text-gray-600 hover:text-black">
          About
        </a>

        <a href="/contact" className="text-gray-600 hover:text-black">
          Contact
        </a>
        <a href="/pricing" className="text-gray-600 hover:text-black">
          Pricing
        </a>
      </div>
    </nav>
  );
}