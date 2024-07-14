import React from 'react';
import './FuncMain.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FuncMain = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/loginWithEmail');
  };
  const handleSignUp = () => {
    navigate('/login');
  };

  const Button = styled.button`
    &:hover {
    background-color: grey
    }
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #116E6A;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  `
  
  return (
    <section className="func-main">
      <div className="func-content">
        <h1>Start your Startup, Research, and Graduate School in ...</h1>
        <div className="func-buttons">
          <button className="func-button" onClick={handleLogin}>Login the EduHive</button>
          <button className="func-button" onClick={handleSignUp}>Signup the EduHive</button>
          <Button onClick={handleLogin}>Login the EduHive</Button>
          <Button onClick={handleSignUp}>Signup the EduHive</Button>
        </div>
      </div>
      <div className="func-image">
        <img src="/assets/LogoFormal.png" alt="EduHive" />
      </div>
    </section>
  );
};

export default FuncMain;
