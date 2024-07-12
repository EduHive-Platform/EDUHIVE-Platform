// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubLinks = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a onClick={() => toggleSubLinks(index)} className="nav-link">
              {item.label}
            </a>
            {item.subLinks && activeIndex === index && (
              <ul className="sub-links">
                {item.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a href={subLink.href} className="nav-link">
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
