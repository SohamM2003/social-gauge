import { FC } from "react";

export const Features: FC = () => {
  return (
    <section
      className="relative bg-gray-50 py-12 px-6 lg:px-20"
      style={{
        backgroundImage: "url(./assets/bg-noot.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left",
      }}
    >
      <h2 className="text-5xl lg:text-6xl font-bold text-center mb-24 font-manga relative z-10">
        <span className="relative z-10">Features</span>
        <span className="absolute -top-1 right-1 text-5xl lg:text-6xl font-bold text-yellow-300 -z-10 font-manga w-[100%]">
          Features
        </span>
      </h2>

      {/* Cards Container */}
      <div className="grid gap-12 lg:grid-cols-3 justify-center">
        {/* Card 1 */}
        <div className="relative bg-white border-4 border-black rounded-xl shadow-manga p-8 h-[300px] w-[300px] mx-auto transition transform hover:scale-105">
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-black rounded-xl z-0"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
            AI Analytics
          </h3>
          <p className="text-gray-600 font-mono">
            Unlock insights with our AI-powered analytics to boost your social
            media performance.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white border-4 border-black rounded-xl shadow-manga p-8 h-[300px] w-[300px] mx-auto transition transform hover:scale-105">
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-black rounded-xl z-0"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
            Engagement Booster
          </h3>
          <p className="text-gray-600 font-mono">
            Enhance your post engagement with actionable recommendations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white border-4 border-black rounded-xl shadow-manga p-8 h-[300px] w-[300px] mx-auto transition transform hover:scale-105">
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-black rounded-xl z-0"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
            Provide Recomadation
          </h3>
          <p className="text-gray-600 font-mono">
            Provide you recommendations based on your questions.
          </p>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-10"></div>
    </section>
  );
};