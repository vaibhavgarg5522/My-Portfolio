import React, { useRef, useEffect } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import backgroundImage from "../../images/bgsunny.jpg";
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      time: currentTime,
    };

    emailjs.send(
      'service_uinyu8d',
      'template_0aflauk',
      formData,
      'bKptcgsLisERMObpO'
    )
      .then((result) => {
        alert('Message sent successfully!');
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.log(error.text);
      });
  };

  return (
    <section
     className="min-h-screen px-4 sm:px-8 md:px-16 py-12 md:py-20 text-white bg-cover bg-center bg-no-repeat relative"
                 style={{
                   backgroundImage: `url(${backgroundImage})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                   backgroundAttachment: 'fixed',
                   fontFamily: `'Poppins', sans-serif`,
                   fontStyle: "italic",
                 }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-[60%]">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center px-6 sm:px-10 py-5 sm:py-6 rounded-full shadow-xl mb-10 w-full sm:w-[400px] md:w-[520px] md:text-right md:mt-19 mt-15"
              data-aos="fade-right"
            >
              Get in Touch
            </h2>

            <ContactItem
              icon={<MdEmail size={24} />}
              title="Email"
              value="vaibhavgarg5522@gmail.com"
              href="mailto:vaibhavgarg5522@gmail.com"
              color="#FF6A3D"
              animation="fade-right"
            />

            <ContactItem
              icon={<MdPhone size={24} />}
              title="Call"
              value="+91-8218390981"
              href="tel:+918218390981"
              color="#00C896"
              animation="fade-right"
            />

            <ContactItem
              icon={<MdLocationOn size={24} />}
              title="Location"
              value="Uttar-Pradesh, India"
              href="https://www.google.com/maps/place/Uttar+Pradesh"
              color="red"
              animation="fade-right"
            />
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#121c28] border border-[#8267E3] rounded-xl p-8 space-y-6 md:w-1/2 shadow-2xl"
            data-aos="slide-up"
          >
            <h3 className="text-2xl font-bold text-center text-[#A259FF]">Contact Me</h3>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#8B3DFF]"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#8B3DFF]"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#8B3DFF]"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#8B3DFF]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-[#8267E3] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition duration-300"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Updated Contact Item to accept animation as a prop
const ContactItem = ({ icon, title, value, href, color, animation }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-gradient-to-br from-[#1a112b] to-[#2d165e] rounded-xl p-4 mt-6 shadow-md hover:scale-105 transition-transform duration-300"
    data-aos={animation}
  >
    <div
      className="w-11 h-11 flex items-center justify-center rounded-full"
      style={{
        backgroundColor: `${color}22`,
        color: color,
        boxShadow: `0 0 10px ${color}`,
      }}
    >
      {icon}
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-[#c4b4ff]">{value}</p>
    </div>
  </a>
);

export default Contact;