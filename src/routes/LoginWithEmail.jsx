/* 
  Route: /mainPage
  Created: 2024-06-24
  Last Modified: 2024-07-05
  Author: Zihan Zhao
*/
import React, { useState } from 'react'; 
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';

const Logo = styled.img`
  height: 60px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: -10px; /* Add padding to account for the logo height */
`;

const Title = styled.h1`
  font-size: 35px;
  color: #333;
  margin-bottom: 20px;
`;

const OuterContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 20px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 600px;
  text-align: left;
  margin-right: 20px; /* Add some space between form and image */
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
  background-color: #116E6A;
  color: white;
`;

const SmallButton = styled(Button)`
  margin-bottom: 50px;
  width: auto;
  padding: 10px 20px;
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-top: 10px;
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Image = styled.img`
  margin-top: 80px;
  height: 400px; 
`;


const LoginEmail = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [cookies, setCookie] = useCookies(['email','access_token'])
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const userData = {
          email,
          password
        };
        try {
          const response = await axios.post('http://localhost:3000/login', userData);
          console.log("the reponse is" + response.data);
          /* Redirect or update UI based on the response 
             TODO
          */
          const token = response.token;
          setCookie("email", email, {maxAge: 3600})
          setCookie('access_token', token, {maxAge: 3600})
          navigate('/square');
        } catch (error) {
          console.error('There was an error Login!', error);
        }
      };
    
    return (
        <OuterContainer>
          <Logo src="/assets/Logo.png" alt="EduHive Logo" />
          <Container>
            <FormContainer>
              <Title>Login</Title>
              <Row>
                <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Row>
              <Row>
                <Input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <SmallButton onClick={handleLogin}>Login</SmallButton>
              </Row>
            </FormContainer>
            <Image src="/assets/Hive.png" alt="Verification" />
          </Container>
        </OuterContainer>
      );
};

export default LoginEmail;