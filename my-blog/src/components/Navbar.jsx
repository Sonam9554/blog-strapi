import React, { useState } from "react";
import icon from "../assets/icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* LEFT SIDE */}
        <div className="text-3xl font-bold text-orange-400">
          Flex
        </div>

        {/* CENTER MENU - hidden on small screens */}
        <div className="hidden md:flex gap-10 text-xl font-medium">
          <h1>Orange Flex</h1>
          <h1>Orange Flex Travel</h1>
          <h1>Blog</h1>
          <h1>Pomoc</h1>
        </div>

        {/* RIGHT SIDE - desktop items */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <img src={icon} alt="accessibility" className="w-7 h-7" />
          <span>Bez barier</span>
        </div>

        {/* HAMBURGER ICON - mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU - dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {/* CENTER MENU */}
          <div className="flex flex-col gap-4 text-lg font-medium">
            <h1>Orange Flex</h1>
            <h1>Orange Flex Travel</h1>
            <h1>Blog</h1>
            <h1>Pomoc</h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 text-lg mt-4">
            <img src={icon} alt="accessibility" className="w-6 h-6" />
            <span>Bez barier</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
