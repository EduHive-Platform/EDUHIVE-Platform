import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  font-size: 12px;
  color: #777;
  margin-top: 20px;
  padding: 10px;
  border-top: 1px solid #ddd;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    By clicking Continue to join or sign in, you agree to EduHive's User Agreement, Privacy Policy, and Cookie Policy.
  </FooterContainer>
);

export default Footer;
