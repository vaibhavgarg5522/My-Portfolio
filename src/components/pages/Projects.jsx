import React, { useState } from 'react';
import backgroundImage from '../../images/bgsunny.jpg'; // Make sure this path is correct


const filters = ['All', 'UI/UX', 'Web App'];

const projects = [
  {
    id: 1,
    title: 'MediCare Hub - HealthCare Website',
    desc: 'A sleek, modern medical consultation platform offering seamless appointment booking, responsive design, and professional UI built with ReactJS.',
    image: '/images1/doctorimg.png',
    type: 'Web App',
    live: 'https://medi-care-hub-website.vercel.app/',
    github: 'https://github.com/vaibhavgarg5522/MediCare-Hub-Website',
  },
  {
    id: 2,
    title: 'Spotify Clone - Music Streaming UI',
    desc: 'A React-based Spotify UI clone featuring real-time navigation, dark theme, playlist layout, and interactive elements inspired by the original Spotify platform.',
    image: '/images1/spotifyimg.png',
    type: 'Web App',
    live: 'https://spotify-clone-website-tau.vercel.app/',
    github: 'https://github.com/vaibhavgarg5522/Spotify-Clone-Website',
  },
  {
    id: 3,
    title: 'E-Commerce App - Online Store',
    desc: 'A fully responsive and dynamic online shopping web app built with ReactJS, offering cart features, product filtering, and a user-centric shopping experience.',
    image: '/images1/clothimg.png',
    type: 'Web App',
    live: 'https://e-commerce-app-alpha-rust.vercel.app/',
    github: 'https://github.com/vaibhavgarg5522/E-Commerce-App',
  },
  {
    id: 4,
    title: 'Mini Web Projects Collection',
    desc: 'A compilation of mini ReactJS-based web applications including To-Do List, Weather App, Countdown Timer, Calculator, and more for learning and showcasing frontend skills.',
    image: '/images1/todoimg.png',
    type: 'UI/UX',
    live: 'https://mini-web-projects-react-js.vercel.app/',
    github: 'https://github.com/vaibhavgarg5522/Mini-Web-Projects-ReactJS',
  },
  {
    id: 5,
    title: 'Food Delivery Website',
    desc: 'A visually appealing and responsive food ordering web app built using ReactJS, offering intuitive UI, menu browsing, cart, and modern design for a seamless user experience.',
    image: '/images1/foodimg.png',
    type: 'Web App',
    live: 'https://frontend-ebon-one.vercel.app/',
    github: 'https://github.com/vaibhavgarg5522/Food-Delivery-Website',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      className="min-h-screen px-4 sm:px-8 md:px-16 py-12 md:py-20 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay to darken background slightly */}
      <div className="absolute inset-0 bg-[#1c0f2b88] backdrop-blur-sm z-0" />

      <div className="relative z-10">
        {/* Title */}
        <div className="mb-10 md:mt-10 mt-18">
          <h2 className=" text-4xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(to_right,black_10%,#8267E3_90%)] inline-block text-center md:text-right xl:text-right px-6 sm:px-10 py-5 sm:py-6 rounded-full shadow-xl w-full sm:w-[400px] md:w-[520px] ">
            My Projects
          </h2>
          <p className="text-xl sm:text-3xl md:text-[42px] font-bold uppercase tracking-widest text-transparent md: text-center bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] animate-pulse shadow-md mb-10 mt-6">
            What I Will Do For You
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#8267E3] text-white border-[#8267E3] shadow-lg shadow-[#8267E3]/50'
                  : 'text-white border-[#8267E3] hover:bg-[#8267E3]/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col rounded-xl border border-[#8267E3] bg-gradient-to-br from-[#261741] to-[#1e1c36] p-5 shadow-md hover:shadow-[#8267E3]/70 transition duration-300 hover:scale-[1.015]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover rounded-lg mb-4 border border-[#8267E3]/40"
              />
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{project.desc}</p>
              <div className="flex gap-3 mt-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#8267E3] text-white rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-[#8267E3]/40"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#8267E3] text-white rounded-full text-sm font-medium hover:bg-[#8267E3]/20 transition-all"
                >
                  Check on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;