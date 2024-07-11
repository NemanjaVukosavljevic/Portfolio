import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Projects from './projectsData'

// tech images

import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import firebaseImg from '../assets/firebase.png';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react-card.png';
import tailwindImg from '../assets/tailwind.png';
import formImg from '../assets/form.png';

// Tech icons
const techIcons = {
  html: htmlImg,
  css: cssImg,
  firebase: firebaseImg,
  javascript: jsImg,
  react: reactImg,
  tailwind: tailwindImg,
  webforms: formImg,
};

const ProjectCard = ({ project }) => {
  
    return (
      <div
        className={`horizontal__item bg-stone-700 text-white shadow-lg rounded-md overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 `}
      >
        <img
          src={project.img}
          alt={project.projectName}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
          <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap mb-4 mt-auto lg:pl-0.5">
            {project.tech.map((tech, index) => (
              <div key={index} className="tooltip-container w-8 h-8 mr-2 mb-2 relative inline-block">
                <img
                  src={techIcons[tech]}
                  alt={tech}
                  className="w-full h-full"
                />
                <span className="tooltip-text bg-black text-white text-center rounded-lg py-1 px-1 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 transition-opacity duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          <a
            href={project.projectUrl}
            className="text-blue-500 font-semibold text-lg mt-auto hover:underline lg:pl-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };
  

const ProjectsSection = () => {

  const sectionRef = useRef(null)
  const itemRef = useRef([])
  


  return (
    <section id="projects" className="py-16 bg-black pt-[8rem] md:pt-[9rem]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">My Projects</h1>
        <div ref={sectionRef} className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} ref={el => {itemRef.current = el}} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
