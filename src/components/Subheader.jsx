import React from 'react';
import styled from 'styled-components';
import { FaHome, FaEnvelope } from 'react-icons/fa'; // Using react-icons for home and mailbox icons

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4A148C; // Use the purple color from your image
  padding: 10px 20px;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 0 15px;
  font-size: 18px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8E24AA; // Placeholder color for the avatar
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

const NotificationBadge = styled.div`
  background-color: red;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  margin-left: 5px;
  position: relative;
  top: -10px;
  right: 10px;
`;

// Some more features to be added in the future.
const SubHeader = ({ logoText, title, links, userAvatar, notifications }) => {
  return (
    <Header>
      <Logo>{logoText}</Logo>
      <Title>{title}</Title>
      <NavLinks>
        {links.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.icon} {link.text}
          </NavLink>
        ))}
        <UserProfile>
          {notifications > 0 && <NotificationBadge>{notifications}</NotificationBadge>}
          <Avatar src={userAvatar} alt="User Avatar" />
        </UserProfile>
      </NavLinks>
    </Header>
  );
};

export default SubHeader;
