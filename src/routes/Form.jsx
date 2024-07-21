import React from 'react';
import Question from './Question';

const Form = () => {
  return (
    <div>
      <Question question="Choose Your Community" type="radio" options={["Machine Learning / AI", "OS / Networking", "Computer Theory", "Signals & Systems", "Languages & Compiler"]} />
      <Question question="Your Project Title" type="text" />
      <Question question="Your Project Content" type="radio" options={["Option 1", "Option 2", "Option 3"]} />
    </div>
  );
};
export default Form;
