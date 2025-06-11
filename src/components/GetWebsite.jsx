import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaCheckCircle, FaBolt } from "react-icons/fa";

const GetWebsite = () => {
  const navigate = useNavigate();

  const services = [
    "Portfolio Website",
    "Business Landing Page",
    "E-Commerce Store",
    "Custom React Web App",
    "Responsive Redesign",
    "UI/UX Fixing",
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

  return (
    <section
      id="get-website"
      className="min-h-screen bg-gradient-to-br from-[#1a112b] via-[#2a1d47] to-[#3b2a66] text-white px-6 py-16 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12 mt-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#A259FF]" data-aos="zoom-in">
          Want a Stunning Website?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg" data-aos="fade-up">
          Whether you're a business, freelancer, or startup — I help you go
          online with beautiful, fast, and functional websites using{" "}
          <span className="text-[#FFD700] font-semibold">ReactJS</span>.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1c1533]/60 backdrop-blur-md border border-[#8267E3]/40 rounded-xl p-6 shadow-[0_0_15px_#8267E3]/20 hover:scale-105 transform transition duration-300"
              data-aos="fade-up"
            >
              <FaCheckCircle className="text-[#00FFD1] text-xl mb-3" />
              <h4 className="text-lg font-semibold">{service}</h4>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
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
                className="block mt-8 bg-[#00C896] hover:bg-[#00a67d] text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
              >
                Get This Plan
              </a>
            </div>
          ))}
        </div>

        {/* Why Choose Me */}
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

        {/* Final CTAs */}
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

        <div className="mt-14 text-sm text-gray-400 italic" data-aos="fade-in">
          Let’s build something amazing together! 💻✨
        </div>
      </div>
    </section>
  );
};

export default GetWebsite;
