import React, { useMemo } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp, // ✅ WhatsApp icon
} from "react-icons/fa";

const FloatingIcons = () => {
  const icons = useMemo(
    () => [
      {
        icon: <FaWhatsapp />,
        link: "https://wa.me/918218390981",
        bg: "bg-[#20bc59]",
        textSize: "text-[28px]", // ✅ Bigger WhatsApp icon shape
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/vaibhav-garg-b72a57353/",
        bg: "bg-[#0077B5]",
        textSize: "text-[22px]",
      },
      {
        icon: <FaPhoneAlt />,
        link: "tel:+918218390981",
        bg: "bg-red-500",
        textSize: "text-[22px]",
      },
      
      {
        icon: <FaEnvelope />,
        link: "mailto:vaibhavgarg5522@gmail.com",
        bg: "bg-blue-800",
        textSize: "text-[19px]",
      },
    ],
    []
  );

  return (
    <div className="fixed top-[418px] md:top-[478px] right-[14px] flex flex-col gap-4 z-[9999] md:right-[28px]">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-11 h-11 rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 ${item.bg}`}
        >
          <span className={`${item.textSize} icon-wiggle`}>
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default React.memo(FloatingIcons);
