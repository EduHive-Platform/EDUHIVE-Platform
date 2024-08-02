// src/Card.jsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #b0bec5;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  box-sizing: border-box; // Include padding and border in the element's width and height
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 20px;
  border-radius: 8px;
`;

const Preferences = styled.div`
  margin-bottom: 20px;
`;

const PreferenceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PreferenceList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 18px;
`;

const JoinUsContainer = styled.div`
  text-align: center;
`;

const JoinButton = styled.button`
  padding: 10px 20px;
  background-color: #78909c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #607d8b;
  }
`;

const RecommendBox = ({ title, content, image, preferences }) => {
  console.log('Rendering Card component');
  console.log('Props:', { title, content, image, preferences });

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ImageContainer>
        <Image src={image} alt="Profile" />
        <Preferences>
          <PreferenceTitle>We prefer:</PreferenceTitle>
          <PreferenceList>
            {preferences.map((pref, index) => (
              <li key={index}>{pref}</li>
            ))}
          </PreferenceList>
        </Preferences>
      </ImageContainer>
      <JoinUsContainer>
        <p>Brandon Jones wants you to</p>
        <JoinButton>Join us</JoinButton>
      </JoinUsContainer>
    </CardContainer>
  );
};

export default RecommendBox;
