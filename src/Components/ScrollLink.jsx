import React, { useRef, useEffect } from 'react';

const ScrollLink = ({ to, children, onClick }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    targetRef.current = document.getElementById(to);
  }, [to]);

  const handleScroll = (event) => {
    event.preventDefault();
    if (targetRef.current) {
      const offsetTop = targetRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    if (onClick) onClick();
  };

  return (
    <a className='hover:text-orange-500 transition-colors duration-150 cursor-pointer' href={`#${to}`} onClick={handleScroll}>
      {children}
    </a>
  );
};

export default ScrollLink;
