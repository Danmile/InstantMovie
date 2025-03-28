import React from "react";
import logo from "../assets/Logo.png";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-25 bg-black flex items-center">
      <div className="ml-13">
        <img src={logo} alt="" className="h-30" />
      </div>
      <div className="space-x-8 m-auto">
        <a href="#" className="text-white hover:text-gray-300">
          Recommended
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Favorites
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Search
        </a>
      </div>
      <div className="mr-15">
        <LogIn
          size={30}
          color="white"
          className="w-6 h-6 hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
