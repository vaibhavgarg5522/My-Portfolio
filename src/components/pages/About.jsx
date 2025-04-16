import React from "react";
import profile from "../../assets/image4.jpg";
import backgroundImage from "../../images/bgsunny.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
  FaGraduationCap,
  FaUserFriends,
  FaLaptopCode,
  FaGlobe,
  FaLightbulb,
  FaEnvelope,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white py-10 px-5 md:px-10 lg:px-[50px] relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: `'Poppins', sans-serif`,
        fontStyle: "italic",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10">
        {/* About Me Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="block lg:hidden w-full">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center px-6 sm:px-10 py-5 sm:py-6 rounded-full shadow-xl w-full sm:w-[400px] md:w-[520px] md:mt-25 mt-10">
              About Me
            </h2>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[60%] order-1 lg:order-none">
            <div className="hidden lg:block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-right px-6 sm:px-10 py-4 sm:py-6 rounded-full shadow-xl mb-10 w-full sm:w-[400px] md:w-[520px] md:mt-25">
                About Me
              </h2>
            </div>

            <div className="backdrop-blur-sm p-6 sm:p-8 rounded-2xl text-left text-gray-200 text-base sm:text-lg leading-relaxed space-y-4 shadow-xl">
              <p className="text-xl sm:text-2xl">Hi 👋</p>
              <p className="text-xl sm:text-2xl font-medium">
                My name is{" "}
                <span className="text-2xl sm:text-3xl md:text-[42px] font-semibold uppercase tracking-[0.15em] text-[#8267E3] border-b border-[#8267E3] inline-block pb-2 sm:mb-10 mb-4">
                  Vaibhav Garg
                </span>
              </p>
              <p>
                I’m a{" "}
                <span className="font-semibold text-white inline">
                  Front-End Developer
                </span>{" "}
                focused on building sleek, functional, and responsive web
                experiences using{" "}
                <span className="font-semibold text-white inline">ReactJS</span>
                , with a passion for{" "}
                <span className="font-semibold text-white inline">UI/UX</span>.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-[35%] flex justify-center order-0 lg:order-none -mb-10">
            <div className="w-[250px] sm:w-[250px] md:w-[290px] h-[410px] sm:h-[470px] md:h-[460px] rounded-full overflow-hidden border-4 border-[#8267E3] shadow-2xl md:mt-18 transition-transform hover:scale-105 hover:shadow-[#8267E3]/50 duration-500">
              <img
                src={profile}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Info Grid Section */}
        <div className="w-full">
          <div className="bg-[linear-gradient(to_right,#131314_10%,#8267E3_90%)] p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2">
                  <FaGraduationCap /> Education
                </h4>
                <p className="mt-2">Self-Taught Developer</p>
                <p>
                  Senior Secondary (12th Grade) –
                  <br />
                  NIOS, 2025
                </p>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#8267E3] flex items-center gap-2">
                  <FaEnvelope /> Contact
                </h4>
                <div className="space-y-2 text-sm sm:text-base mt-2">
                  <p className="flex items-center gap-2">
                    <EmailIcon className="text-[#8267E3]" />
                    <a
                      href="mailto:vaibhavgarg5522@gmail.com"
                      className="hover:underline hover:text-[#00C896] transition-colors duration-300"
                    >
                      vaibhavgarg5522@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">📍 India</p>
                  <p className="flex items-center">💼 Open for opportunities</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2">
                  <FaLaptopCode /> Skill Set
                </h4>
                <ul className="list-none space-y-1 mt-2">
                  <li className="flex items-center gap-2">
                    <FaLaptopCode /> ReactJS
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLaptopCode /> Redux
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLaptopCode /> JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLaptopCode /> Tailwind CSS
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2">
                  <FaUserFriends /> Soft Skills
                </h4>
                <ul className="list-none space-y-1 mt-2">
                  <li className="flex items-center gap-2">
                    <FaLightbulb /> Teamwork
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLightbulb /> Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLightbulb /> Problem Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLightbulb /> Time Management
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2">
                  <MdDesignServices /> Interests
                </h4>
                <ul className="list-none space-y-1 mt-2">
                  <li className="flex items-center gap-2">
                    <MdDesignServices /> UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <MdDesignServices /> Technology
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2">
                  <FaGlobe /> Languages
                </h4>
                <ul className="list-none space-y-1 mt-2">
                  <li className="flex items-center gap-2">
                    <FaGlobe /> English
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGlobe /> Hindi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-16 flex justify-center flex-wrap gap-6 sm:gap-10">
          {[
            {
              icon: (
                <FacebookIcon className="text-3xl text-[#1877F2] group-hover:text-white" />
              ),
              label: "Facebook",
              link: "https://www.facebook.com/share/168jQRHjqd/",
              hoverColor: "bg-[#1877F2]",
            },
            {
              icon: (
                <InstagramIcon className="text-3xl text-[#E4405F] group-hover:text-white" />
              ),
              label: "Instagram",
              link: "https://www.instagram.com/masoom_____bacha_____/",
              hoverColor: "bg-[#E4405F]",
            },
            {
              icon: (
                <GitHubIcon className="text-3xl text-white group-hover:text-[#000]" />
              ),
              label: "GitHub",
              link: "https://github.com/vaibhavgarg5522",
              hoverColor: "bg-white",
            },
            {
              icon: (
                <LinkedInIcon className="text-3xl text-[#0A66C2] group-hover:text-white" />
              ),
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/vaibhav-garg-468a5134a/",
              hoverColor: "bg-[#0A66C2]",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-12 h-12 border-[2px] rounded-full flex justify-center items-center text-accent text-base transition-all duration-500 cursor-pointer border-[#8267E3] hover:${item.hoverColor}`}
              >
                {item.icon}
              </a>
              <span className="mt-1 text-xs sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
