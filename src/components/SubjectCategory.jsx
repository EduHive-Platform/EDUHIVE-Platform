import React from 'react';
import './SubjectCategory.css';

const SubjectCategory = ({ communityName, imageSrc, link }) => {
  return (
    <div className="subject-category">
      <a href={link} className="image-container">
        <img src={imageSrc} alt={communityName} className="subject-image" />
      </a>
      <div className="community-name">{communityName}</div>
    </div>
  );
};

export default SubjectCategory;
