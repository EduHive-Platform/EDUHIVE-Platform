// Square.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';
import './Square.css';

const Square = () => {
  const sidebarItems = [
    { label: 'Community', subLinks: [{ label: 'Computer Science', href: '/ComputerScience' }, { label: 'Electrical Engineering', href: '/subhome2' },
        { label: 'Math', href: '/subhome2' }, { label: 'Physics', href: '/subhome2' }] },
    { label: 'Profile',  subLinks: [{ label: 'Sub Profile 1', href: '/subprofile1' }, { label: 'Sub Profile 2', href: '/subprofile2' }] },
    { label: 'Settings', subLinks: [{ label: 'Sub Settings 1', href: '/subsettings1' }, { label: 'Sub Settings 2', href: '/subsettings2' }] },
    { label: 'Logout' },
  ];

  return (
    <div className="square-page">
      <Sidebar items={sidebarItems} />
      <Posts />
    </div>
  );
};

export default Square;
