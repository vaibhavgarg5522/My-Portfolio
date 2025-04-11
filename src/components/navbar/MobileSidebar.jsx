import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Icon (Visible only on mobile) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl p-2 bg-[#8267E3] rounded-full shadow-lg"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a112b] text-white transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li>
              <a href="#home" onClick={closeSidebar} className="hover:text-[#8267E3]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeSidebar} className="hover:text-[#8267E3]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeSidebar} className="hover:text-[#8267E3]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeSidebar} className="hover:text-[#8267E3]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
