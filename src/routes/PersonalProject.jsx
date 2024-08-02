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

const OuterContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContainerP = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const SidebarStyled = styled(Sidebar)`
  width: 20%;
  min-width: 200px;
  position: fixed;
  height: 100%;
  background-color: #f5f5f5;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  flex: 1;
  margin-left: 20%;
  box-sizing: border-box;
`;

const RecommendBoxStyled = styled(RecommendBox)`
  flex: 0 1 calc(33.3% - 20px);
  margin: 10px; // Top and Bottom margins are set to 10px
  margin-bottom: 30px; // Add extra bottom margin for more spacing between rows
  max-width: calc(33.3% - 20px);
  box-sizing: border-box;
`;

const PersonalProject = () => {
  return (
    <OuterContainer>
      <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
      <ContainerP>
        <SidebarStyled items={sidebarItems} />
        <Form>
          <RecommendBoxStyled
            title="FICA"
            content="Join us!"
            image="/assets/PictureMain.png"
            preferences={["software", "apple", "cola"]}
          />
          <RecommendBoxStyled
            title="FICA"
            content="Join us!"
            image="/assets/PictureMain.png"
            preferences={["software", "apple", "cola"]}
          />
          <RecommendBoxStyled
            title="FICA"
            content="Join us!"
            image="/assets/PictureMain.png"
            preferences={["software", "apple", "cola"]}
          />
          <RecommendBoxStyled
            title="FICA"
            content="Join us!"
            image="/assets/PictureMain.png"
            preferences={["software", "apple", "cola"]}
          />
          <RecommendBoxStyled
            title="FICA"
            content="Join us!"
            image="/assets/PictureMain.png"
            preferences={["software", "apple", "cola"]}
          />
          <RecommendBoxStyled
            title="FICA"
            content="Join us!"
            image="/assets/PictureMain.png"
            preferences={["software", "apple", "cola"]}
          />
        </Form>
      </ContainerP>
    </OuterContainer>
  );
};

export default PersonalProject;