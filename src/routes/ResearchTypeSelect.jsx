import React from 'react';
import './ResearchTypeSelect.css';

function ResearchTypeSelect() {
  const handleTypeSelect = (type) => {
    console.log(`Selected type: ${type}`);
    // Additional functionality can be added here, such as updating state or calling a parent component's function
  };

  return (
    <div className="research-type-select">
      <h1>Select Research Type</h1>
      <div className="card-container">
        <div className="card" onClick={() => handleTypeSelect('short')}>
          <img src="/assets/ShortResearch.png" alt="Short Research" />
          <h2>Short Research</h2>
        </div>
        <div className="card" onClick={() => handleTypeSelect('long')}>
          <img src="/assets/LongResearch.png" alt="Long Research" />
          <h2>Long Research</h2>
        </div>
      </div>
    </div>
  );
}

export default ResearchTypeSelect;
