import React from "react";
import CV from "../../assets/VAIBHAV_GARG_.pdf";

const MyCv = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-[#8267E3]">My Resume</h2>
      <iframe
        src={CV}
        title="Vaibhav Garg Resume"
        className="w-full max-w-5xl h-[90vh] border-2 border-[#8267E3] rounded-lg shadow-xl"
      ></iframe>
    </div>
  );
};

export default MyCv;
