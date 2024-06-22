/* 
  Route: /
  Created: 2024-06-22
  Last Modified: 2024-06-22
  Author: Zihan Zhao
*/
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import LoginButtons from '../components/LoginButtons';
import Footer from '../components/Footer';

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
`;

const OuterContainer = styled.div`
  position: relative;
  width: 100%;  // Ensures it spans the full width
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row; /* Align items horizontally */
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%; /* Adjust as needed */
`;

const ImageContainer = styled.div`
  width: 50%; /* Adjust as needed */
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Login = () => {
    return (
      <LoginContainer>
        <OuterContainer>
          <Logo src="/assets/Logo.png" alt="EduHive Logo" />
          <ContentContainer>
            <Header />
            <LoginButtons />
            <Footer />
          </ContentContainer>
          <ImageContainer>
            <Image src="/assets/Hive.png" alt="EduHive" />
          </ImageContainer>
        </OuterContainer>
      </LoginContainer>
    );
  };

export default Login;
