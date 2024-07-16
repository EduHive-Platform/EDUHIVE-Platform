import React from 'react';
import styled from 'styled-components';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate} from 'react-router-dom';


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Button = styled.button`
  &:hover {
    background-color: grey
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 10px;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
`;

const SignUpLink = styled(Link)`
  margin-top: 10px;
  font-size: 16px;
  color: #0073b1;
  cursor: pointer;
  text-decoration: underline;
`;

const LoginButtons = () => {
  const navigate = useNavigate();
  return (
  <ButtonContainer>
    <Button>
      <FaGoogle style={{ marginRight: '10px' }} />
      Continue with Google
    </Button>
    <Button onClick={() =>{navigate('/loginWithEmail')}}>
      <FaEnvelope style={{ marginRight: '10px' }} />
      Sign in with email
    </Button>
    <SignUpLink to="/signup">New to EduHive? Join Here</SignUpLink>
  </ButtonContainer>
);}

export default LoginButtons;