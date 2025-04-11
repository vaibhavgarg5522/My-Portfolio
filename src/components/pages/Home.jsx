import React, { useState, useRef } from "react";
import vaibhavImg from "../../images/image5.jpg";
import backgroundImage from "../../images/bgsunny.jpg";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);
  const intervalRef = useRef(null);

  const handleMouseDown = () => {
    setIsPressed(true);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (!buttonRef.current) return prev;
        const width = buttonRef.current.offsetWidth;
        const percentage = (prev + 2) / width;

        if (percentage >= 1) {
          clearInterval(intervalRef.current);
          window.open("https://wa.me/918218390981", "_blank");
          return 0;
        }
        return prev + 2;
      });
    }, 10);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    setIsPressed(false);
    setProgress(0);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-6 py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-white w-full md:w-1/2">
          <p className="text-[#8267E3] uppercase tracking-widest font-medium text-sm md:text-base">
            Front-End Developer | ReactJS Enthusiast
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mt-4 mb-6">
            I Build <span className="text-[#8267E3]">Beautiful</span> and{" "}
            <span className="text-[#8267E3]">Functional</span> Web Interfaces.
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
            I'm Vaibhav Garg — a self-taught React developer passionate about
            building responsive, user-friendly, and clean web experiences. I
            turn ideas into digital reality with precision, performance, and
            creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => navigate("/projects")}
              className="bg-[#8267E3] hover:bg-[#6d56c8] text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-[#8267E3] text-white hover:bg-[#8267E3] px-5 py-2 rounded-full text-sm font-semibold transition duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* WhatsApp Button */}
          <div
            ref={buttonRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="relative flex items-center justify-start cursor-pointer select-none py-3 px-6 rounded-full shadow-lg border border-[#8267E3] overflow-hidden transition-all duration-300 w-full sm:w-fit"
            style={{
              background: "linear-gradient(145deg, #1a112b, #2d165e)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                width: `${progress}px`,
                backgroundColor: "#8267E3",
                borderRadius: "9999px",
                transition: "width 0.01s linear",
                zIndex: 0,
              }}
            ></div>

            <span
              className={`z-10 transition-all duration-200 ${
                progress > 20
                  ? "text-white font-bold"
                  : "text-white font-semibold"
              }`}
              style={{
                paddingLeft: "2.5rem",
                paddingRight: "1rem",
                fontSize: "0.875rem",
              }}
            >
              Happy to chat on WhatsApp
            </span>

            <div
              className={`absolute top-1/2 -translate-y-1/2 z-10 transition-transform duration-100 ${
                isPressed ? "scale-110" : "scale-100"
              }`}
              style={{
                left: `${progress}px`,
                background: "#8267E3",
                padding: "8px",
                borderRadius: "9999px",
                border: "2px solid white",
              }}
            >
              <FaWhatsapp className="text-white text-lg sm:text-xl" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 sm:mt-10 flex-wrap">
            <a
              href="https://www.facebook.com/share/168jQRHjqd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#a58dfc] rounded-md hover:text-black transition-all duration-300 cursor-pointer hover:bg-[#8267E3]"
            >
              <FaFacebookF className="text-xl sm:text-2xl font-semibold text-white" />
            </a>
            <a
              href="https://www.instagram.com/masoom_____bacha_____/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#a58dfc] rounded-md hover:text-black transition-all duration-300 cursor-pointer hover:bg-[#8267E3]"
            >
              <FaInstagram className="text-xl sm:text-2xl font-semibold text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-garg5522/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#a58dfc] rounded-md hover:text-black transition-all duration-300 cursor-pointer hover:bg-[#8267E3]"
            >
              <FaLinkedinIn className="text-xl sm:text-2xl font-semibold text-white" />
            </a>
            <a
              href="https://github.com/vaibhavgarg5522"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#a58dfc] rounded-md hover:text-black transition-all duration-300 cursor-pointer hover:bg-[#8267E3]"
            >
              <FaGithub className="text-xl sm:text-2xl font-semibold text-white" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-[240px] sm:w-[280px] md:w-[350px]">
          <div className="rounded-full overflow-hidden shadow-2xl border-4 border-[#8267E3]">
            <img
              src={vaibhavImg}
              alt="Vaibhav Garg"
              className="object-cover w-full h-full hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
