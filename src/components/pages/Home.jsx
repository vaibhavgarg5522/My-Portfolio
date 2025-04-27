import React, { useMemo, lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vaibhavImg from "../../images/image5.jpg";
import backgroundImage from "../../images/bgsunny.jpg";
import About from "./About";
import Skills from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import softSkillLottie from "../../assets/lottie/vTzbLLFwZK.json";
import MiniWhatsApp from "./MiniWhatsApp";

// Lazy load Lottie
const Lottie = lazy(() => import("react-lottie"));

const Home = () => {
  const navigate = useNavigate();

  const softSkillOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: softSkillLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-8 py-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text Section */}
          <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-start md:mt-20">
            <p className="text-[#8267E3] uppercase tracking-widest font-medium text-sm md:text-base">
              Front-End Developer | ReactJS Enthusiast
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mt-4 mb-6">
              I Build <span className="text-[#8267E3]">Beautiful</span> and{" "}
              <span className="text-[#8267E3]">Functional</span> Web Interfaces.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 max-w-[500px]">
              I'm Vaibhav Garg — a self-taught React developer passionate about
              building responsive, user-friendly, and clean web experiences.
              I turn ideas into digital reality with precision, performance, and
              creativity.
            </p>

            {/* Lottie Animation (Mobile Only) */}
            <div className="w-88 sm:w-120 md:hidden">
              <Suspense fallback={<div className="text-sm text-gray-400">Loading animation...</div>}>
                <Lottie options={softSkillOptions} height={320} width={320} />
              </Suspense>
            </div>

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
            <MiniWhatsApp />
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

      {/* Mobile Scrollable Sections */}
      <div className="flex flex-col md:hidden bg-gradient-to-b from-[#1a112b] via-[#2a1d47] to-[#3b2a66] text-white">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
