import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import confetti from 'canvas-confetti';

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
      const newProgress = (prev + 2) / width;

      if (newProgress >= 0.85) {  // Check if progress has reached 88%
        clearInterval(intervalRef.current);
        window.open("https://wa.me/918218390981", "_blank");
        confetti(confettiSettings);
        return 0;  // Reset progress after reaching 88%
      }

      return prev + 2;  // Increase progress by 2 pixels per interval
    });
  }, [confettiSettings]);

  useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(updateProgress, 20);  // Decrease frequency for performance
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

  return (
    <div>
      <div
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
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: `${progress}px`,
            backgroundColor: "#8267E3",
            borderRadius: "9999px",
            transition: "width 0.01s linear",
            zIndex: 0,
          }}
        ></div>

        <span
          className={`z-10 whitespace-nowrap ${
            progress > 20 ? "text-white font-bold" : "text-white font-semibold"
          }`}
          style={{
            // paddingLeft: "2.5rem",
            paddingLeft: "38px",
            fontSize: "14px",
          }}
        >
          Happy to chat on WhatsApp
        </span>

        <div
          className={`absolute top-1/2 -translate-y-1/2 z-30 transition-transform duration-100 ${
            isPressed ? "scale-115 rotate-icon" : "scale-100"
          }`}
          style={{
            left: `${progress}px`,
            background: "#8267E3",
            padding: "0.5rem",
            borderRadius: "9999px",
            border: "2px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaWhatsapp
            className="text-white"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            }}
          />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-20 justify-center md:justify-start">
        <a
          href="https://www.facebook.com/share/168jQRHjqd/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-[20%] border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[#1877F2] hover:shadow-[0_0_15px_#1877F2]"
        >
          <FaFacebookF className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/masoom_____bacha_____/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-[20%] border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[#E4405F] hover:shadow-[0_0_15px_#E4405F]"
        >
          <FaInstagram className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-garg-b72a57353/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-[20%] border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[#0077B5] hover:shadow-[0_0_15px_#0077B5]"
        >
          <FaLinkedinIn className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://github.com/vaibhavgarg5522"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-[20%] border-2 border-[#8267E3] flex justify-center items-center text-white transition-all duration-500 hover:bg-[#8267E3] hover:shadow-[0_0_15px_#333]"
        >
          <FaGithub className="text-xl sm:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default MiniWhatsApp;
