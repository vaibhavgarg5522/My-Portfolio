import React, { useMemo } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  // FaInstagram,
  // FaGithub,
} from "react-icons/fa";

const FloatingIcons = () => {
  // Memoize the icons list so it's not recalculated on every render
  const icons = useMemo(() => [
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
    {
      icon: <FaEnvelope />,
      link: "mailto:vaibhavgarg5522@gmail.com",
      bg: "bg-blue-800",
    },
  ], []); // empty dependency array since values are static

  return (
    <div className="fixed top-[408px] md:top-[328px] right-[18px] flex flex-col gap-4 z-50">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12  rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 ${item.bg}`}
        >
          <span className="text-[22px] icon-wiggle">{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default React.memo(FloatingIcons); // prevent unnecessary re-renders if props/state don’t change
