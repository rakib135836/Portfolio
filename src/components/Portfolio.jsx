import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import optiAsset from '../assets/optiasset.png';
import roomify from '../assets/roomify.png';
import bus from '../assets/Screenshot (223).png';
import retro from '../assets/retro.png';


const Portfolio = () => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef();

  const projects = [
    {
      id: 1,
      src: optiAsset,
      name: 'Opti Asset',
      description: 'A subscription based webApplication that helps hr to asset their assets and employees can track and mange their asset .it also have stripe as payment system ',
      githubLink: 'https://github.com/rakib135836/opti-asset',
      liveLink: 'https://opti-asset.web.app/',
      techs: ['React', 'JavaScript','MongoDB','Express.js'],
      features: ['Hr and employee Login and Registration', 'Asset and employee management  for Hrs','add or remove employee and assets  System','Stripe Integration for Payments'],
    },
    {
      id: 2,
      src: roomify,
      name: 'Roomify',
      description: 'Its a Hotel booking website offer user choose there best hotel from anywhere .offering you Admin dashboard to track everything (on process). The site is built with a responsive design to ensure accessibility across devices',
      githubLink: 'https://github.com/rakib135836/roomify',
      liveLink: 'https://roomify-1529f.web.app/',
      techs: ['React', 'JavaScript','MongoDB','Express.js','Daisy UI'],
      features: ['Responsive design', 'Document head management','Data management and storage facilitated','User authentication functionalities','Comprehensive volunteer management capabilities'],
    },
    {
      id: 3,
      src: bus,
      name: 'Bus Ticket',
      description: 'if you finding a bus ticketing website you are in the right place .its offers you all the features you are finding till now .dashboard and payment system on process .and still i am implementing some interesting features.',
      githubLink: 'https://github.com/rakib135836/ph-assignment-5',
      liveLink: 'https://rakib135836.github.io/ph-assignment-5/ph-assignment-5.html',
      techs: ['React', 'JavaScript','MongoDB','Express.js','Daisy UI','Tailwind CSS'],
      features: ['Responsive design', 'User Authentication','Private Routes'],
    },
    {
      id: 4,
      src: retro,
      name: 'Retro',
      description: 'A blog website .i am still coding i will add Admin dashboard and user Dashboard to enjoy all access.',
      githubLink: 'https://github.com/Programming-Hero-Web-Course4/b9a6-retro-forum-rakib135836',
      liveLink: 'https://65e7590676a2243da08fd576--starlit-stardust-f322e2.netlify.app/ph-assignment-6',
      techs: ['React', 'JavaScript','Daisy UI','Tailwind CSS'],
      features: ['Responsive design', 'User Authentication','Private Routes'],
    },
  ];

  const handlerControlModal = (index) => {
    setModal(index);
  };

  return (
    <section
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
      id="projects"
      name="portfolio"
    >
      <div className="lg:pt-32 pt-10  max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold text-center pb-2">Projects</h2>
        <span className="text-lg text-center block mt-2 mb-8">All of my projects</span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 sm:px-0">
          {projects.map((project, i) => (
            <div key={i} className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-900">
              <img
                src={project.src}
                alt={project.name}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col md:flex-row items-center justify-center mt-4">
              <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-1/2 px-6 py-3 m-2 md:m-4 duration-200 hover:scale-105 text-center bg-gray-800 text-white rounded-md flex items-center justify-center gap-2"
                >
                  Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-1/2 px-6 py-3 m-2 md:m-4 duration-200 hover:scale-105 text-center bg-gray-800 text-white rounded-md flex items-center justify-center gap-2"
                >
                  Code <FaGithub />
                </a>
                
              </div>
              <div onClick={() => handlerControlModal(i)} className="cursor-pointer text-center mt-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              {modal === i && (
                <div
                  ref={modalRef}
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
                >
                  <div className="bg-white text-black rounded-lg p-6 relative w-full md:w-3/4 lg:w-1/2">
                    <FaTimes
                      className="absolute top-2 right-2 text-xl cursor-pointer"
                      onClick={() => handlerControlModal(null)}
                    />
                    <h3 className="text-center text-2xl font-bold mb-4">{project.name}</h3>
                    <p className="text-center mb-4">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.techs.map((tech, i) => (
                        <p key={i} className="bg-gray-200 px-4 py-2 rounded">
                          {tech}
                        </p>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mb-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
                      >
                        Github <FaGithub />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
                      >
                        Live Demo <FaExternalLinkAlt />
                      </a>
                    </div>
                    <p className="text-lg font-semibold mb-2">Features</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index}>
                          <p>{index + 1}. {feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="projects"
            smooth
            duration={500}
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-600 duration-200 inline-flex items-center"
          >
            View More <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
