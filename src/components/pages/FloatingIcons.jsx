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
      bg: "bg-blue-600",
    },
   
    {
      icon: <FaPhoneAlt />,
      link: "tel:+918218390981",
      bg: "bg-orange-500",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/vaibhav-garg-b72a57353/",
      bg: "bg-blue-800",
    },
    // {
    //   icon: <FaInstagram />,
    //   link: "https://www.instagram.com/masoom_____bacha_____/",
    //   bg: "bg-red-500",
    // },
    {
      icon: <FaEnvelope />,
      link: "mailto:vaibhavgarg5522@gmail.com",
      bg: "bg-blue-700",
    },
   
   
    // {
    //   icon: <FaGithub />,
    //   link: "https://github.com/vaibhavgarg5522",
    //   bg: "bg-gray-800",
    // },
   
  ];

  return (
    <div className="fixed top-[388px] md:top-[428px] right-[15px] flex flex-col gap-4 z-50">
      {icons.map((item, index) => (
      <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 ${item.bg}`}
    >
       <span className="text-2xl icon-wiggle">{item.icon}</span>
    </a>
    
      ))}
    </div>
  );
};

export default FloatingIcons;
