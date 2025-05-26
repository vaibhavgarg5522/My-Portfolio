import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { FaInstagram, FaSkype, FaGithub } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { BsArrowRightCircleFill } from "react-icons/bs";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FaXTwitter } from 'react-icons/fa6';
import AOS from "aos";
import "aos/dist/aos.css";

const MiniWhatsApp = () => {
  const [progress, setProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    "linear-gradient(145deg, #1a112b, #2d165e)"
  );

  const buttonRef = useRef(null);
  const intervalRef = useRef(null);

  const confettiSettings = useMemo(() => ({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
  }), []);

  const updateProgress = useCallback(() => {
    setProgress((prev) => {
      if (!buttonRef.current) return prev;
      const width = buttonRef.current.offsetWidth;
      const newProgress = prev + 2;

      if (newProgress >= width * 0.84) {
        clearInterval(intervalRef.current);
        window.open("https://wa.me/918218390981", "_blank");
        confetti(confettiSettings);
        return width * 0.84;
      }

      return newProgress;
    });
  }, [confettiSettings]);

  useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(updateProgress, 25);
    } else {
      clearInterval(intervalRef.current);
      setProgress(0);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPressed, updateProgress]);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
    setBackgroundColor("linear-gradient(145deg, #1a112b, #2d165e)");
  }, []);

  const handleMouseMove = useCallback(() => {
    if (progress > 0 && buttonRef.current && progress < buttonRef.current.offsetWidth) {
      setBackgroundColor("linear-gradient(145deg, #1a112b, #2d165e)");
    } else if (buttonRef.current && progress >= buttonRef.current.offsetWidth) {
      setBackgroundColor("linear-gradient(145deg, #4e2c5f, #7a357e)");
    }
  }, [progress]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* WhatsApp Button with AOS */}
      <div
        data-aos="fade-up"
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchCancel={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="relative flex items-center justify-start cursor-pointer select-none py-3 px-6 rounded-full shadow-lg border border-[#8267E3] overflow-hidden transition-all duration-300 w-[316px]"
        style={{
          background: backgroundColor,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        {/* Progress Fill */}
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: `${progress}px`,
            backgroundColor: "#198b6f",
            borderRadius: "9999px",
            transition: "width 0.01s linear",
            zIndex: 0,
          }}
        ></div>

        {/* Button Text */}
        <span
          className={`z-10 whitespace-nowrap flex items-center gap-2 ${progress > 25 ? "font-bold" : "font-semibold"}`}
          style={{
            paddingLeft: "35px",
            fontSize: "14px",
            color: progress > 0 ? "#ffffff" : "#00FFD1",
            transition: "color 0.3s ease",
          }}
        >
          Happy to chat on WhatsApp
          <span className="text-lg ml-5 md:ml-4 animate-wiggle" style={{ color: "#00C896" }}>
            <BsArrowRightCircleFill />
          </span>
        </span>

        {/* WhatsApp Icon */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-50 transition-transform duration-100 ${
            isPressed ? "scale-115 rotate-icon" : "scale-100"
          }`}
          style={{
            left: `${progress}px`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px #25D366",
            backgroundColor: "black"
          }}
        >
          <WhatsAppIcon style={{ color: "#25D366", fontSize: "36px" }} />
        </div>
      </div>

      {/* Social Media Icons with AOS */}
      <div
        data-aos="fade-right"
        className="flex gap-6 mt-13 md:mt-17 justify-center md:justify-start"
      >
        <a
          href="https://x.com/vaibhavgarg5522?t=H5maR-6fEwgZef00HQhfQA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[#8267E3] hover:shadow-[0_0_15px_#1877F2]"
        >
          <FaXTwitter className="text-xl sm:text-2xl" style={{ color: "white", fontSize: "27px" }} />
        </a>
        <a
          href="https://www.instagram.com/masoom_____bacha_____/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[white] hover:shadow-[0_0_15px_#E4405F]"
        >
          <FaInstagram className="text-xl sm:text-2xl" style={{ color: "#E4405F", fontSize: "28px" }} />
        </a>
        <a
          href="skype:+918218390981?call"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[white] hover:shadow-[0_0_15px_#0077B5]"
        >
          <FaSkype className="text-xl sm:text-2xl" style={{ color: "#00AFF0", fontSize: "27px" }} />
        </a>
        <a
          href="https://github.com/vaibhavgarg5522"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[#8267E3] hover:shadow-[0_0_15px_#333]"
        >
          <FaGithub className="text-xl sm:text-2xl" style={{ color: "white", fontSize: "28px" }} />
        </a>
      </div>
    </div>
  );
};

export default MiniWhatsApp;
