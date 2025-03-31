import React from "react";
import logo from "../assets/Logo.png";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="relative h-20 bg-black flex items-center justify-between px-6">
      {/* Logo - Left */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-25 transition-transform duration-[2000ms] hover:rotate-[180deg]"
        />
      </div>

      {/* Center Links */}
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-8">
        <a
          href="#"
          className="text-white hover:text-amber-400 transition duration-300"
        >
          Recommended
        </a>
        <a
          href="#"
          className="text-white hover:text-amber-400 transition duration-300"
        >
          Favorites
        </a>
        <a
          href="#"
          className="text-white hover:text-amber-400 transition duration-300"
        >
          Search
        </a>
      </div>

      {/* Login Icon - Right */}
      <div className="text-white hover:scale-110 transition-transform duration-200">
        <LogIn size={26} color="orange" />
      </div>
    </div>
  );
};

export default Navbar;
