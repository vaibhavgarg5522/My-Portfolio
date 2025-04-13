import React, { useRef } from 'react';
import { FiMapPin, FiSend, FiPhoneCall } from "react-icons/fi";
import backgroundImage from "../../images/bgsunny.jpg";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uinyu8d',
      'template_0aflauk',
      form.current,
      'bKptcgsLisERMObpO' // ✅ REPLACED with your actual Public Key
    )
    .then((result) => {
      alert('Message sent successfully!');
      console.log(result.text);
    }, (error) => {
      alert('Failed to send message. Please try again later.');
      console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white py-16 px-6 md:px-20 flex flex-col gap-16 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: `'Poppins', sans-serif`,
        fontStyle: "italic",
      }}
    >
      <div className="absolute inset-0 bg-[#1c0f2b88] backdrop-blur-sm z-0" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center px-6 sm:px-10 py-4 sm:py-6 rounded-full shadow-xl mb-10 w-full sm:w-[400px] md:w-[520px] mt-18">
              Get in Touch
            </h2>

            <a href="mailto:vaibhavgarg5522@gmail.com" className="flex items-center gap-4 bg-[linear-gradient(145deg,_#1a112b,_#2d165e)] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="bg-[#8267E3] text-white rounded-full p-3">
                <FiSend size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-[#c4b4ff]">vaibhavgarg5522@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918218390981" className="flex items-center gap-4 bg-[linear-gradient(145deg,_#1a112b,_#2d165e)] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 mt-10">
              <div className="bg-[#8267E3] text-white rounded-full p-3">
                <FiPhoneCall size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Call</h4>
                <p className="text-[#c4b4ff]">+91-8218390981</p>
              </div>
            </a>

            <a href="https://www.google.com/maps/place/Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[linear-gradient(145deg,_#1a112b,_#2d165e)] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 mt-10">
              <div className="bg-[#8267E3] text-white rounded-full p-3">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-[#c4b4ff]">Uttar-Pradesh, India</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#121c28] border border-[#8267E3] rounded-xl p-8 space-y-6 md:w-1/2 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-center text-[#8267E3] mb-4">Send a Message</h3>

            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#8267E3] placeholder-[#c4b4ff] text-[#c4b4ff] focus:outline-none focus:ring-2 focus:ring-[#8267E3]"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#8267E3] placeholder-[#c4b4ff] text-[#c4b4ff] focus:outline-none focus:ring-2 focus:ring-[#8267E3]"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#8267E3] placeholder-[#c4b4ff] text-[#c4b4ff] focus:outline-none focus:ring-2 focus:ring-[#8267E3]"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#8267E3] placeholder-[#c4b4ff] text-[#c4b4ff] focus:outline-none focus:ring-2 focus:ring-[#8267E3]"
            />
            <button
              type="submit"
              className="bg-[#8267E3] hover:bg-[#6d56c8] transition duration-300 text-white font-semibold py-3 px-6 rounded-md shadow-md w-full"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="relative w-full mt-20">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#c4b4ff] z-0" />
          <div className="flex justify-evenly items-center z-10 relative w-full px-4 flex-wrap gap-3">
            {[
              { name: "Facebook", url: "https://www.facebook.com/share/168jQRHjqd/" },
              { name: "Instagram", url: "https://www.instagram.com/masoom_____bacha_____/" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/vaibhav-garg-468a5134a/" },
              { name: "GitHub", url: "https://github.com/vaibhavgarg5522" }
            ].map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 border border-[#c4b4ff] text-[#c4b4ff] rounded-full text-sm bg-[#0b1c17] hover:bg-[#8267E3] hover:text-white transition-all duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#c4b4ff] text-center mt-6">
          © 2025 Vaibhav Garg. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
