import React, { useState } from 'react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    { icon: 'ai-home-alt1', label: 'Home' },
    { icon: 'ai-dashboard', label: 'Dashboard' },
    { icon: 'ai-gear', label: 'Settings', subMenu: ['Display', 'Appearance', 'Preferences'] },
    { icon: 'ai-folder-add', label: 'Create', subMenu: ['Article', 'Document', 'Video', 'Presentation'] },
    { icon: 'ai-person', label: 'Profile', subMenu: ['Avatar', 'Theme'] },
    { icon: 'ai-bell', label: 'Notifications' },
    { icon: 'ai-cart', label: 'Products' },
    { icon: 'ai-lock-on', label: 'Account' },
  ];

  return (
    <aside className="fixed top-6 left-6 bottom-6 flex flex-col gap-2 w-64 rounded-lg p-4 border border-white/20 bg-black/40 backdrop-blur-lg transition-width duration-150">
      <header className="flex items-center h-18 pb-4 border-b border-white/20">
        <button className="w-13">
          <i className="ai-three-line-horizontal"></i>
        </button>
        <img src="logo.svg" alt="Logo" className="h-6" />
      </header>
      <ul className="flex-grow">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              className={`flex items-center gap-4 h-12 w-full rounded-md px-4 text-white/95 ${activeIndex === index ? 'bg-black/30' : 'hover:bg-black/10'}`}
              onClick={() => handleItemClick(index)}
            >
              <i className={item.icon}></i>
              <p className="flex-1">{item.label}</p>
              {item.subMenu && <i className={`ai-chevron-down-small ${activeIndex === index ? 'rotate-180' : ''}`}></i>}
            </button>
            {item.subMenu && (
              <div className={`sub-menu overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="pl-8">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <button type="button" className="block pl-12 py-1 text-left text-white/80">{subItem}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
