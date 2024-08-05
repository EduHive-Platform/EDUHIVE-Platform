import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url('https://path-to-your-image.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${props => (props.joined ? 'gray' : '#0079d3')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${props => (props.joined ? 'darkgray' : '#005a9c')};
  }
`;

const Header = ({ communityTitle, communityAvatar, communityImage, joined }) => {
  return (
    <HeaderContainer style={{ backgroundImage: `url(${communityImage})` }}>
      <Overlay />
      <Content>
        <Avatar src={communityAvatar} alt="Community Avatar" />
        <Title>{communityTitle}</Title>
      </Content>
      <ButtonContainer>
        <Button>Create a post</Button>
        <Button joined={joined}>{joined ? 'Joined' : 'Join'}</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
