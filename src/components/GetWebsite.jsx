import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaCheckCircle, FaBolt } from "react-icons/fa";
import backgroundImage from "../../src/images/bgsunny.jpg";

const GetWebsite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      description:
        "Modern and intuitive user interface designs for web & mobile apps.",
    },
    {
      title: "Frontend Development",
      icon: "💻",
      description:
        "Building responsive, fast, and accessible websites using ReactJS.",
    },
    {
      title: "Portfolio Website",
      icon: "🧑‍💼",
      description:
        "Custom personal or business portfolio websites tailored to your brand.",
    },
    {
      title: "Website Redesign",
      icon: "🔄",
      description: "Revamping outdated designs to boost UX and visual impact.",
    },
    {
      title: "Freelance Web Projects",
      icon: "🚀",
      description:
        "Taking freelance gigs with full attention to client satisfaction.",
    },
    {
      title: "Maintenance & Support",
      icon: "🛠️",
      description:
        "Ongoing support, updates, and bug fixes to keep your site running smoothly.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "₹1,999",
      features: [
        "1 Page Website",
        "Responsive Design",
        "Basic UI/UX",
        "Live Deployment",
      ],
      highlight: false,
    },
    {
      name: "Standard",
      price: "₹3,999",
      features: [
        "Up to 4 Pages",
        "Modern UI with Animations",
        "Contact Form Integration",
        "SEO Optimized",
        "Live Deployment",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹5,999",
      features: [
        "6+ Pages / Dashboard",
        "Full Custom Design",
        "Admin Panel (Optional)",
        "Payment Gateway Setup",
        "Priority Support",
        "Advanced Animations",
      ],
      highlight: false,
    },
  ];

  const objectiveItems = [
    { number: 1, text: "Identifying the services", color: "bg-[#2E6F40]" },
    { number: 2, text: "Prioritizing the services", color: "bg-[#729472]" },
    {
      number: 3,
      text: "Determining how to allocate resources across services and processes",
      color: "bg-red-500",
    },
    {
      number: 4,
      text: "Assessing performance against customer expectations and business needs",
      color: "bg-blue-900",
    },
    {
      number: 5,
      text: "Implementing corrective actions as needed to ensure desired outcomes are achieved",
      color: "bg-sky-600",
    },
    {
      number: 6,
      text: "Evaluate the overall performance of service delivery",
      color: "bg-[#a88030]",
    },
  ];

  return (
    <section
      className="min-h-screen px-4 sm:px-8 md:px-16 py-12 md:py-20 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto mt-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center md:text-right xl:text-right px-6 sm:px-10 py-4 sm:py-6 rounded-full shadow-xl w-full sm:w-[400px] md:w-[520px]"
          data-aos="fade-right"
        >
         Services
        </h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="bg-[#1a112b] border border-[#A259FF] rounded-2xl p-6 hover:shadow-[0_0_20px_#A259FF] hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#A259FF] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-10" data-aos="fade-up">
          <div className="bg-[#1c1533]/60 border border-[#8267E3]/30 backdrop-blur-md text-gray-300 rounded-xl p-6 max-w-3xl mx-auto shadow-md">
            <p className="text-center text-base sm:text-lg leading-relaxed">
              Whether you're a <span className="text-[#00FFD1] font-medium">business</span>, <span className="text-[#00FFD1] font-medium">freelancer</span>, or <span className="text-[#00FFD1] font-medium">startup</span> — I help you go
              online with <span className="text-[#FFD700] font-semibold">beautiful</span>, <span className="text-[#FFD700] font-semibold">fast</span>, and <span className="text-[#FFD700] font-semibold">functional</span> websites using{" "}
              <span className="text-[#FFD700] font-semibold">ReactJS</span>.
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <section className="py-5 text-black">
          <div className="relative flex flex-col md:flex-row items-center justify-center md:gap-40">
            <div
              className="w-52 h-52 md:w-60 md:h-60 rounded-full bg-[#8267E3] border-8 border-[#A259FF] text-white flex items-center justify-center text-center text-md font-semibold z-10 shadow-2xl p-4"
              data-aos="zoom-in"
            >
              <span className="text-[17px]">
                OBJECTIVES OF <br /> SERVICE PORTFOLIO <br /> MANAGEMENT
              </span>
            </div>

            <div className="relative w-full md:w-auto flex flex-col gap-6 z-0 mt-10">
              {objectiveItems.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center rounded-full shadow-lg px-2 py-2 w-full md:w-[500px] text-sm md:text-base ${item.color}`}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                >
                  <div className="hidden md:block absolute -left-[60px] top-1/2 transform -translate-y-1/2">
                    <div className="w-[60px] h-[2px] bg-gray-400" />
                  </div>
                  <div className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-white text-black font-bold flex items-center justify-center mr-4 text-sm shadow-md">
                    {item.number}
                  </div>
                  <div className="text-white text-center text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20" data-aos="fade-up">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#8267E3]/20 border-[#A259FF] scale-105"
                  : "bg-[#1c1533]/50 border-[#8267E3]/30"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-6 text-white">{plan.price}</p>
              <ul className="text-left text-gray-300 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
  href="https://wa.me/918218390981"
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-flex items-center justify-center gap-2 mt-8 px-5 py-2 rounded-full font-medium transition-transform hover:scale-105 ${
    plan.highlight
      ? "bg-[#00C896] text-[white]"
      : "bg-[#00C896] text-white"
  }`}
>
  <FaWhatsapp />
  Contact on WhatsApp
</a>

            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div
          className="bg-[#1c1533]/60 border border-[#8267E3]/30 rounded-2xl p-8 mt-20 shadow-[0_0_25px_#A259FF]/20 max-w-3xl mx-auto"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#00FFD1] mb-6 flex items-center justify-center gap-2">
            <FaBolt className="text-[#FFD700]" />
            Why Choose Me?
          </h3>
          <ul className="list-disc list-inside text-left text-gray-300 text-base sm:text-lg space-y-2">
            <li>✨ 3+ Years of Real-World Front-End Experience</li>
            <li>⚡ Ultra-Fast, Responsive, SEO-Friendly Code</li>
            <li>💼 Professional & Deadline-Focused Approach</li>
            <li>💬 Clean Communication with Modern UI/UX</li>
            <li>🛠️ Powered by ReactJS, TailwindCSS & Animations</li>
          </ul>
        </div>

        {/* Call to Action Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          data-aos="zoom-in-up"
        >
          <a
            href="https://wa.me/918218390981"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00C896] hover:bg-[#00a67d] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition"
          >
            <FaWhatsapp size={18} />
            Message on WhatsApp
          </a>
          <button
            onClick={() => navigate("/contact")}
            className="border border-[#8267E3] text-white hover:bg-[#8267E3] px-6 py-3 rounded-full font-semibold transition"
          >
            Get in Touch
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center text-sm text-gray-400 italic" data-aos="fade-in">
          Let’s build something amazing together! 💻✨
        </div>
      </div>
    </section>
  );
};

export default GetWebsite;
