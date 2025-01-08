import { FC, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-black relative">
      <div className="px-[1vw] sm:px-[1.2vw] lg:px-[1.5vw] lg:pt-[0.4vw]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="text-2xl font-bold">
            <img
              src="/assets/logo-social-gauge.png"
              className="lg:w-[20vw] md:w-[20vw] w-[50vw]"
              alt="Social Gauge"
            />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="text-white focus:outline-none z-50"
            onClick={toggleMenu}
          >
            <div>
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                color={isMenuOpen ? "white" : "black"}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Half-Circle Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black ${
          isMenuOpen ? "menu-open" : "menu-closed"
        } transition-all duration-500 ease-in-out z-40`}
      >
        <div
          className={`absolute top-0 right-0 h-full w-full bg-black ${
            isMenuOpen ? "clip-open" : "clip-closed"
          } transition-all duration-500 ease-in-out`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              to="/"
              className="text-white font-montserrat text-2xl hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/analytics"
              className="text-white font-montserrat text-2xl hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              Analysis
            </Link>
            <a
              href="https://github.com/SohamM2003/social-gauge"
              target="_BLANK"
              className="text-white font-montserrat text-2xl hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              GitHub Repository
            </a>
            <a
              href="https://www.youtube.com/watch?si=Bc0hTqQDG_mblskf&v=Z10PZcUL9K0&feature=youtu.be"
              target="_BLANK"
              className="text-white font-montserrat text-2xl hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              YouTube Video
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
