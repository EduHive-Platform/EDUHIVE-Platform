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
  padding-top: -10px;
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
  margin-right: 20px;
`;

const Title = styled.h2`
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  &:hover {
    background-color: grey;
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

const SmallButton = styled(Button)`
  margin-bottom: 50px;
  width: auto;
  padding: 10px 20px;
  margin-left: 20px;
`;

const Image = styled.img`
  margin-top: 80px;
  height: 400px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
  font-size: 14px;
`;

const BackButton = styled(Button)`
  background-color: grey;
  margin-top: 20px;
`;

const EmailVerification = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, dateOfBirth, institution } = location.state;
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

    const handleSendCode = async () => {
        setError(''); // Reset error message
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedCode(code);
        try {
            const response = await axios.post('http://localhost:3000/send-verification-email', { email, code });
            console.log(response.data);
            alert("Verification email sent successfully!");
        } catch (error) {
            console.error('There was an error sending the verification email!', error);
            setError("There was an error sending the verification email.");
        }
    };

    const handleConfirm = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        if (verificationCode !== generatedCode) {
            setError("Invalid verification code.");
            return;
        }
        const userData = {
            name,
            dateOfBirth,
            institution,
            email,
            created_at: new Date(),
            password
        };
        try {
            const response = await axios.post('http://localhost:3000/save-user', userData);
            console.log(response.data);
            alert("User saved successfully!");
        } catch (error) {
            console.error('There was an error saving the user!', error);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError("There was an error saving the user.");
            }
        }
    };

    const handleBack = () => {
        navigate('/signup');
    };

    return (
        <OuterContainer>
            <Logo src="/assets/Logo.png" alt="EduHive Logo" />
            <Container>
                <FormContainer>
                    <Title>Set your new password, input your email, click “Verify”, Check your email and get verification code</Title>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Row>
                        <Input type="password" placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Row>
                    <Row>
                        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <SmallButton onClick={handleSendCode}>Verify</SmallButton>
                    </Row>
                    <Row>
                        <Input type="text" placeholder="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                        <SmallButton onClick={handleConfirm}>SignUp</SmallButton>
                    </Row>
                    <BackButton onClick={handleBack}>Back</BackButton>
                </FormContainer>
                <Image src="/assets/Hive.png" alt="Verification" />
            </Container>
        </OuterContainer>
    );
};

export default EmailVerification;
