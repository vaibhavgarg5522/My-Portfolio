import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-50 text-white pt-12 pb-6 px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-br from-[#0d0b1a] via-[#16132a] to-[#1e1b38]">

      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B3DFF] via-[#00C896] to-[#8B3DFF] blur-sm opacity-60" />

      {/* Subtle Glow Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8B3DFF33] rounded-full blur-[160px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#00C89633] rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-10 shadow-lg transition-all duration-500">

        {/* Left: Name + Tagline */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-[#8B3DFF]">Vaibhav Garg</h2>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">Crafting beautiful frontends with passion 🚀</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Home", "About", "Projects", "Contact"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="text-sm sm:text-base text-gray-300 hover:text-white transition duration-300 relative group"
            >
              {link}
              <span className="block w-0 group-hover:w-full h-0.5 bg-[#8B3DFF] transition-all duration-300 mt-1 rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 sm:gap-5 justify-center">
          <GlowIcon href="https://github.com/vaibhavgarg5522" icon={<FaGithub />} color="white" />
          <GlowIcon href="https://www.linkedin.com/in/vaibhav-garg-b72a57353/" icon={<FaLinkedin />} color="#1877F2" />
          <GlowIcon href="https://wa.me/918218390981" icon={<FaWhatsapp />} color="#25D366" />
          <GlowIcon href="mailto:vaibhavgarg340@gmail.com" icon={<FaEnvelope />} color="#FF6A3D" />
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-6 px-4 z-10 relative">
        Built with <span className="text-[#8B3DFF]">💙 ReactJS</span> | © {new Date().getFullYear()} Vaibhav Garg. All rights reserved.
      </div>

      {/* Optional: Wave Background at Bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-32 md:h-40 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0d0b1a"
          fillOpacity="1"
          d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,144C672,139,768,181,864,202.7C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
};

// Reusable Icon Component with Glow
const GlowIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition duration-300 transform hover:scale-110"
    style={{
      backgroundColor: `${color}22`,
      color: color,
      boxShadow: `0 0 10px ${color}`,
    }}
  >
    {icon}
  </a>
);

export default Footer;
