import React, { useRef, useEffect } from 'react';
import aiVideo from '../assets/bacc-video.mp4';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollLink from './ScrollLink';

gsap.registerPlugin(useGSAP);


const HeroSection = () => {

    const heroRef = useRef(null)
    const videoRef = useRef(null)    
    
    const orangeTextRef = useRef(null)

    useGSAP(() => {
        let mm = gsap.matchMedia();
        const timeline = gsap.timeline({defaults: {ease: "power2.in"}})
        let sections = gsap.utils.toArray('.sequenceText');

        mm.add("(min-width: 800px)", () => {
            timeline
            .fromTo(sections, {opacity: 0}, {opacity: 1, duration: .3, stagger: 1, delay: 3})
            .to(videoRef.current, {display: 'flex', opacity: 1, duration: 1})
            .to(sections[2], { color: 'orange', duration: .5, })
        });

        mm.add("(max-width: 799px)", () => {
            timeline
            .fromTo(sections, {opacity: 0}, {opacity: 1, duration: .3, stagger: 1, delay: 1})
            .to(videoRef.current, {display: 'flex', opacity: 1, duration: 1})
            .to(sections[2], { color: 'orange', duration: .5, })
        });
    })

  return (
    <div id='home' ref={heroRef} className='relative min-h-screen flex flex-col pt-[6.1rem] bg-black'>
        <div className='absolute inset-0 bg-fixed'>
        <video
            ref={videoRef}
            className='opacity-0 w-full h-full object-cover'
            src={aiVideo}
            autoPlay
            loop
            muted
        />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        </div>
        <div className='relative w-full h-[60vh] md:mt-[7rem] lg:mt-[5rem] md:h-full flex flex-col justify-center items-center p-8 '>
            <div className="flex flex-col gap-5 md:gap-10 text-5xl md:text-[6rem] font-extrabold text-white text-center">
                <h1 className='sequenceText'>
                INNOVATION
                </h1>
                <h1 className='sequenceText'>
                THROUGH
                </h1>
                <h1 ref={orangeTextRef} className='sequenceText'>
                CODE
                </h1>
            </div>

            <div className='sequenceText flex gap-2 md:gap-10 mt-[4rem]'>
                <ScrollLink to="projects">
                  <button className=' p-5 text-base md:text-xl text-white border border-orange-500 rounded-md hover:border-white hover:text-orange-500 transition-colors duration-150'>My Projects</button>
                </ScrollLink>
                <ScrollLink to="contact">
                  <button className=' p-5 text-base md:text-xl text-white border border-orange-500 rounded-md hover:border-white hover:text-orange-500 transition-colors duration-150'>Contact Me</button>
                </ScrollLink>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
