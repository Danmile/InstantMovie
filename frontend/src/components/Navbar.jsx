import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black h-20 px-4 flex items-center justify-center md:justify-between relative">
      {/* Logo on mobile: center | desktop: left */}
      <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex md:items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-25 transition-transform duration-[2000ms] hover:rotate-[180deg]"
          />
        </Link>
      </div>

      <div className="md:flex absolute left-1/2 -translate-x-1/2 space-x-9 mt-30 text-xs md:mt-0 md:text-base">
        <Link to="/" className="text-white hover:text-amber-400 transition">
          Popular
        </Link>
        <Link
          to="/Recommended"
          className="text-white hover:text-amber-400 transition"
        >
          Recommended
        </Link>
        <Link
          to="/favorites"
          className="text-white hover:text-amber-400 transition"
        >
          Favorites
        </Link>
        <Link
          to="/search"
          className="text-white hover:text-amber-400 transition"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
