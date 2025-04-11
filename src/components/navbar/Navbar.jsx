import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#1a1a1a] text-white px-6 md:px-16 py-4 shadow-md flex justify-between items-center h-[70px] w-full z-50 fixed top-0">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl md:text-3xl font-extrabold cursor-pointer bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-transparent bg-clip-text transition duration-300 hover:scale-105 "
      >
        Vaibhav <span className="text-white">Garg</span>
      </h1>

      {/* Nav Links */}
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

      {/* View CV Button */}
      <li
        onClick={() => navigate("/mycv")}
        className="list-none relative overflow-hidden rounded-full border border-[#8267E3] bg-transparent px-6 py-2 cursor-pointer group transition-all duration-300"
      >
        <div className="absolute inset-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] transition-all duration-500 ease-in-out z-0" />
        <div className="relative z-10 flex items-center gap-1 text-sm font-semibold text-white group-hover:text-white transition-all duration-300">
          Get My CV
          <DownloadIcon style={{ fontSize: 19 }} />
        </div>
      </li>
    </nav>
  );
};

export default Navbar;
