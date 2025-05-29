import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-8 md:py-16 md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          Pet <br/>
          Check Up
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Spot-on illustration for your website,
          landing page and mobile application.
        </p>
        <div className="mt-4">
          <Link 
            href="#" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            READ MORE
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img 
          src="/pet-checkup-illustration.png" 
          alt="Pet Checkup Illustration" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
