import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import vaibhavImg from "../../images/image5.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a112b] text-white transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#333]">
          <div className="flex items-center gap-3">
            <img
              src={vaibhavImg}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-[#8267E3]"
            />
            <span className="text-base font-semibold bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-transparent bg-clip-text">
              Vaibhav Garg
            </span>
          </div>
          <button
            onClick={closeSidebar}
            className="text-white text-xl p-1 rounded-full hover:bg-[#2a2a2a] transition-all duration-200 active:scale-90"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Items */}
        <ul className="p-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Skill", path: "/skill" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
            { name: "Get My CV", path: "/mycv" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(item.path);
                closeSidebar();
              }}
              className="text-sm bg-gradient-to-r from-[#141414] to-[#8267E3] hover:from-[#1a1a1a] hover:to-[#aa94ff] 
                         text-white px-3 py-[6px] rounded-full shadow-md w-full 
                         cursor-pointer transition-all duration-300 hover:scale-105 text-center"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6 px-4">
          {[
            {
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/share/168jQRHjqd/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/masoom_____bacha_____/",
            },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/vaibhav-garg5522/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/vaibhavgarg5522",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#282135] p-2 rounded-full transition-all duration-300
                         hover:bg-[#8267E3] active:scale-95"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Top Navbar */}
      <nav className="bg-[#1a1a1a] text-white px-6 md:px-16 py-4 shadow-md flex justify-between items-center h-[70px] w-full z-30 fixed top-0">
        {/* Left Section */}
        <div className="flex items-center gap-3 z-50 md:gap-6">
          {/* Mobile Menu Icon */}
          {!isOpen && (
            <button
              onClick={toggleSidebar}
              className="block md:hidden p-[6px] rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff]
                         text-white text-base shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              title="Menu"
            >
              <FaBars />
            </button>
          )}

          {/* Name */}
          <h1
            onClick={() => navigate("/")}
            className="text-2xl md:text-3xl font-bold cursor-pointer bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-transparent bg-clip-text transition duration-300 hover:scale-105
            absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0"
          >
            Vaibhav <span className="text-white">Garg</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Skill", path: "/skill" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className="relative cursor-pointer group transition-all duration-300 text-white hover:text-[#8267E3]"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#8267E3] to-[#aa94ff] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <li
          onClick={() => navigate("/mycv")}
          className="hidden md:flex list-none relative overflow-hidden rounded-full border border-[#8267E3] bg-transparent px-6 py-2 cursor-pointer group transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] transition-all duration-500 ease-in-out z-0" />
          <div className="relative z-10 flex items-center gap-1 text-sm font-semibold text-white group-hover:text-white transition-all duration-300">
            Get My CV
            <DownloadIcon style={{ fontSize: 18 }} />
          </div>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
