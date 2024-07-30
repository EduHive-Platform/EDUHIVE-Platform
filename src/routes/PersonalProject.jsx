import React from 'react';
import styled from 'styled-components';
import RecommendBox from '../components/RecommendBox';
import Sidebar from '../components/Sidebar';
import HeaderMain from '../components/HeaderMain'


const Form = styled.form`
  margin-left: 600px;
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

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

const sidebarItems = [
    { label: 'Build a New Project', href: '/postTypeSelect' },
    { label: 'Archieved Projects' },
    { label: 'Joined Projects' },
    { label: 'Pending Projects' },
    { label: 'Saved Projects' },
    { label: 'Posted Projects' },
  ];

const leftLinks = [
{ label: 'Profile', href: '/profile' },
{ label: 'Post', href: '/post' },
{ label: 'Mailbox', href: '/mailbox' },
{ label: 'Plaza', href: '/plaza' },
];

const rightLinks = [
{ label: 'LinkedIn', href: 'https://www.linkedin.com' },
{ label: 'Instagram', href: 'https://www.instagram.com' },
];
  

const PersonalProject=()=>{
    return(
    <OuterContainer>
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks}/>
        <Container>
        <Sidebar items={sidebarItems} /> 
            <Form>
                <RecommendBox title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software","apple","cola"]}/>
                <RecommendBox title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software","apple","cola"]}/>
                <RecommendBox title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software","apple","cola"]}/>
                <RecommendBox title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software","apple","cola"]}/>
                <RecommendBox title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software","apple","cola"]}/>
                <RecommendBox title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software","apple","cola"]}/>
            </Form>
        </Container>
    </OuterContainer>
    );
};

export default PersonalProject;