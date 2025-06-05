import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 50,
      once: true,
    });
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div
        className="md:hidden fixed top-4 left-4 z-50"
        data-aos="fade-right"
        data-aos-delay="100"
      >
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
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="p-6">
          <h2
            className="text-2xl font-bold mb-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Menu
          </h2>
          <ul className="space-y-4">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Persona", href: "#persona" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item, index) => (
              <li
                key={index}
                data-aos="fade-left"
                data-aos-delay={400 + index * 100}
              >
                <a
                  href={item.href}
                  onClick={closeSidebar}
                  className="hover:text-[#8267E3] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
