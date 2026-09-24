export default function Nav( {logo}:{logo:string}) {
    return (
    <nav className="md:flex flex-row items-center justify-between px-8 py-5 bg-gray-250 border-b">
      
      <div>
        <h2 className="text-xl md:text-3xl font-bold ">
          {logo}
        </h2>
      </div>
      <div className="flex flex-col items-center  ">
        <a href="/" className=" md:border-0 border md:m-0 m-2 px-[50%] py-[5%] text-gray-600 hover:text-black hover:shadow">
          Home
        </a>
        <a href="/about" className="  md:border-0 border md:m-0 px-[50%] py-[5%] m-2 text-gray-600 hover:text-black hover:shadow">
          About
        </a>

        <a href="/contact" className=" md:border-0 border md:m-0 px-[50%] py-[5%] m-2 text-gray-600 hover:text-black hover:shadow">
          Contact
        </a>
      </div>
    </nav>
  );
}