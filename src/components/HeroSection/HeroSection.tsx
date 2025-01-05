import { FC } from "react";
import { Link } from "react-router-dom";

export const HeroSection: FC = () => {
  return (
    <section
      className="relative bg-gray-50"
      style={{
        backgroundImage: "url(./assets/bg-noot.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left right bottom",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-20 py-12 lg:py-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight relative z-10">
            <span className="relative z-10 font-manga">Social Gauge</span>
            <span className="absolute top-1 -left-1 text-5xl lg:text-6xl font-bold text-blue-400 -z-10 font-manga w-[100%]">
              Social Gauge
            </span>
          </h1>
          <p className="mt-6 text-lg font-mono lg:text-xl text-gray-600 border-4 border-black p-4 bg-white inline-block shadow-manga">
            Boost your posts and increase engagement with our AI-powered Social
            Media Performance Analysis tool, designed to optimize your content
            strategy and help you reach a broader audience.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            {/* Get Started Button */}
            <Link
              to={"/analytics"}
              className="relative px-6 py-3 font-bold text-white bg-blue-400 transition transform hover:scale-105 active:scale-95 shadow-manga"
            >
              Get Started
            </Link>

            {/* Learn More Button */}
            <button className="relative px-6 py-3 font-bold text-black bg-white border-4 border-black transition transform hover:scale-105 active:scale-95 shadow-manga">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-black rounded-lg z-10 lg:-top-6 lg:-left-6"></div>
          <img
            src="./assets/HeroSection.jpg"
            alt="Hero Section"
            className="rounded-lg shadow-xl lg:w-full w-[100vw] relative z-20"
          />
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-10"></div>
    </section>
  );
};
