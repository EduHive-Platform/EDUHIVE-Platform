import React from 'react';
import './PostTypeSelect.css';
import { useNavigate } from 'react-router-dom';

function PostTypeSelect() {
  const navigate = useNavigate();
  const handleTypeSelect = (type) => {
    console.log(`Selected type: ${type}`);
    // You can add more functionality here, such as updating state or calling a parent component's function
    if (type === "startup") {
      navigate('/postStartup')
    } else {
      navigate('/postShortResearch')
    }
  };

  const leftLinks = [
    { label: 'Profile', href: '/solutions' },
    { label: 'Post', href: '/about' },
    { label: 'Plaza', href: '/insights' },
    { label: 'Dashboard', href: '/contact' },
  ];

  const rightLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ];

  return (
    <div className="post-type-select">
      <h1>Select Post Type</h1>
      <div className="card-container">
        <div className="card" onClick={() => handleTypeSelect('startup')}>
          <img src="/assets/Business.png" alt="StartUp" />
          <h2>StartUp</h2>
        </div>
        <div className="card" onClick={() => handleTypeSelect('research')}>
          <img src="/assets/Humanity.png" alt="Research" />
          <h2>Research</h2>
        </div>
      </div>
    </div>
  );
}

export default PostTypeSelect;