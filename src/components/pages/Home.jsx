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
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-8 py-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Text Section */}
        <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-start">
          <p className="text-[#8267E3] uppercase tracking-widest font-medium text-sm md:text-base">
            Front-End Developer | ReactJS Enthusiast
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mt-4 mb-6">
            I Build <span className="text-[#8267E3]">Beautiful</span> and{" "}
            <span className="text-[#8267E3]">Functional</span> Web Interfaces.
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 max-w-[500px]">
            I'm Vaibhav Garg — a self-taught React developer passionate about
            building responsive, user-friendly, and clean web experiences. I
            turn ideas into digital reality with precision, performance, and
            creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap justify-center md:justify-start">
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
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchCancel={handleMouseUp}
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
          <div className="flex gap-4 mt-8 sm:mt-10 flex-wrap justify-center md:justify-start">
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
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#a58dfc] rounded-full hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#8267E3]"
              >
                <span className="text-xl sm:text-2xl font-semibold text-white">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-[260px] sm:w-[320px] md:w-[360px] flex justify-center items-center mt-10 md:mt-0">
          <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-[#8267E3] transition-transform hover:scale-105 hover:shadow-[#8267E3]/50 duration-500">
            <img
              src={vaibhavImg}
              alt="Vaibhav Garg"
              className="object-cover w-full h-full hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_#8267E3] opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
