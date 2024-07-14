import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSelect from "react-select";
import HeaderMain from '../components/HeaderMain';
import Sidebar from '../components/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OuterContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 20px;
`;
const MultiSelect = styled(ReactSelect)`
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
  width: calc(100%);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
const Textarea = styled.textarea`
  font-size: 16px;
  resize: none;
  padding: 10px;
  margin-bottom: 20px;
  width: calc(100%);
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
`; 
const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 35px;
  color: #333;
`;
const SubTitle = styled(Title)`
  margin-bottom: 15px;
  font-size: 20px
`;
const Button = styled.button`
  &:hover {
    background-color: grey
  }
  display: inline-block;
  width: 120px;
  margin-right: 10px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #116E6A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;

const SaveButton = styled(Button)`
  margin-left: 10px;
  margin-right: 0px
`




const sidebarItems = [
  { label: 'Community', subLinks: [{ label: 'Computer Science', href: '/ComputerScience' }, { label: 'Electrical Engineering', href: '/subhome2' },
      { label: 'Math', href: '/subhome2' }, { label: 'Physics', href: '/subhome2' }, { label: 'Data Science', href: '/subhome2' }, { label: 'Statistics', href: '/subhome2' }] },
  { label: 'Popular ',  subLinks: [{ label: 'ML/AI', href: '/subprofile1' }, { label: 'OS/Computer Network', href: '/subprofile2' },
      { label: 'Computer Security', href: '/subprofile2' }, { label: 'DBMS', href: '/subprofile2' }, { label: "CS Theory", href: '/subprofile2' },
      { label: 'Signals & Systems', href: '/subprofile2' }, { label: 'Computer Architecture', href: '/subprofile2', }] },
  { label: 'News', subLinks: [{ label: 'Euro Cup Spain VS France', href: '/subsettings1' }, { label: '2024 Nobel Prize', href: '/subsettings2' },
      { label: 'New LLM model developed by THU Team' },] },
  { label: 'Daily Words', subLinks: [{ label: "Controller", href: '/subsettings1' }, { label: 'Route', href: '/subsettings2' },
      { label: 'Pipeline' }]},
  { label: 'Recommendations' },
  { label: 'Connection' },
  { label: 'Resources' },
  { label: 'Policies' },
  { label: 'Contacts' },
  { label: 'EduHive Team' },
  { label: 'Help' },
  { label: 'Privacy' },
  { label: 'Logout' },
  { label: 'Oppertunities' },
  { label: 'Topics' },
];

const leftLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

const rightLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
];

const StudentPost = () => {
    const navigate = useNavigate()
    const handlePost = () => {
        // To Do: need to connect backend interface for receiving student post
        alert('Receive your post sucessfully');
        navigate('/Square')
    }

    const handleSave = () => {
        // To Do: need to connect backend interface for saving student post
        alert('Save your post sucessfully');
        navigate('/Square')
    }
    const options = [
      {value:0, label:"Humanity" },
      {value:1, label:"Engineering"},
      {value:2, label:"Law"},
      {value:3, label:"Math"},
      {value:4, label:"Business"},
      {value:5, label:"Social Science"},
      {value:6, label:"Natural Science" },
      {value:7, label:"Education"},
      {value:8, label:"Art"},
      {value:9, label:"Med"},
      {value:10, label:"History"},
      {value:11, label:"Sports" }
    ]
    return (
        <OuterContainer>
            <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
            <Container>
            <Sidebar items={sidebarItems} />
                <FormContainer>
                <Title>Create your own project</Title>
                <SubTitle>Project Title</SubTitle>
                <Input type='text' placeholder="Title"></Input>
                <SubTitle>Community</SubTitle>
                <MultiSelect isMulti options={options}></MultiSelect>
                <SubTitle>Project Description</SubTitle>
                <Textarea type='text' placeholder='description'></Textarea>
                <Button onClick={handlePost}>Post</Button>
                <SaveButton onClick={handleSave}>Save draft</SaveButton>
                </FormContainer>
            </Container>
            
        </OuterContainer>
    )
}

export default StudentPost