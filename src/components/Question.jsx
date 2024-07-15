import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`;

const RadioButton = styled.input`
  margin-right: 8px;
`;

const Question = ({ question, type, options, name, onChange }) => {
  return (
    <QuestionContainer>
      <Label>{question}</Label>
      {type === 'text' && <Input type="text" name={name} onChange={onChange} />}
      {type === 'radio' && options.map(option => (
        <div key={option}>
          <RadioButton type="radio" name={name} value={option} onChange={onChange} />
          {option}
        </div>
      ))}
    </QuestionContainer>
  );
};

export default Question;
