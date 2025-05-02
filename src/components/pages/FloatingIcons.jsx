import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const FloatingIcons = () => {
  const icons = [

    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/168jQRHjqd/",
      bg: "bg-[#1877F2]",
    },
   
    {
      icon: <FaPhoneAlt />,
      link: "tel:+918218390981",
      bg: "bg-red-500",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/vaibhav-garg-b72a57353/",
      bg: "bg-[#0077B5]",
    },
    // {
    //   icon: <FaInstagram />,
    //   link: "https://www.instagram.com/masoom_____bacha_____/",
    //   bg: "bg-red-500",
    // },
    {
      icon: <FaEnvelope />,
      link: "mailto:vaibhavgarg5522@gmail.com",
      bg: "bg-blue-800",
    },
   
   
    // {
    //   icon: <FaGithub />,
    //   link: "https://github.com/vaibhavgarg5522",
    //   bg: "bg-gray-800",
    // },
   
  ];

  return (
    <div className="fixed top-[408px] md:top-[428px] right-[10px] flex flex-col gap-4 z-50">
      {icons.map((item, index) => (
      <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full text-white flex items-center justify-center shadow-md hover:scale-120 transition-transform duration-300 ${item.bg}`}
    >
       <span className="text-[22px] icon-wiggle">{item.icon}</span>
    </a>
    
      ))}
    </div>
  );
};

export default FloatingIcons;
