import React from "react";
import { FaMale } from "react-icons/fa";
import avatar from "../../../src/images/image.jpg"

const Persona = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-purple-400">Persona</h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        {/* Left Card */}
        <div className="bg-[#1b1a2e] rounded-2xl p-6 w-full md:w-1/2 shadow-lg shadow-purple-900">
          <div className="flex items-center gap-4">
            <img src={avatar} alt="Sunny" className="w-24 h-24 rounded-full object-cover border-2 border-purple-500" />
            <div>
              <h2 className="text-xl font-semibold">Sunny</h2>
              <p>Male</p>
              <p>Age: 23</p>
              <p>Frontend Developer</p>
              <p>Delhi, India</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-purple-400">Bio</h3>
            <p className="text-sm mt-2">
              Sunny is a passionate frontend developer exploring modern web technologies and design systems. He is also striving to maintain a healthy lifestyle, balancing physical fitness with his career goals.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-purple-400">Skills</h3>
            <div className="mt-2">
              <p className="text-sm">Technical Skills</p>
              <div className="w-full bg-gray-700 h-2 rounded-lg">
                <div className="bg-purple-500 h-2 rounded-lg w-[85%]" />
              </div>
              <p className="text-sm mt-2">Knowledge of Fitness & Health</p>
              <div className="w-full bg-gray-700 h-2 rounded-lg">
                <div className="bg-purple-300 h-2 rounded-lg w-[60%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Personality Traits */}
        <div className="bg-[#1b1a2e] rounded-2xl p-6 w-full md:w-1/2 shadow-lg shadow-purple-900">
          {[
            ["Introvert", "Extrovert", 60],
            ["Logic", "Creative", 80],
            ["Busy", "Free", 70],
            ["Mess up", "Organize", 60],
            ["Individual", "Group", 50],
            ["Passive", "Active", 70],
            ["Safe", "Risk", 40],
          ].map(([left, right, value], i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{left}</span>
                <span>{right}</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-purple-400 h-2 rounded-full"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl text-sm">
        {/* Needs */}
        <div className="bg-[#1b1a2e] rounded-2xl p-4 shadow-lg shadow-purple-900">
          <h3 className="text-purple-400 font-semibold mb-2">Needs</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Track coding + fitness progress</li>
            <li>Set achievable short & long-term goals</li>
            <li>Balance productivity with health</li>
          </ul>
        </div>

        {/* Wants */}
        <div className="bg-[#1b1a2e] rounded-2xl p-4 shadow-lg shadow-purple-900">
          <h3 className="text-purple-400 font-semibold mb-2">Wants</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Clean UI with aesthetic appeal</li>
            <li>Minimal and responsive UX</li>
            <li>Motivational micro-interactions</li>
          </ul>
        </div>

        {/* Motivation */}
        <div className="bg-[#1b1a2e] rounded-2xl p-4 shadow-lg shadow-purple-900">
          <h3 className="text-purple-400 font-semibold mb-2">Motivation</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Grow as a creative frontend developer</li>
            <li>Build real-world projects</li>
            <li>Improve personal health and strength</li>
          </ul>
        </div>

        {/* Pain Points */}
        <div className="bg-[#1b1a2e] rounded-2xl p-4 shadow-lg shadow-purple-900">
          <h3 className="text-purple-400 font-semibold mb-2">Pain Points</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Hard to stay consistent with routine</li>
            <li>Info overload in tech & fitness</li>
            <li>Motivation fluctuates often</li>
          </ul>
        </div>

        {/* Goals */}
        <div className="bg-[#1b1a2e] rounded-2xl p-4 shadow-lg shadow-purple-900">
          <h3 className="text-purple-400 font-semibold mb-2">Goals</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Build top-notch dev portfolio</li>
            <li>Improve stamina and body posture</li>
            <li>Sleep well and reduce stress</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Persona;
