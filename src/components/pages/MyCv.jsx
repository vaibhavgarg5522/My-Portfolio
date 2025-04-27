import React from "react";

const MyCv = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8267E3] to-[#aa94ff] animate-fadeIn mt-20">
        My Resume
      </h2>

      {/* PDF Viewer via Google Drive direct preview */}
      <div className="w-full max-w-4xl h-[60vh] sm:h-[80vh] lg:h-[90vh] xl:h-[95vh] rounded-xl overflow-hidden shadow-lg border border-[#8267E3] mb-6">
        <iframe
          src="https://drive.google.com/file/d/1_9qix8HSyVy9QztW7j4ZckppGAXxOuez/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          className="w-full h-full"
          title="Vaibhav Garg"
          loading="lazy"
        ></iframe>
      </div>

      {/* Download Fallback */}
      <div className="mt-6 w-full max-w-md flex justify-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1_9qix8HSyVy9QztW7j4ZckppGAXxOuez"
          download="Vaibhav_Garg_Resume.pdf"
          className="inline-block px-6 py-3 w-full max-w-xs rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-white font-semibold text-center hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  );
};

export default MyCv;
