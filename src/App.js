import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import TechnologiesStack from './Components/TechnologiesStack';
import ProjectsSection from './Components/ProjectsSection';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import Loader from './Components/Loader';

import useLenis from './Components/useLenis';




function App() {
  useLenis()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Match the animation duration

    

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="font min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar  />
          <HeroSection  />
          <TechnologiesStack />
          <ProjectsSection />
          <ContactMe />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
