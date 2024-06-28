import React from 'react';
import './PictureMain.css';

const PictureMain = () => {
  return (
    <section className="picture-main">
      <h2>What can you get in the <span className="highlight">EduHive</span>?</h2>
      <div className="picture-container">
        <img src="/assets/PictureMain.png" alt="EduHive Benefits" />
      </div>
    </section>
  );
};

export default PictureMain;
