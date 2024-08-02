import React from 'react';
import styled from 'styled-components';
import RecommendBox from '../components/RecommendBox';
import Sidebar from '../components/Sidebar';
import HeaderMain from '../components/HeaderMain';

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

const ContainerP = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start; // Align items at the top
`;

const Form = styled.div` // Use a <div> for layout control
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // Space between items
  padding: 20px;
  flex: 1; // Allow Form to take available space
  margin-left: 20%; // Leave space for the sidebar
`;

const RecommendBoxStyled = styled(RecommendBox)`
  flex: 0 1 calc(33.3% - 20px); // Ensure three cards per row
  margin: 10px;
  max-width: calc(33.3% - 20px); // Set max width to control layout
  box-sizing: border-box; // Include padding and border in the element's width and height
`;

const SidebarStyled = styled(Sidebar)`
  width: 20%;
  min-width: 200px;
  position: fixed; // Make it fixed so it doesn't affect layout
  height: 100%; // Take full height
`;

const OuterContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PersonalProject = () => {
  return (
    <OuterContainer>
      <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
      <ContainerP>
        <SidebarStyled items={sidebarItems} />
        <Form>
          <RecommendBoxStyled title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software", "apple", "cola"]} />
          <RecommendBoxStyled title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software", "apple", "cola"]} />
          <RecommendBoxStyled title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software", "apple", "cola"]} />
          <RecommendBoxStyled title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software", "apple", "cola"]} />
          <RecommendBoxStyled title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software", "apple", "cola"]} />
          <RecommendBoxStyled title={"FICA"} content={"Join us!"} image={"/assets/PictureMain.png"} preferences={["software", "apple", "cola"]} />
        </Form>
      </ContainerP>
    </OuterContainer>
  );
};

export default PersonalProject;