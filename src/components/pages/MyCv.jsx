import React from "react";

const MyCv = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8267E3] to-[#aa94ff] animate-fadeIn mt-20">
        My Resume
      </h2>

      {/* PDF Viewer via Google Drive direct preview */}
      <div className="w-full max-w-4xl aspect-video sm:h-[80vh] rounded-xl overflow-hidden shadow-lg border border-[#8267E3]">
        <iframe
          src="https://drive.google.com/file/d/1RRlh_uGXhVnOYfADr3yOUquUgfUou7aj/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          className="w-full h-full"
          title="Vaibhav Garg Resume"
        ></iframe>
      </div>

      {/* Download Fallback */}
      <div className="mt-6">
        <a
          href="https://drive.google.com/uc?export=download&id=1RRlh_uGXhVnOYfADr3yOUquUgfUou7aj"
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
