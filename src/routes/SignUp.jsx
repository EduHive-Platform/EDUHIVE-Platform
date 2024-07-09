/* 
  Route: /SignUp
  Created: 2024-05-28
  Last Modified: 2024-06-22
  Author: Zihan Zhao
*/
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
`;

const FormContainer = styled.div`
  background: white;
  padding: 50px;
  border-radius: 30px;
  width: 700px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 24px;
  color: #116E6A;
`;

const Input = styled.input`
  width: calc(100% - 20px); // Ensures input fields have proper width with padding
  padding: 10px;
  margin-bottom: 50px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  &:hover {
    background-color: grey
  }
  width: 100%;
  padding: 10px;
  background-color: #116E6A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;


const SignUp = () => {
    const navigate = useNavigate(); // pass name, dateOfBirth, institution with the state containing the form data
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [institution, setInstitution] = useState('');
  
    const handleContinue = () => {
      navigate('/email-verification', { state: { name, dateOfBirth, institution } });
    };
  
    return (
      <Container>
        <FormContainer>
          <Logo src="/assets/Logo.png" alt="EduHive Logo" /> {/* Ensure the correct path to your image */}
          <Title>Start your journey by inputting basic information</Title>
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          <Input type="text" placeholder="Institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
          <Button onClick={handleContinue}>Continue</Button>
        </FormContainer>
      </Container>
    );
  };
  
  export default SignUp;
