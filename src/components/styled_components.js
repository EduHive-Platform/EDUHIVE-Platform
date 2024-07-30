import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    &:hover {
    background-color: grey
    }
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #116E6A;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export const CardContainer = styled.div`
  border: 1px solid #b0bec5;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
`;

export const FormContainer = styled.div`
  background: white;
  padding: 50px;
  border-radius: 30px;
  width: 700px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #333;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Image = styled.img`
  margin-top: 80px;
  height: 400px; 
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
`;