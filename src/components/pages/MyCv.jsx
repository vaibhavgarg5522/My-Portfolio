import React from "react";
import CV from "../../assets/VAIBHAV_GARG_.pdf";

const MyCv = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8267E3] to-[#aa94ff] animate-fadeIn mt-20">
        My Resume
      </h2>

      {/* PDF Viewer */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-lg border border-[#8267E3]">
        <iframe
          src={CV}
          title="Vaibhav Garg Resume"
          className="w-full h-[80vh] sm:h-[90vh]"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Fallback Download Button (For mobile issues) */}
      <div className="mt-6">
        <a
          href={CV}
          download="Vaibhav_Garg_Resume.pdf"
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  );
};

export default MyCv;
