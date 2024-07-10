// HeaderMain.jsx
import React from 'react';
import './HeaderMain.css';

const HeaderMain = ({ leftLinks, rightLinks }) => {
  return (
    <header className="header-main">
      <div className="left-links">
        {leftLinks.map((link, index) => (
          <a key={index} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
      <div className="logo">
        <span className="logo-edu">Edu</span><span className="logo-hive">Hive</span>
      </div>
      <div className="right-links">
        {rightLinks.map((link, index) => (
          <a key={index} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default HeaderMain;
