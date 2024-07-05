/* 
  Route: /mainPage
  Created: 2024-06-24
  Last Modified: 2024-06-24
  Author: Zihan Zhao
*/
import React, { useState } from 'react'; 
import styled from 'styled-components';
import axios from 'axios';

const Logo = styled.img`
  height: 120px;
  margin-bottom: 50px;
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
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Image = styled.img`
  margin-top: 80px;
  height: 400px; /* Adjust as needed */
`;


const LoginEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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
          alert("Login successfully!");
        } catch (error) {
          console.error('There was an error Login!', error);
        }
      };
    
    return (
        <OuterContainer>
          <Logo src="/assets/Logo.png" alt="EduHive Logo" />
          <Container>
            <FormContainer>
              <Title>Login by typing your email and password</Title>
              <Row>
                <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Row>
              <Row>
                <Input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <SmallButton onClick={handleLogin}>Login</SmallButton>
              </Row>
            </FormContainer>
            <Image src="/assets/Hive.png" alt="Verification" />
          </Container>
        </OuterContainer>
      );
};

export default LoginEmail;