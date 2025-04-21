import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import vaibhavImg from "../../images/image5.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skill", path: "/skill" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/168jQRHjqd/",
      color: "#1877F2",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/masoom_____bacha_____/",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/vaibhav-garg-b72a57353/",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/vaibhavgarg5522",
      color: "#fff",
    },
  ];

  return (
    <>
      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a112b] text-white transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#333]">
          <div className="flex items-center gap-3">
            <img
              src={vaibhavImg}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-[#8267E3]"
            />
            <span className="text-[20px] font-bold bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-transparent bg-clip-text">
              Vaibhav <span className="text-[19px] font-bold text-white">Garg</span>
            </span>
          </div>
          <button
            onClick={closeSidebar}
            className="text-white text-xl p-1 rounded-full hover:bg-[#2a2a2a] transition-all duration-200 active:scale-90"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="p-4 space-y-4">
          {[...navLinks, { name: "Get My CV", path: "/mycv" }].map((item, index) => (
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

        <div className="flex justify-center gap-3 mt-6 px-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#8267E3] transition-all duration-300 hover:scale-120`}
              style={{
                backgroundColor: `${social.color}22`,
                color: social.color,
                boxShadow: `0 0 10px ${social.color}`,
              }}
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
          {!isOpen && (
            <button
              onClick={toggleSidebar}
              className="block md:hidden p-[8px] rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff]
                         text-white text-base shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              title="Menu"
            >
              <FaBars />
            </button>
          )}

          <h1
            onClick={() => navigate("/")}
            className="text-2xl md:text-3xl font-bold cursor-pointer bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-transparent bg-clip-text transition duration-300 hover:scale-105
            absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0"
          >
            Vaibhav <span className="text-white">Garg</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((item, index) => (
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

        {/* Get My CV Button */}
        <li
          onClick={() => navigate("/mycv")}
          className="hidden md:flex list-none relative overflow-hidden rounded-full border border-[#8267E3] bg-transparent px-6 py-2 cursor-pointer group transition-all duration-300"
        >
          <div className=" absolute inset-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] transition-all duration-500 ease-in-out z-0" />
          <div className="relative z-10 flex items-center gap-1 text-sm font-semibold text-white group-hover:text-white transition-all duration-300">
            Get My CV
            <DownloadIcon style={{ fontSize: 18 }} />
          </div>
        </li>
        <div className="md:hidden absolute right-4 top-4 z-50">
  <button
    onClick={() => {
      navigate("/mycv");
      closeSidebar();
    }}
    className="flex items-center justify-center gap-2 px-4 py-[1px] text-xs border-[#8267E3] border-3   text-white rounded-full shadow-md hover:scale-105 transition-all duration-300"
  >
   <span className="flex flex-col text-[#ffffff] font-bold"> <span className="">My</span>  CV</span>
    
  </button>
</div>
      </nav>
    </>
  );
};

export default Navbar;
