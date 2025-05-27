import { useEffect } from "react";
import backgroundImage from "../../images/bgsunny.jpg";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const technicalSkills = [
    { name: "ReactJs", percent: 89, icon: <FaReact className="text-[#61DAFB] text-xl" /> },
    { name: "JavaScript", percent: 83, icon: <FaJs className="text-[#F7DF1E] text-xl" /> },
    { name: "CSS", percent: 80, icon: <FaCss3Alt className="text-[#264de4] text-xl" /> },
    { name: "HTML", percent: 97, icon: <FaHtml5 className="text-[#e34c26] text-xl" /> },
  ];

  const professionalSkills = [
    { name: "Team Work", percent: 90 },
    { name: "Creativity", percent: 80 },
    { name: "Project Management", percent: 75 },
    { name: "Communication", percent: 70 },
  ];

  const circleRadius = 45;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-cover bg-center bg-fixed relative py-16 px-4 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl w-full text-white">
        <h2
          className="text-center text-4xl md:text-5xl font-bold mb-12 text-[#8267E3]"
          data-aos="fade-down"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="flex justify-center">
            <div
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg w-full max-w-xl"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
                Technical Skills
              </h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:scale-[1.01] transition"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-300">{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-[#2e2e38] h-2 rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff]"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="flex justify-center">
            <div
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg w-full max-w-xl"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {professionalSkills.map((skill, idx) => (
                  <div key={idx} className="relative w-28 h-28 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                      <circle
                        cx="50"
                        cy="50"
                        r={circleRadius}
                        stroke="#2e2e38"
                        strokeWidth="10"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r={circleRadius}
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
                    <div className="absolute flex flex-col items-center justify-center text-white">
                      <span className="text-lg font-bold">{skill.percent}%</span>
                      <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
