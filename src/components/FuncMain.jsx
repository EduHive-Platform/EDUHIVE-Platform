import React from 'react';
import './FuncMain.css';
import { useNavigate } from 'react-router-dom';

const FuncMain = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/loginWithEmail');
  };

  return (
    <section className="func-main">
      <div className="func-content">
        <h1>Start your Startup, Research, and Graduate School in ...</h1>
        <div className="func-buttons">
          <button className="func-button" onClick={handleLogin}>Login the EduHive</button>
          <button className="func-button" onClick={handleLogin}>Signup the EduHive</button>
        </div>
      </div>
      <div className="func-image">
        <img src="/assets/LogoFormal.png" alt="EduHive" />
      </div>
    </section>
  );
};

export default FuncMain;
