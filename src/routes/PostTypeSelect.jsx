import React from 'react';
import './PostTypeSelect.css';

function PostTypeSelect() {
  const handleTypeSelect = (type) => {
    console.log(`Selected type: ${type}`);
    // You can add more functionality here, such as updating state or calling a parent component's function
  };

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