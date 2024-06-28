import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/solutions">Solutions</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/insights">Insights</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
        <div className="nav-logo">
          <a href="/main">EduHive</a>
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="https://linkedin.com">LinkedIn</a></li>
          <li className="nav-item"><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMain;
