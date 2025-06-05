import { useState, useEffect } from "react";
import backgroundImage from "../../images/bgsunny.jpg";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaUsers,
  FaPaintBrush,
  FaTasks,
  FaComments,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [technicalSkills] = useState([
    {
      name: "ReactJs",
      percent: 89,
      icon: <FaReact className="text-[#61DAFB] text-xl" />,
    },
    {
      name: "JavaScript",
      percent: 83,
      icon: <FaJs className="text-[#F7DF1E] text-xl" />,
    },
    {
      name: "CSS",
      percent: 80,
      icon: <FaCss3Alt className="text-[#264de4] text-xl" />,
    },
    {
      name: "HTML",
      percent: 97,
      icon: <FaHtml5 className="text-[#e34c26] text-xl" />,
    },
  ]);

  const [professionalSkills] = useState([
    {
      name: "Team Work",
      percent: 90,
      icon: <FaUsers className="text-white text-lg" />,
    },
    {
      name: "Creativity",
      percent: 95,
      icon: <FaPaintBrush className="text-white text-lg" />,
    },
    {
      name: "Time Management",
      percent: 85,
      icon: <FaTasks className="text-white text-lg" />,
    },
    {
      name: "Communication",
      percent: 90,
      icon: <FaComments className="text-white text-lg" />,
    },
  ]);

  const renderTimelineSkills = (skills, isTechnical = false) => (
    <div className="relative pl-6 sm:pl-8 border-l-4 border-[#A259FF] space-y-10">
      {skills.map((skill, idx) => (
        <div key={idx} className="relative flex items-center gap-4">
          {/* Icon on the vertical line */}
          <div className="absolute -left-[51px] sm:-left-[58px] top-0 z-10">
            <div
              className={`w-10 h-10 rounded-full border-[3px] border-white shadow-xl flex items-center justify-center text-xl ${
                isTechnical
                  ? "bg-black" // Dark background for technical skill icons
                  : "bg-[#A259FF] text-white"
              }`}
              data-aos="fade-up"
            >
              {skill.icon}
            </div>
          </div>

          {/* Skill Info Box */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-4 w-full shadow-md hover:scale-[1.02] transition-transform duration-300">
            <h4 className={` sm:text-xl font-semibold mb-[7px] ${
              isTechnical ? "text-white" : "text-white"
            }`}>
              {skill.name}
            </h4>

            {/* Progress Bar with glowing thumb and percentage at the right end */}
            <div className="relative w-full h-[6px] bg-white rounded-full">
              <div
                className="absolute -top-[6px] w-[16px] h-[16px] bg-[#140f23] border-2 border-white rounded-full shadow-lg"
                style={{ left: `calc(${skill.percent}% - 8px)` }}
              ></div>
              <div
                className="h-full rounded-full bg-[#A259FF] transition-all duration-1000"
                style={{ width: `${skill.percent}%` }}
              ></div>

              {/* Percentage label at the end of the progress bar */}
              <span className="absolute -top-7 right-0 text-white font-semibold text-sm">
                {skill.percent}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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
          className="mt-10 text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center md:text-right px-6 py-4 sm:py-6 rounded-full shadow-xl w-full max-w-[520px] mx-auto md:mx-0"
          data-aos="fade-right"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 mt-12">
          {/* Technical Skills */}
          <div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-[#A259FF] mb-6 text-center">
              Technical Skills
            </h3>
            {renderTimelineSkills(technicalSkills, true)}
          </div>

          {/* Professional Skills */}
          <div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-[#A259FF] mb-6 text-center">
              Professional Skills
            </h3>
            {renderTimelineSkills(professionalSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
