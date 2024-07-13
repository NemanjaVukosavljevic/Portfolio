import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import firebaseImg from '../assets/firebase.png';
import jsImg from '../assets/js.png';
import pythonImg from '../assets/python.png';
import reactImg from '../assets/react.png';
import tailwindImg from '../assets/tailwind.png';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    name: "React",
    image: reactImg,
    description: "React is a JavaScript library for building user interfaces, particularly for single-page applications."
  },
  {
    name: "Tailwind CSS",
    image: tailwindImg,
    description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
  },
  {
    name: "Firebase",
    image: firebaseImg,
    description: "Firebase is a platform developed by Google for creating mobile and web applications."
  },
  {
    name: "JavaScript",
    image: jsImg,
    description: "JavaScript is a versatile programming language commonly used in web development for creating interactive effects within web browsers."
  },
  {
    name: "Python",
    image: pythonImg,
    description: "Python is a high-level, interpreted, and general-purpose programming language known for its readability and versatility."
  },
  {
    name: "CSS",
    image: cssImg,
    description: "CSS is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content."
  },
  {
    name: "HTML",
    image: htmlImg,
    description: "HTML is the standard markup language for creating web pages and web applications."
  },
];

const TechnologiesStack = () => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);
  const techRefs = useRef([]);

  techRefs.current = [];

  const addToTechRefs = (el) => {
    if (el && !techRefs.current.includes(el)) {
      techRefs.current.push(el);
    }
  };

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const timeln = gsap.timeline({ paused: true });
      timeln.fromTo(colLeftRef.current, { y: 20 }, { y: '150vh', duration: 1, ease: 'none' });

      ScrollTrigger.create({
        animation: timeln,
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      });

      techRefs.current.forEach((techRef) => {
        gsap.fromTo(
          techRef,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: techRef,
              start: 'top bottom',
              end: 'top center',
              scrub: true,
            },
          }
        );
      });
    });

        mm.add("(max-width: 1023px)", () => {

        techRefs.current.forEach((techRef) => {
            gsap.fromTo(
              techRef,
              { x: 100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: techRef,
                  start: 'top bottom',
                  end: 'top center',
                  scrub: true,
                },
              }
            );
          })
        
        });

    return () => mm.revert(); // Cleanup matchMedia instances on component unmount
  }, []);

  return (
    <section id="vertical" ref={sectionRef} className="py-0 px-6 md:p-6 lg:p-0 h-auto overflow-hidden lg:h-[200vh] bg-black w-full md:py-12">
      <div className="h-full mx-auto flex flex-col lg:flex-row justify-center items-start">
        <div ref={colLeftRef} className="h-full w-full lg:w-1/2">
          <h2 className="vertical__heading md:mb-20 lg:mt-[7rem] flex flex-col text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase border-l-4 border-orange-500 p-6">
            <span>Modern</span>
            <span>Technologies <span className='text-orange-500'>&</span></span>
            <span>Animations</span>
          </h2>
        </div>
        <div className="h-full flex flex-col justify-between w-full mt-5 md:mt-0 lg:w-2/5">
          {technologies.map((tech, index) => (
            <div ref={addToTechRefs} key={index} className="flex flex-col mb-[60px]">
              <div className='flex items-center'>
                <h3 className="text-3xl lg:text-6xl font-bold text-orange-500 mb-2">{tech.name}</h3>
              </div>
              <p className='text-white text-xl lg:text-2xl'>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesStack;
