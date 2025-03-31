import React from "react";
import logo from "../assets/Logo.png";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-25 bg-black flex items-center">
      <div className="ml-13">
        <img
          src={logo}
          alt=""
          className="h-30 transition-transform duration-[2000ms] hover:rotate-[180deg]"
        />
      </div>
      <div className="space-x-8 m-auto">
        <a
          href="#"
          className="text-white hover:text-amber-400 transition transform ease-in-out duration-300"
        >
          Recommended
        </a>
        <a
          href="#"
          className="text-white hover:text-amber-400 transition transform ease-in-out duration-300"
        >
          Favorites
        </a>
        <a
          href="#"
          className="text-white hover:text-amber-400 transition transform ease-in-out duration-300"
        >
          Search
        </a>
      </div>
      <div className="mr-15">
        <LogIn
          size={30}
          color="orange"
          className="w-6 h-6 hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
