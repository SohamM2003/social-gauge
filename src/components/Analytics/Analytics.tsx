import React, { useState } from "react";
import { Chat, Comparisons, Engagement } from "..";

export const Analytics = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: React.SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <div
      className="relative p-4 sm:p-6 lg:p-12"
      style={{
        backgroundImage: "url(./assets/bg-noot.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left",
      }}
    >
      {/* Manga-style Background */}
      <div className="absolute inset-0 bg-manga-pattern bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Tab Menu */}
      <div className="flex flex-row justify-center items-center gap-6 sm:gap-16 mb-8 z-10 relative">
        {/* Tab 1 */}
        <div
          onClick={() => handleTabClick(1)}
          className={`cursor-pointer py-3 px-6 transition-all duration-300 text-lg sm:text-xl font-manga font-bold tracking-wide transform hover:scale-105 hover:rotate-3 ${
            activeTab === 1
              ? "bg-white text-black shadow-xl border-4 border-black"
              : "bg-white text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-4 border-black"
          }`}
        >
          Comparisons
        </div>

        {/* Tab 2 */}
        <div
          onClick={() => handleTabClick(2)}
          className={`cursor-pointer py-3 px-6 transition-all duration-300 text-lg sm:text-xl font-manga font-bold tracking-wide transform hover:scale-105 hover:rotate-3 ${
            activeTab === 2
              ? "bg-white text-black shadow-xl border-4 border-black"
              : "bg-white text-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white hover:border-4 border-black"
          }`}
        >
          Engagement
        </div>

        {/* Tab 3 */}
        <div
          onClick={() => handleTabClick(3)}
          className={`cursor-pointer py-3 px-6 transition-all duration-300 text-lg sm:text-xl font-manga font-bold tracking-wide transform hover:scale-105 hover:rotate-3 ${
            activeTab === 3
              ? "bg-white text-black shadow-xl border-4 border-black"
              : "bg-white text-black hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-500 hover:text-white hover:border-4 border-black"
          }`}
        >
          Chat
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative z-10">
        {activeTab === 1 && <Comparisons />}
        {activeTab === 2 && <Engagement />}
        {activeTab === 3 && <Chat />}
      </div>

      {/* Manga-like Animations */}
      <div className="absolute top-10 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    </div>
  );
};
