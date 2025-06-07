import React, {
  useMemo,
  lazy,
  Suspense,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import vaibhavImg from "../../images/sunny6.jpg";
import backgroundImage from "../../images/bgsunny.jpg";
import About from "./About";
import Skills from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import softSkillLottie from "../../assets/lottie/vTzbLLFwZK.json";
import MiniWhatsApp from "./MiniWhatsApp";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { InView } from "react-intersection-observer";
import Persona from './Persona'



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

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const refreshAOS = useCallback(() => {
    AOS.refreshHard();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <section
        id="home"
       className="min-h-screen px-4 sm:px-8 md:px-16 py-12 md:py-20 text-white bg-cover bg-center bg-no-repeat relative"
                   style={{
                     backgroundImage: `url(${backgroundImage})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundAttachment: 'fixed',
                     fontFamily: `'Poppins', sans-serif`
                   }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-start md:mt-20">
            <p
              className=" text-[#A259FF] uppercase tracking-widest font-medium text-sm md:text-base"
              
            >
              Front-End Developer | ReactJS Enthusiast
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mt-4 mb-6"
              data-aos="fade-up"
            >
              I Build <span className="text-[#A259FF]">Beautiful</span> and{" "}
              <span className="text-[#A259FF]">Functional</span> Web Interfaces.
            </h1>

            <div
              className="text-sm sm:text-base md:text-lg mb-6 max-w-[550px] text-gray-200 relative z-10"
              
            >
              <div className="relative p-4 rounded-4xl bg-[#1c1533]/60 backdrop-blur-md shadow-[0_0_20px_#8267E3] border border-[#8267E3]/30" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#00FFD1] drop-shadow-lg">
                  Hey, I'm <span className="text-[#A259FF]">Vaibhav Garg</span>
                </h2>
                <p className="leading-relaxed tracking-wide">
                  A{" "}
                  <span className="text-[#00C896] font-semibold">
                    self-taught
                  </span>{" "}
                  front-end developer with a passion for building{" "}
                  <span
                    className="text-[#FFD700] font-semibold"
                    data-aos="fade-left"
                  >
                    ReactJS
                  </span>{" "}
                  apps that are not only beautiful but also performant and
                  accessible. I create responsive, pixel-perfect UIs that
                  transform ideas into seamless digital experiences.
                </p>
                <div className="mt-3 text-sm text-[#aaa] italic">
                  Let’s build something amazing together.
                </div>
              </div>
            </div>

            <div className="w-90 sm:w-120 md:hidden -mb-4" data-aos="slide-up">
              <Suspense
                fallback={
                  <div className="text-sm text-gray-400">
                    Loading animation...
                  </div>
                }
              >
                <div className="flex justify-center items-center">
                  <Lottie options={softSkillOptions} height={355} width={355} />
                </div>
              </Suspense>
            </div>

            <div className="flex gap-4 mb-6 flex-wrap justify-center md:justify-start">
              <button
                onClick={() => navigate("/projects")}
                className="bg-[#8267E3] hover:bg-[#6d56c8] text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-300"
                data-aos="fade-right"
              >
                View Projects
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border border-[#8267E3] text-white hover:bg-[#8267E3] px-5 py-2 rounded-full text-sm font-semibold transition duration-300"
                data-aos="fade-right"
              >
                Hire Me
              </button>
            </div>

            <MiniWhatsApp />
          </div>

          <div
            className="w-[260px] sm:w-[320px] mt-8  md:w-[360px]  flex justify-center items-center  md:mb-30 rounded-4xl"
            
          >
            <div className="relative overflow-hidden shadow-2xl rounded-4xl  border-[#8267E3] transition-transform  hover:scale-105 hover:shadow-[#8267E3]/50 duration-500">
             <img
  src={vaibhavImg}
  alt="Vaibhav Garg"
  className="w-86 h-120 sm:w-86 sm:h-140 object-contain mx-auto object-top rounded-20xl "data-aos="fade-up"
/>

              <div className="absolute inset-0 shadow-[0_0_30px_#8267E3] opacity-60 "></div>
            </div>
          </div>
        </div>
      </section>

      {/* 📱 Mobile Scrollable Sections with AOS trigger on visible */}
      <div className="flex flex-col md:hidden bg-gradient-to-b from-[#1a112b] via-[#2a1d47] to-[#3b2a66] text-white">
        <InView as="section" onChange={(inView) => inView && refreshAOS()}>
          <div id="about">
            <About />
          </div>
        </InView>
        <InView as="section" onChange={(inView) => inView && refreshAOS()}>
          <div id="persona">
            <Persona />
          </div>
        </InView>
        <InView as="section" onChange={(inView) => inView && refreshAOS()}>
          <div id="skills">
            <Skills />
          </div>
        </InView>
        <InView as="section" onChange={(inView) => inView && refreshAOS()}>
          <div id="projects">
            <Projects />
          </div>
        </InView>
        <InView as="section" onChange={(inView) => inView && refreshAOS()}>
          <div id="contact">
            <Contact />
          </div>
        </InView>
      </div>

      

      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-1/2 translate-x-1/2 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 1000 }}
      >
        <FaArrowUp size={14} />
      </button>
    </>
  );
};

export default Home;
