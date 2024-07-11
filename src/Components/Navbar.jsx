import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/nv-logo.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ScrollLink from './ScrollLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const navbarRef = useRef(null);

  useGSAP(() => {

    let mm = gsap.matchMedia();
    const timeline = gsap.timeline({ defaults: { ease: 'power2.in' } });
    const navBarDesktopText = gsap.utils.toArray('.navdekstoptext');

    mm.add("(min-width: 800px)", () => {
        // clear the timeline in case someone changes the device view
        timeline.clear();
        // desktop setup code here...
        timeline
        .fromTo(navbarRef.current, { opacity: 0 }, { duration: 1, opacity: 1 })
        .fromTo(navBarDesktopText, { opacity: 0 }, { duration: 0.5, opacity: 1, stagger: 0.5 });
    });
    
    
    mm.add("(max-width: 799px)", () => {
        // clear the timeline in case someone changes the device view
        timeline.clear();
        // mobile setup code here...timeline
        timeline
        .fromTo(navbarRef.current, { opacity: 0 }, { duration: 1, opacity: 1 })
    });

});



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle-button')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={navbarRef} className='fixed top-0 left-0 w-screen md:h-[6rem] py-5 px-6 bg-black lg:opacity-90 rounded-b-md z-10'>
      <div className='flex justify-between items-center md:px-[4rem] lg:px-[6rem]'>
        {/* Logo */}
        <div className='w-[10%] h-full cursor-pointer md:mr-5 lg:-mr-0'>
          <ScrollLink to="home">
            <img src={logo} className='h-full md:w-[7rem]' alt="logo" />
          </ScrollLink>
        </div>

        {/* Menu for larger screens */}
        <div className='hidden md:flex items-center flex-1'>
          <ul className='flex gap-5 text-2xl font-semibold lg:font-normal text-white'>
            <li className='navdekstoptext hover:text-orange-500 transition-colors duration-300 cursor-pointer'>
              <ScrollLink to="home">Home</ScrollLink>
            </li>
            <li className='navdekstoptext hover:text-orange-500 transition-colors duration-300 cursor-pointer'>
              <ScrollLink to="projects">Projects</ScrollLink>
            </li>
            <li className='navdekstoptext hover:text-orange-500 transition-colors duration-300 cursor-pointer'>
              <ScrollLink to="contact">Contact me</ScrollLink>
            </li>
          </ul>
          <div className='flex flex-1 justify-end'>
            <a href="https://www.linkedin.com/in/nemanja-vukosavljevi%C4%87-a10261273/" target="_blank" rel="noopener noreferrer">
              <button className='p-3 rounded-md text-xl bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors duration-300'>Linkedin</button>
            </a>
          </div>
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white focus:outline-none menu-toggle-button'>
            {isOpen ? (
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div ref={menuRef} className='md:hidden flex flex-col items-center bg-black py-5'>
          <ul className='flex flex-col gap-5 text-2xl font-normal text-center text-white'>
            <li className='hover:text-orange-500 transition-colors duration-300'>
              <ScrollLink to="home" onClick={toggleMenu}>Home</ScrollLink>
            </li>
            <li className='hover:text-orange-500 transition-colors duration-300'>
              <ScrollLink to="projects" onClick={toggleMenu}>Projects</ScrollLink>
            </li>
            <li className='hover:text-orange-500 transition-colors duration-300'>
              <ScrollLink to="contact" onClick={toggleMenu}>Contact me</ScrollLink>
            </li>
          </ul>
          <a href="https://www.linkedin.com/in/nemanja-vukosavljevi%C4%87-a10261273/" className='mt-5' target="_blank" rel="noopener noreferrer">
            <button className='p-3 rounded-md text-xl bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors duration-300'>Linkedin</button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
