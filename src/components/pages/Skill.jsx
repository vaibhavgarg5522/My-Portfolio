import { useState, useEffect } from "react";
import backgroundImage from "../../images/bgsunny.jpg";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [technicalSkills] = useState([
    { name: "ReactJs", percent: 89, icon: <FaReact className="text-[#61DAFB] text-xl" /> },
    { name: "JavaScript", percent: 83, icon: <FaJs className="text-[#F7DF1E] text-xl" /> },
    { name: "CSS", percent: 80, icon: <FaCss3Alt className="text-[#264de4] text-xl" /> },
    { name: "HTML", percent: 97, icon: <FaHtml5 className="text-[#e34c26] text-xl" /> },
  ]);

  const [professionalSkills] = useState([
    { name: "Team Work", percent: 90 },
    { name: "Creativity", percent: 80 },
    { name: "Project Management", percent: 75 },
    { name: "Communication", percent: 70 },
  ]);

  const circleRadius = 45;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className=" mt-10 text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center md:text-right px-6 py-4 sm:py-6 rounded-full shadow-xl w-full max-w-[520px] mx-auto md:mx-0"
          data-aos="fade-down"
        >
          My Skills
        </h2>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 mt-12">
          {/* Technical Skills */}
          <div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/20 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 text-white">
                      {skill.icon}
                      <span className="text-[15px]">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-300 font-semibold">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-[#2e2e38] h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] transition-all duration-1000"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
              {professionalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="relative w-38 sm:w-32 md:w-36 h-38 sm:h-32 md:h-36 flex items-center justify-center text-center transition-transform duration-500 transform hover:scale-110"
                >
                  <svg
                    className="w-full h-full drop-shadow-[0_0_5px_#8267E3]"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#2e2e38"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="url(#grad)"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * (1 - skill.percent / 100)}
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-700"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8267E3" />
                        <stop offset="100%" stopColor="#aa94ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-white drop-shadow -mb-1">
                      {skill.percent}%
                    </span>
                    <span className="text-sm text-gray-300 mt-1">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;