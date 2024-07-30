import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 50px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 50px;
`;

const TitleImage = styled.img`
  max-height: 50px;
`;

const PersonalHeader=()=>{
    return(
        <Header>
            <NavLinks>
                <NavLink href="#">Profile</NavLink>
                <NavLink href="#">Post</NavLink>
                <NavLink href="#">Mailbox</NavLink>
                <NavLink href="#">Plaza</NavLink>
            </NavLinks>
        <TitleImage src="/assets/Logo.png" alt="EduHive Logo" />
        <SocialLinks>
          <NavLink href="#">LinkedIn</NavLink>
          <NavLink href="#">Instagram</NavLink>
        </SocialLinks>
      </Header>
    );
};

export default PersonalHeader;