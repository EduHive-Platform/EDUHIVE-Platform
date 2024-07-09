import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OuterContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: -10px; /* Add padding to account for the logo height */
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 600px;
  text-align: left;
  margin-right: 20px; /* Add some space between form and image */
`;
const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
const Textarea = styled.textarea`
  font-size: 16px;
  resize: none;
  padding: 10px;
  margin-bottom: 20px;
  width: calc(100% - 20px);
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
`; 
const Title = styled.h2`
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 24px;
  color: #333;
`;
const Button = styled.button`
  &:hover {
    background-color: grey
  }
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  background-color: #116E6A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;
const Image = styled.img`
  margin-top: 80px;
  height: 400px; /* Adjust as needed */
`;
const StudentPost = () => {
    const navigate = useNavigate()
    const handlePost = () => {
        // To Do: need to connect backend interface for receiving student post
        alert('Receive your post sucessfully');
        navigate('/dashboard')
    }

    const handleSave = () => {
        // To Do: need to connect backend interface for saving student post
        alert('Save your post sucessfully');
        navigate('/dashboard')
    }
    return (
        <OuterContainer>
            <Logo src="/assets/Logo.png" alt="EduHive Logo" />{/* Ensure the correct path to your image */}
            <Container>
                <FormContainer>
                <Title>Create Post</Title>
                <Input type='text' placeholder="subject"></Input>

                {/*To Do: Tags need to be designed and replaced.*/}
                <Input type='text' placeholder='Tags'></Input>

                <Textarea type='text' placeholder='description'></Textarea>
                <Button onClick={handlePost}>Post</Button>
                <Button onClick={handleSave}>Save draft</Button>
                </FormContainer>
                <Image src="/assets/Hive.png" alt="Verification" />
            </Container>
            
        </OuterContainer>
    )
}

export default StudentPost