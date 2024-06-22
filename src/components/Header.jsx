import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.img`
  height: 120px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 35px;
  color: #333;
`;

const Header = () => (
  <HeaderContainer>
    <Title>
      Build or find your future start up, research, project teams and graduate school advisor in EduHive!
    </Title>
  </HeaderContainer>
);

export default Header;
