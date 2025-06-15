import React, { useEffect, useState  } from 'react';
import vaiImg from '../../../src/images/sunny6.jpg';
import backgroundImage from '../../images/bgsunny.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBullseye, FaHandsHelping, FaBrain, FaSadTear, FaLightbulb, FaRocket, FaUser } from 'react-icons/fa';

const Persona = () => {

  const sectionIcons = {
    bio: <FaUser className="mr-2 mt-1 text-[#A259FF]" />,
    goals: <FaBullseye className=" mt-1 mr-2 text-[#A259FF]" />,
    needs: <FaHandsHelping className="mr-2 text-[#A259FF] mt-1" />,
    behavior: <FaBrain className="mr-2 text-[#A259FF] mt-1" />,
    pain: <FaSadTear className="mr-2 text-[#A259FF] mt-1" />,
    motivation: <FaLightbulb className="mr-2 text-[#A259FF] mt-1" />,
    future: <FaRocket className="mr-2 text-[#A259FF] mt-1" />,
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderMobileAccordion = (title, content, key) => (
    <div className="md:hidden rounded-lg p-3 shadow-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10" data-aos="fade-right">
      <button
        onClick={() => toggleSection(key)}
        className="w-full flex justify-between items-center text-left text-[white] text-base font-semibold"
      >
         <span className="flex items-start">{sectionIcons[key]} {title}</span>
        
        <span>{openSection === key ? '−' : '+'}</span>
      </button>
      {openSection === key && (
        <div className="mt-3 text-sm text-gray-300">{content}</div>
      )}
    </div>
  );

  return (
    <div
      className="min-h-screen w-full font-sans text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" /> {/* 🔲 Dark overlay */}

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 py-10 space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="p-6 rounded-lg text-center shadow-lg h-fit mt-6" >
            <img
              src={vaiImg}
              alt="Vaibhav Garg"
              className="w-86 h-120 sm:w-66 sm:h-110  object-contain mx-auto object-top  border-[#8267E3] rounded-[40px] " data-aos="fade-up"
            />
            {/* Show "Persona" on small screens only */}
<h3 className="text-4xl font-semibold text-center mt-4 block md:hidden">Persona</h3>

{/* Show "Vaibhav Garg" on medium and larger screens */}
<h3 className="text-4xl font-semibold text-center mt-4 hidden md:block">Vaibhav Garg</h3>

            <p className="mt-4 font-semibold text-lg text-[#A259FF]"data-aos="zoom-in">
              “I design with all my heart thinking about the users”
            </p>

            <div className="mt-6 text-left text-sm space-y-1"data-aos="fade-right">
              <p><span className="font-bold text-[#A259FF]">Age</span>: 30</p>
              <p><span className="font-bold text-[#A259FF]">Gender</span>: Male</p>
              <p><span className="font-bold text-[#A259FF]">Job Title</span>: Frontend Developer</p>
              <p><span className="font-bold text-[#A259FF]">Phone</span>: +91 8218390981</p>
              <p><span className="font-bold text-[#A259FF]">Status</span>: Single</p>
              <p><span className="font-bold text-[#A259FF]">Location</span>: Muzaffarnagar, Uttar Pradesh</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-semibold" data-aos="fade-right">
              <span className="bg-[#8267E3] text-white px-2 py-1 rounded">PASSIONATE</span>
              <span className="bg-[#8267E3] text-white px-2 py-1 rounded">CREATIVE</span>
              <span className="bg-[#8267E3] text-white px-2 py-1 rounded">HARDWORKING</span>
              <span className="bg-[#8267E3] text-white px-2 py-1 rounded">ADVENTUROUS</span>
            </div>

            {/* Technology */}
            <div className="mt-6 text-left" data-aos="fade-up">
              <p className="font-bold text-xl text-center mb-3 text-[#A259FF]"  >Technology</p>
              {[
                ['IT & Internet', 60],
                ['Design Software', 50],
                ['Mobile Apps', 70],
                ['Social Media', 80],
              ].map(([label, value], i) => (
                <div key={i} className="mb-3">
                  <p className="text-xs text-gray-300 mb-1">{label}</p>
                  <div className="w-full h-3 bg-gray-400 rounded" >
                    <div
                      className="h-3 bg-[#A259FF] rounded" 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personality */}
            <div className=" rounded-lg  shadow-md mt-6" data-aos="fade-up">
              <h4 className="text-[#A259FF] text-xl font-semibold mb-4" >Personality</h4>
              {[
                ['Introvert', 'Extrovert', 60],
                ['Logic', 'Creative', 75],
                ['Busy', 'Free', 58],
                ['Independent', 'Team Player', 40],
                ['Safe', 'Risk', 60],
              ].map(([left, right, value], i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{left}</span>
                    <span>{right}</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-700 rounded-full" >
                    <div
                      className="absolute top-[3px] -translate-y-1/2 w-9 h-4 bg-[#A259FF] rounded-full shadow-md"
                      style={{ left: `calc(${value}% - 8px)` }} data-aos="fade-right"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          
   <div className=" md:col-span-2 md:mt-53 mt-1 space-y-6 hidden sm:hidden md:block" data-aos="fade-up">
           <div className="hidden sm:hidden  md:block text-center md:text-left">
  <h2 className="text-4xl font-bold text-[#A259FF] text-center hidden sm:hidden md:block">Persona</h2>
</div>


            {/* Bio */}
            <div>
              <h4 className="text-[#A259FF] text-center text-xl font-semibold mb-1 sm:text-start hidden sm:hidden md:block" >Biography</h4>
              <p className="text-sm text-gray-300 mt-2 hidden sm:hidden md:block">
                Hi, I’m Vaibhav Garg — a frontend developer who believes that every line of code can carry emotion, every design can tell a story, and every interface can make someone’s day a little better.
                <br /><br />
                Hailing from Muzaffarnagar, I’ve always found joy in creating. Whether it’s building something from scratch or polishing pixels until they shine, I pour my heart into everything I do.
                <br /><br />
                For me, frontend development isn’t just a skill — it’s how I express empathy, creativity, and care. I’m passionate about designing experiences that feel warm, intuitive, and human.
                <br /><br />
                Behind the code, I’m someone who loves late-night learning, gets excited by small UI animations, and believes that even the tiniest detail can spark joy.
                <br /><br />
                I’m not just building websites — I’m building moments, connections, and little pieces of love on the internet.
                <br /><br />
                Let’s create something beautiful together. 💫
              </p>
            </div>

            {/* Goals & Needs */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg p-4 shadow-md hidden sm:hidden md:block" data-aos="fade-up">
                <h4 className="text-[#A259FF] text-center text-xl font-semibold mb-2 sm:text-start " >Goals</h4>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 ">
                  <li>Become a frontend developer who communicates design and code fluently</li>
                  <li>Craft real-world frontend projects and grow professionally</li>
                  <li>Contribute to open-source projects and give back to the dev community</li>
                  <li>Learn and implement advanced animations and micro-interactions</li>
                  <li>Build a strong personal brand and portfolio that tells a story</li>
                </ul>
              </div>
              <div className="rounded-lg p-4 shadow-md hidden sm:hidden md:block" data-aos="fade-up ">
                <h4 className="text-center text-xl text-[#A259FF] font-semibold mb-2 sm:text-start " >Needs</h4>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  <li>Tools that simplify development process</li>
                  <li>Constructive feedback and code reviews</li>
                  <li>Mentorship from experienced developers</li>
                  <li>A healthy work-life balance to stay creative and motivated</li>
                  <li>Community support for learning and motivation</li>
                  <li>Access to inspiring design systems and UI kits</li>
                </ul>
              </div>
            </div>

            {/* Behavior & Pain Points */}
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="rounded-lg p-4 shadow-md hidden sm:hidden md:block" data-aos="fade-up">
                <h4 className="text-[#A259FF] text-center text-xl font-semibold mb-2 sm:text-start " >Behavior</h4>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  <li>Kind-hearted and empathetic with others</li>
                  <li>Listens more than speaks — absorbs deeply</li>
                  <li>Finds joy in little things and thoughtful moments</li>
                  <li>Loves consistency and calm environments</li>
                  <li>Always gives his 100% when passionate</li>
                  <li>Collaborates well, but values independent thinking too</li>
                  <li>Believes in spreading positive energy through work</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 shadow-md hidden sm:hidden md:block" data-aos="fade-up">
                <h4 className="text-[#A259FF] font-semibold mb-2 text-center text-xl sm:text-start " >Pain Points</h4>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  <li>Too many tools and frameworks often create confusion instead of clarity</li>
                  <li>Sometimes, detailed feedback is missing — and that slows personal growth</li>
                  <li>Explaining creative ideas in a technical language can be challenging</li>
                  <li>Keeping up with fast-changing frontend trends can feel overwhelming</li>
                  <li>Time pressure sometimes affects the creativity that good design needs</li>
                </ul>
              </div>
              {/* Motivations */}
<div className="rounded-lg p-4 shadow-md hidden sm:hidden md:block" data-aos="fade-up">
  <h4 className="text-[#A259FF] text-center text-xl font-semibold mb-2 sm:text-start" >Motivations</h4>
  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
    <li>Support from my family and my beloved wife during tough times — they inspire me endlessly</li>
    <li>I’m deeply motivated to move forward and build a better life for myself and my loved ones</li>
    <li>Creating interfaces that bring joy to users</li>
    <li>Turning creative ideas into real-world solutions</li>
    <li>Learning and improving every day</li>
    <li>Seeing my progress and knowing how far I’ve come keeps me going</li>
  </ul>
</div>

{/* Future Plans */}
<div className="rounded-lg p-4 shadow-md hidden sm:hidden md:block" data-aos="fade-up">
  <h4 className="text-[#A259FF] text-center text-xl font-semibold mb-2 sm:text-start" >Future Plans</h4>
  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
   
    <li>Use my income not just for myself — but to support others, bring smiles to their faces, and offer peace where it’s needed most</li>
    <li>Become someone who spreads happiness through kindness, and uses success as a way to uplift others</li>
    <li>Take my loving mother on a temple journey across India — a heartfelt thank-you for her endless love and sacrifices</li>
     <li>Work hard, grow as a frontend developer, and earn well to create a stable and fulfilling life</li>
    
  </ul>
</div>

            </div>
          </div>


          <div className="md:hidden md:col-span-2 md:mt-53 mt-1 space-y-6" data-aos="fade-up">
           <div className=" md:hidden text-center md:text-left">
</div>


            {/* Bio */}

            {renderMobileAccordion(
                'Biography',
                 <div>
              <p className="text-sm text-gray-300 mt-2 " data-aos="fade-up">
                Hi, I’m Vaibhav Garg — a frontend developer who believes that every line of code can carry emotion, every design can tell a story, and every interface can make someone’s day a little better.
                <br /><br />
                Hailing from Muzaffarnagar, I’ve always found joy in creating. Whether it’s building something from scratch or polishing pixels until they shine, I pour my heart into everything I do.
                <br /><br />
                For me, frontend development isn’t just a skill — it’s how I express empathy, creativity, and care. I’m passionate about designing experiences that feel warm, intuitive, and human.
                <br /><br />
                Behind the code, I’m someone who loves late-night learning, gets excited by small UI animations, and believes that even the tiniest detail can spark joy.
                <br /><br />
                I’m not just building websites — I’m building moments, connections, and little pieces of love on the internet.
                <br /><br />
                Let’s create something beautiful together. 💫
              </p>
            </div>
,
                'bio'
              )}
           
           

            <div className="grid md:grid-cols-2 gap-4">
               {/* Goals & Needs */}

            {renderMobileAccordion(
                'Goals',
                <div className="rounded-lg p-4 shadow-md" data-aos="fade-up">
               
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 ">
                  <li>Become a frontend developer who communicates design and code fluently</li>
                  <li>Craft real-world frontend projects and grow professionally</li>
                  <li>Contribute to open-source projects and give back to the dev community</li>
                  <li>Learn and implement advanced animations and micro-interactions</li>
                  <li>Build a strong personal brand and portfolio that tells a story</li>
                </ul>
              </div>
                ,
                'goals'
              )}

              {renderMobileAccordion(
                'Needs',
                <div className="rounded-lg p-4 shadow-md" data-aos="fade-up">
                
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  <li>Tools that simplify development process</li>
                  <li>Constructive feedback and code reviews</li>
                  <li>Mentorship from experienced developers</li>
                  <li>A healthy work-life balance to stay creative and motivated</li>
                  <li>Community support for learning and motivation</li>
                  <li>Access to inspiring design systems and UI kits</li>
                </ul>
              </div>,
                'needs'
              )}
              
            </div>

            {/* Behavior & Pain Points */}
            <div className="grid md:grid-cols-2 gap-4">
              {renderMobileAccordion(
                'Behavior',
               <div className="rounded-lg p-4 shadow-md" data-aos="fade-up">
               
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  <li>Kind-hearted and empathetic with others</li>
                  <li>Listens more than speaks — absorbs deeply</li>
                  <li>Finds joy in little things and thoughtful moments</li>
                  <li>Loves consistency and calm environments</li>
                  <li>Always gives his 100% when passionate</li>
                  <li>Collaborates well, but values independent thinking too</li>
                  <li>Believes in spreading positive energy through work</li>
                </ul>
              </div>,
                'behavior'
              )}
              
              {renderMobileAccordion(
                'Pain Points',
               <div className="rounded-lg p-4 shadow-md" data-aos="fade-up">
                
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  <li>Too many tools and frameworks often create confusion instead of clarity</li>
                  <li>Sometimes, detailed feedback is missing — and that slows personal growth</li>
                  <li>Explaining creative ideas in a technical language can be challenging</li>
                  <li>Keeping up with fast-changing frontend trends can feel overwhelming</li>
                  <li>Time pressure sometimes affects the creativity that good design needs</li>
                </ul>
              </div>,
                'pain'
              )}

              
              {/* Motivations */}

               {renderMobileAccordion(
                'Motivations',
                <div className="rounded-lg p-4 shadow-md" data-aos="fade-up">
 
  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
    <li>Support from my family and my beloved wife during tough times — they inspire me endlessly</li>
    <li>I’m deeply motivated to move forward and build a better life for myself and my loved ones</li>
    <li>Creating interfaces that bring joy to users</li>
    <li>Turning creative ideas into real-world solutions</li>
    <li>Learning and improving every day</li>
    <li>Seeing my progress and knowing how far I’ve come keeps me going</li>
  </ul>
</div>
,
                'motivation'
              )}

{/* Future Plans */}

{renderMobileAccordion(
                'Future Plans',
                <div className="rounded-lg p-4 shadow-md" data-aos="fade-up">
  
  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
   
    <li>Use my income not just for myself — but to support others, bring smiles to their faces, and offer peace where it’s needed most</li>
    <li>Become someone who spreads happiness through kindness, and uses success as a way to uplift others</li>
    <li>Take my loving mother on a temple journey across India — a heartfelt thank-you for her endless love and sacrifices</li>
     <li>Work hard, grow as a frontend developer, and earn well to create a stable and fulfilling life</li>
    
  </ul>
</div>,
                'future'
              )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Persona;
