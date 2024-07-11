import React from 'react';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import logo from '../assets/nv-logo.png';

import ScrollLink from './ScrollLink';

const Footer = () => {
  return (
    <footer className="bg-black group">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Column */}
          <div className="mb-6 md:mb-0 flex md:items-center cursor-pointer">
            <ScrollLink to="home">
              <img src={logo} className="h-[6rem] w-[10rem] my-5 md:my-0 me-3" alt="Nemanja Vukosavljevic Logo" />
            </ScrollLink>
          </div>
          {/* Navigation Links Column */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Resources</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <ScrollLink to="home" className="hover:text-orange-500 transition-colors duration-150 cursor-pointer">Home</ScrollLink>
                </li>
                <li className="mb-4">
                  <ScrollLink to="projects" className="hover:text-orange-500 transition-colors duration-150 cursor-pointer">Projects</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" className="hover:text-orange-500 transition-colors duration-150 cursor-pointer">Contact me</ScrollLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.linkedin.com/in/nemanja-vukosavljevi%C4%87-a10261273/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors duration-150">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/NemanjaVukosavljevic" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors duration-150">GitHub</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-orange-500 transition-colors duration-150">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors duration-150">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 group-hover:text-orange-500 transition-colors duration-300">© 2024 Nemanja Vukosavljevic. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/nemanja-vukosavljevi%C4%87-a10261273/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer">
              <img src={linkedinLogo} alt="LinkedIn" className="w-4 h-4 md:w-10 md:h-10" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/NemanjaVukosavljevic" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 cursor-pointer">
              <img src={githubLogo} alt="GitHub" className="w-4 h-4 md:w-10 md:h-10" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
