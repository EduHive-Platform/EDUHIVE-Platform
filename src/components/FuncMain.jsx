import React from 'react';
import './FuncMain.css';

const FuncMain = () => {
  return (
    <section className="func-main">
      <div className="func-content">
        <h1>Start your Startup, Research, and Graduate School in ...</h1>
        <div className="func-buttons">
          <button className="func-button">Login the EduHive</button>
          <button className="func-button">Signup the EduHive</button>
        </div>
      </div>
      <div className="func-image">
        <img src="/assets/Hive.png" alt="EduHive" />
      </div>
    </section>
  );
};

export default FuncMain;
