import React from "react";
import profile from "../../assets/image4.jpg";
import backgroundImage from "../../images/bgsunny.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import animationData from "../../assets/lottie/Animation - 1745076698808.json"; // React animation
import javascriptanimateDAta from "../../assets/lottie/Animation - 1745132703179 (1).json"; // JavaScript animation
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import educationAnimateDAta from "../../assets/lottie/Animation - 1745155092123.json";
import ContactAnimateDAta from "../../assets/lottie/zf0zWuD3Du.json";
import uiuxAnimateDAta from "../../assets/lottie/Animation - 1745214505206.json";
import languageAnimateDAta from "../../assets/lottie/Eqskkx0fOY.json";
import reactskillsAnimateDAta from "../../assets/lottie/Animation - 1745160291364.json";
import uiContentAnimateDAta from "../../assets/lottie/lMPQLkzhkY.json";
import TechnologyAnimateDAta from "../../assets/lottie/yk6aPcNFzn.json";
import TechContentAnimateDAta from "../../assets/lottie/uyVek2LkLX.json";
import SelfDeveloperAnimateDAta from "../../assets/lottie/uqG5ZBZON8.json";
import EducationContentAnimateDAta from "../../assets/lottie/Ks81DZfdPM.json";
import EmailAnimateDAta from "../../assets/lottie/WrRQ6tZTUH.json";
import PhoneAnimateDAta from "../../assets/lottie/HNs3ajiacO.json";
import LocationAnimateDAta from "../../assets/lottie/Animation - 1745231295412.json";
import LanguageContentAnimateDAta from "../../assets/lottie/eqDCM5fKmO.json";
import ProblemSolvingAnimateDAta from "../../assets/lottie/R2XVEvi14A.json";
import AttentionToDetailAnimateDAta from "../../assets/lottie/LeFDBLau1x.json";
import { FaLightbulb } from "react-icons/fa";
import Lottie from "react-lottie";
const createLottieOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const About = () => {
  const options = {
    animation: createLottieOptions(animationData),
    js: createLottieOptions(javascriptanimateDAta),
    education: createLottieOptions(educationAnimateDAta),
    contact: createLottieOptions(ContactAnimateDAta),
    uiux: createLottieOptions(uiuxAnimateDAta),
    language: createLottieOptions(languageAnimateDAta),
    reactskills: createLottieOptions(reactskillsAnimateDAta),
    uiContent: createLottieOptions(uiContentAnimateDAta),
    technology: createLottieOptions(TechnologyAnimateDAta),
    techContent: createLottieOptions(TechContentAnimateDAta),
    selfDeveloper: createLottieOptions(SelfDeveloperAnimateDAta),
    educationContent: createLottieOptions(EducationContentAnimateDAta),
    email: createLottieOptions(EmailAnimateDAta),
    phone: createLottieOptions(PhoneAnimateDAta),
    location: createLottieOptions(LocationAnimateDAta),
    languageContent: createLottieOptions(LanguageContentAnimateDAta),
    problemSolving: createLottieOptions(ProblemSolvingAnimateDAta),
    attentionToDetail: createLottieOptions(AttentionToDetailAnimateDAta),
  };
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
                <h4 className="text-2xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2">
                  <span className="flex">
                    {" "}
                    <Lottie
                      options={options.education}
                      height={48}
                      width={48}
                      isClickToPauseDisabled={true}
                    />{" "}
                    <span className="mt-[8px] ">Education</span>{" "}
                  </span>
                </h4>

                <ul className="list-none space-y-1 mt-4">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.selfDeveloper}
                        height={28}
                        width={28}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-2 mx-2">
                      Frontend Developer (Self-Taught)
                    </span>
                  </li>
                  <li className="flex items-center mt-4 gap-2">
                    <div className="w-5 h-5 -m-2">
                      <Lottie
                        options={options.educationContent}
                        height={40}
                        width={40}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-5 mx-6 ">
                      Senior Secondary (12th Grade) NIOS – 2025
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl sm:text-2xl font-extrabold text-[#8267E3] flex items-center gap-2 mt-8">
                  <span className="flex">
                    {" "}
                    <Lottie
                      options={options.contact}
                      height={50}
                      width={50}
                      isClickToPauseDisabled={true}
                    />{" "}
                    <span className="flex mt-3"> Contact</span>{" "}
                  </span>
                </h4>

                <ul className="list-none space-y-1 mt-5">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.email}
                        height={28}
                        width={28}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-2 mx-2">
                      {" "}
                      <a
                        href="mailto:vaibhavgarg5522@gmail.com"
                        className="hover:underline hover:text-[#00C896] transition-colors duration-300"
                      >
                        vaibhavgarg5522@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center mt-4 gap-2">
                    <a
                      href="tel:+918218390981"
                      className="flex items-center text-white hover:text-[#00c896]"
                    >
                      <div className="w-5 h-5 -m-1">
                        <Lottie
                          options={options.phone}
                          height={37}
                          width={37}
                          isClickToPauseDisabled={true}
                        />
                      </div>
                      <span className="flex -mb-4 mx-6 ">+918218390981</span>
                    </a>
                  </li>

                  <li className="flex items-center mt-4 gap-2">
                    <a
                      href="https://www.google.com/maps/place/Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-[#00c896]"
                    >
                      <div className="flex w-5 h-5 ml-1">
                        <Lottie
                          options={options.location}
                          height={55}
                          width={55}
                          isClickToPauseDisabled={true}
                        />
                      </div>
                      <span className="flex ml-2 -mb-8 ">
                        Uttar Pradesh, India
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-10 ">
              <div>
                <h4 className="text-2xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2 mt-8">
                  <span className="flex">
                    <Lottie
                      options={options.reactskills}
                      height={48}
                      width={48}
                      isClickToPauseDisabled={true}
                    />{" "}
                    <span className="mt-[14px] ">Skill Set</span>{" "}
                  </span>
                </h4>
                <ul className="list-none space-y-1 mt-5 -mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.animation}
                        height={28}
                        width={28}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-2 mx-2">ReactJS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex mt-3 gap-2 ">
                      {" "}
                      <TbBrandRedux
                        style={{ color: "#61DAFB", fontSize: "29px" }}
                      />
                      Redux
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.js}
                        height={35}
                        width={35}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-3 mx-2">JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2 mt-4 ml-[2px]">
                    <span className="flex gap-2">
                      <RiTailwindCssFill
                        style={{ color: "#61DAFB", fontSize: "27px" }}
                      />
                      Tailwind CSS
                    </span>
                  </li>
                </ul>
              </div>

              <div className=" flex flex-col">
                <h4 className="text-2xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2 mt-8">
                  <span className="flex">
                    <Lottie
                      options={options.language}
                      height={45}
                      width={45}
                      isClickToPauseDisabled={true}
                    />{" "}
                    <span className="flex mt-2">Languages</span>{" "}
                  </span>
                </h4>
                <ul className="list-none space-y-1 mt-4">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.languageContent}
                        height={28}
                        width={28}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-3 mx-2">
                      Fluent in Hindi and English
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-2xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2 mt-8">
                  <span className="flex">
                    <Lottie
                      options={options.uiux}
                      height={52}
                      width={52}
                      isClickToPauseDisabled={true}
                    />{" "}
                    <span className="flex mt-3">Interests</span>{" "}
                  </span>
                </h4>
                <ul className="list-none space-y-1 mt-2">
                  <li className="flex items-center ml-1 ">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.uiContent}
                        height={35}
                        width={35}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-[13px] mx-4">UI/UX Design</span>
                  </li>
                  <li className="flex items-center gap-2 mt-3 -ml-2">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.techContent}
                        height={42}
                        width={42}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-8 mx-5 ">Technology</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl sm:text-2xl font-semibold text-[#8267E3] flex items-center gap-2 mt-8">
                  <span className="flex">
                    <Lottie
                      options={options.technology}
                      height={50}
                      width={50}
                      isClickToPauseDisabled={true}
                    />{" "}
                    <span className="flex mt-[10px]">Soft Skills</span>{" "}
                  </span>
                </h4>
                <ul className="list-none space-y-1 ">
                  <li className="flex items-center gap-2 ">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.problemSolving}
                        height={42}
                        width={42}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-[42px] mx-3 ">Problem Solving</span>
                  </li>
                 
                  <li className="flex items-center gap-2 mt-10 ml-[7px] ">
                    <div className="w-5 h-5">
                      <Lottie
                        options={options.attentionToDetail}
                        height={35}
                        width={35}
                        isClickToPauseDisabled={true}
                      />
                    </div>
                    <span className="flex -mb-5 mx-3 ">Attention To Detail</span>
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
            },
            {
              icon: (
                <InstagramIcon className="text-3xl text-[#E4405F] group-hover:text-white" />
              ),
              label: "Instagram",
              link: "https://www.instagram.com/masoom_____bacha_____/ ",
            },
            {
              icon: (
                <GitHubIcon className="text-3xl text-white group-hover:text-[#000]" />
              ),
              label: "GitHub",
              link: "https://github.com/vaibhavgarg5522",
            },
            {
              icon: (
                <LinkedInIcon className="text-3xl text-[#0A66C2] group-hover:text-white" />
              ),
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/vaibhav-garg-b72a57353/",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 border-[2px] rounded-full flex justify-center items-center text-accent text-base transition-all duration-500 cursor-pointer border-[#8267E3] hover:bg-[#8267E3]"
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
