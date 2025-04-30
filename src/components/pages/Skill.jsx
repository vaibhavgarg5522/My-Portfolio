import React, { useState } from "react";
import backgroundImage from "../../images/bgsunny.jpg";

const Skills = () => {
  const [technicalSkills] = useState([
    { name: "ReactJs", percent: 89 },
    { name: "JavaScript", percent: 83 },
    { name: "CSS", percent: 80 },
    { name: "HTML", percent: 97 },
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
      className="min-h-screen bg-cover bg-center text-white py-16 px-4 sm:px-6 md:px-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center md:text-right px-6 sm:px-10 py-5 sm:py-6 rounded-full shadow-xl w-full sm:w-[400px] md:w-[520px] md:mt-15 mt-15">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-14 md:gap-20 items-start mt-9 md:mt-9">
          {/* Technical Skills */}
          <div className="w-full max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="flex justify-between mb-2 px-1 text-sm sm:text-base">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-gray-300">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-3 sm:h-4 bg-gray-800 rounded-full relative overflow-hidden shadow-inner transition-all duration-500">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] transform transition-all duration-500 ease-in-out hover:scale-105"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                    <div
                      className="absolute top-0 h-full bg-white w-[2px]"
                      style={{ left: `calc(${skill.percent}% - 1px)` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="w-full max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#8267E3] mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
              {professionalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="relative w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center text-center skill-circle transition-all duration-500 ease-in-out transform hover:scale-110"
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
                      className="transition-all duration-500"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8267E3" />
                        <stop offset="100%" stopColor="#aa94ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-base sm:text-xl font-bold text-white drop-shadow -mb-2">
                      {skill.percent}%
                    </span>
                    <span className="text-[11px] sm:text-sm text-gray-300 mt-1">{skill.name}</span>
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
