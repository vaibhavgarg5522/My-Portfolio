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
      percent: 80,
      icon: <FaPaintBrush className="text-white text-lg" />,
    },
    {
      name: "Project Management",
      percent: 75,
      icon: <FaTasks className="text-white text-lg" />,
    },
    {
      name: "Communication",
      percent: 70,
      icon: <FaComments className="text-white text-lg" />,
    },
  ]);

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
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
            data-aos="fade-up"
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

          {/* Professional Skills - Timeline Icons on Line */}
          <div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 relative"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
              Professional Skills
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-4 border-[#8267E3] space-y-10">
              {professionalSkills.map((skill, idx) => (
                <div key={idx} className="relative flex items-center gap-4">
                  {/* Icon on the vertical line */}
                  <div className="absolute -left-[51px] sm:-left-[58px] top-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-[#8267E3] border-[4px] border-white shadow-xl flex items-center justify-center text-white text-xl" data-aos="fade-up">
                      {skill.icon}
                    </div>
                  </div>

                  {/* Skill Info Box */}
                  <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-4 w-full shadow-md hover:scale-[1.02] transition-transform duration-300" >
                    <h4 className="text-lg sm:text-xl text-white font-semibold">
                      {skill.name}
                    </h4>
                    <p className="text-[#cfc6ff] text-sm font-medium">
                      Proficiency:<span className="font-bold">{skill.percent}%</span>
                    </p>
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
