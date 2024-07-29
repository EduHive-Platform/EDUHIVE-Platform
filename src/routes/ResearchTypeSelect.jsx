import React from 'react';
import './ResearchTypeSelect.css';
import { useNavigate } from 'react-router-dom';

function ResearchTypeSelect() {
  const navigate = useNavigate();
  const handleTypeSelect = (type) => {
    console.log(`Selected type: ${type}`);
    // Additional functionality can be added here, such as updating state or calling a parent component's function
    if (type === "short") {
      navigate('/postShortResearch')
    } else {
      navigate('/postShortResearch')
    }
  };

  return (
    <div className="research-type-select">
      <h1>Select Research Type</h1>
      <div className="card2-container">
        <div className="card2" onClick={() => handleTypeSelect('short')}>
          <img src="/assets/LongResearch.png" alt="Short Research" />
          <h2>Short Research</h2>
        </div>
        <div className="card2" onClick={() => handleTypeSelect('long')}>
          <img src="/assets/ShortResearch.png" alt="Long Research" />
          <h2>Long Research</h2>
        </div>
      </div>
    </div>
  );
}

export default ResearchTypeSelect;
