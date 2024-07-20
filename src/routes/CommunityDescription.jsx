import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/styled_components';
import communities from '../data/Communities';
import './CommunityDescription.css';  // Assuming styles are here

const CommunityDescription = () => {
  const { communityName } = useParams();
  const navigate = useNavigate();
  const community = communities.find(c => c.name.toLowerCase() === communityName.toLowerCase());

  if (!community) {
    return <div>Community not found.</div>;
  }

  const handleBack = () => {
    navigate(-1);  // Go back to the previous page
  };

  const handleLogin = () => {
    navigate('/subSquare');
  };

  return (
    <div className="community-page">
      <div className="image-container2">
        <img src={community.imageSrc} alt={community.name} />
      </div>
      <div className="text-container">
        <button className="close-button" onClick={handleBack}>×</button>
        <h1>{community.name}</h1>
        <p>{community.description}</p>
        <div className="func-buttons">
          <Button onClick={handleLogin}>To the SubSquare</Button>
        </div>
        
      </div>
    </div>
  );
};

export default CommunityDescription;