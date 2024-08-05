import React from 'react';
import styled from 'styled-components';
import HeaderMain from '../components/HeaderMain'



const ProfileContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 100%;
`;

const FormContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 45%;
`;

const TextAreaContainer = styled.div`
  width: 35%;
  margin-left: 5%;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left:20px;
  &:hover {
    background-color: grey
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;


const LogoImage = styled.img`
  max-height: 50px;
`;

const leftLinks = [
  { label: 'Profile', href: '/solutions' },
  { label: 'Post', href: '/postTypeSelect' },
  { label: 'Plaza', href: '/square' },
  { label: 'Dashboard', href: '/dashboard' },
];

const rightLinks = [
{ label: 'LinkedIn', href: 'https://www.linkedin.com' },
{ label: 'Instagram', href: 'https://www.instagram.com' },
];

const Profile = () => {
  return (
    <>
      <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks}/>
      <ProfileContainer>
        <FormContainer>
          <Form>
            <InputContainer>
              <label>Full Name</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Role in Institution</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Undergraduate School</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Graduate School I</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Degree</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Graduate School II</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Year</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Major I</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Major II</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Research Interest (up to three)</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>Startup or Research or Both</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>If you are a Professor</label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <label>You tend to post or join</label>
              <Input type="text" />
            </InputContainer>
          </Form>
          <TextAreaContainer>
            <label>Why you come here?</label>
            <TextArea />
            <ButtonContainer>
              <LogoImage src="./assets/LogoFormal.png" alt="EduHive Logo" />
              <Button>Update your profile</Button>
            </ButtonContainer>
          </TextAreaContainer>
        </FormContainer>
      </ProfileContainer>
    </>
  );
};

export default Profile;
