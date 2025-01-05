import { FC } from "react";

export const Footer: FC = () => {
  return (
    <section className="bg-black py-12 px-6 lg:px-20 text-white relative">
      <div className="absolute inset-0 bg-manga-pattern bg-cover bg-center opacity-20"></div>

      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-extrabold font-manga mb-4">
            Stay Connected
          </h3>
          <p className="font-mono text-lg">
            Follow us on our social media channels and stay updated with our
            latest news.
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition transform hover:scale-125"
          >
            <i className="fab fa-linkedin-in text-3xl"></i>
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition transform hover:scale-125"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition transform hover:scale-125"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm font-mono">
            ©{new Date().getFullYear()} Social Gauge. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    </section>
  );
};
