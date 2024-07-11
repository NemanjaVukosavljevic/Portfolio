import React, { useState } from 'react';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Updated import for Heroicons v2

const ContactMe = () => {
  const [formStatus, setFormStatus] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1bae1337-f55d-4b0c-aefc-d5f3cd8e1560");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFormStatus('0');
      setShowNotification(true);
      event.target.reset(); // Clear the form fields

      setTimeout(() => {
        setShowNotification(false);
        setFormStatus('');
      }, 3000); // Hide notification after 3 seconds
    } else {
      setFormStatus('Error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#28282B] pt-[8rem] md:pt-[9rem] text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Contact Form Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Contact Form */}
            <form className="w-full md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg" onSubmit={onSubmit}>
              <div className='mb-6'>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500" 
                  autoComplete="name" 
                  style={{ backgroundColor: 'inherit' }}
                  required
                />
              </div>
              <div className='mb-6'>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500" 
                  autoComplete="email" 
                  style={{ backgroundColor: 'inherit' }}
                  required
                />
              </div>
              <div className='mb-6'>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  name="message" 
                  type="text" 
                  rows="6" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500" 
                  autoComplete="off" 
                  style={{ backgroundColor: 'inherit' }}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${showNotification ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'}`}>
                {showNotification ? (
                  <div className="flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 mr-2" />
                    <span>Email sent successfully!</span>
                  </div>
                ) : 'Submit Form'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-10">Check out my socials</h2>
          <p className="text-lg text-center mb-12">Connect with me on LinkedIn and GitHub</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/nemanja-vukosavljevi%C4%87-a10261273/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
              <img src={linkedinLogo} alt="LinkedIn" className="w-16 h-16 md:w-20 md:h-20" />
            </a>
            {/* GitHub Link */}
            <a href="https://github.com/NemanjaVukosavljevic" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
              <img src={githubLogo} alt="GitHub" className="w-16 h-16 md:w-20 md:h-20" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
