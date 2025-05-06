import React, { useEffect, useState } from "react";

const MyCv = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iPad|iPhone|iPod/i.test(userAgent.toLowerCase())) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8267E3] to-[#aa94ff] animate-fadeIn mt-20">
        My Resume
      </h2>

      {/* Mobile fallback */}
      {isMobile ? (
        <>
          {/* Preview image (optional) */}
          <div className="w-full max-w-xs mb-4">
            <img
              src="/resume-preview.jpg"
              alt="Resume Preview"
              className="rounded-xl shadow-lg border border-[#8267E3]"
            />
          </div>
          <p className="text-center text-white mb-4">
            PDF preview is not supported on mobile.
            <a
              href="/VAIBHAV_Resume.pdf"
              download
              className="underline text-[#aa94ff] ml-2"
            >
              Click here to download the resume.
            </a>
          </p>
        </>
      ) : (
        // Desktop PDF Embed
        <div className="w-full max-w-4xl h-[60vh] sm:h-[80vh] lg:h-[90vh] xl:h-[95vh] rounded-xl overflow-hidden shadow-lg border border-[#8267E3] mb-6">
          <object
            data="/VAIBHAV_Resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p className="text-center text-white p-4">
              This browser does not support PDF embedding.
              <a
                href="/VAIBHAV_Resume.pdf"
                download
                className="underline text-[#aa94ff] ml-2"
              >
                Click here to download the resume.
              </a>
            </p>
          </object>
        </div>
      )}

      {/* Download Button */}
      <div className="mt-6 w-full max-w-md flex justify-center">
        <a
          href="/VAIBHAV_Resume.pdf"
          download="VAIBHAV_Resume.pdf"
          className="inline-block px-6 py-3 w-full max-w-xs rounded-full bg-gradient-to-r from-[#8267E3] to-[#aa94ff] text-white font-semibold text-center hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  );
};

export default MyCv;
