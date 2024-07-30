import React, { useState } from 'react';
import Question from './Question';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #357ABD;
  }
`;

const FormSheet = () => {
  const [formData, setFormData] = useState({
    community: '',
    projectTitle: '',
    projectContent: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Question
          question="Choose Your Community"
          type="radio"
          name="community"
          options={["Machine Learning / AI", "OS / Networking", "Computer Theory", "Signals & Systems", "Languages & Compiler"]}
          onChange={handleChange}
        />
        <Question
          question="Your Project Title"
          type="text"
          name="projectTitle"
          onChange={handleChange}
        />
        <Question
          question="Your Project Content"
          type="radio"
          name="projectContent"
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default FormSheet;
