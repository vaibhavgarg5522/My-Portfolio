import React, { useState } from 'react';
import backgroundImage from '../../images/bgsunny.jpg'; // Make sure this path is correct

const filters = ['All', 'Product', 'Interacting', 'Web App'];

const projects = [
  {
    id: 1,
    title: 'Rock-Paper-Scissors Game',
    desc: 'An interactive Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. Engaging UI and responsive design for desktop and mobile users.',
    image: '/images1/rock-paper.png',
    type: 'Web App',
    live: 'https://your-live-link1.com',
    github: 'https://github.com/yourrepo1',
  },
  {
    id: 2,
    title: 'To-Do List Web App',
    desc: 'Stay organized with this minimal yet powerful to-do list app. Features add, delete, and mark-complete functionalities built with vanilla JavaScript.',
    image: '/images1/todo.png',
    type: 'Web App',
    live: 'https://your-live-link2.com',
    github: 'https://github.com/yourrepo2',
  },
  {
    id: 3,
    title: 'Drive-in Cars Rental (UI/UX)',
    desc: 'Crafted an elegant car rental UI experience using Figma. Focused on clean layouts, smooth navigation, and mobile-first design thinking.',
    image: '/images1/drivein.png',
    type: 'Product',
    live: 'https://your-live-link3.com',
    github: 'https://github.com/yourrepo3',
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
        <div className="text-center mb-10 md:mt-10">
          <p className="text-xs sm:text-sm tracking-widest text-[#AAAAAA] uppercase">
            What I Will Do For You
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8267E3] mt-2">
            Latest Projects
          </h2>
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
