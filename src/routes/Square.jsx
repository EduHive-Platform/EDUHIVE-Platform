// Square.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';
import './Square.css';
import SubjectCategory from '../components/SubjectCategory';

const Square = () => {
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

  return (
    <div className="square-container">
      <Sidebar items={sidebarItems} />
      <div className="subject-categories">
        <SubjectCategory communityName="Humanity" imageSrc="/assets/Humanity.png" link="/humanity" />
        <SubjectCategory communityName="Engineering" imageSrc="/assets/Engineering.png" link="/humanity"/>
        <SubjectCategory communityName="Law" imageSrc="/assets/Law.png" link="/humanity"/>
        <SubjectCategory communityName="Math" imageSrc="/assets/Math.png" link="/humanity"/>
        <SubjectCategory communityName="Business" imageSrc="/assets/Business.png" link="/humanity"/>
        <SubjectCategory communityName="Social Science" imageSrc="/assets/SocialScience.png" link="/humanity" />
        <SubjectCategory communityName="Natural Science" imageSrc="/assets/NaturalScience.png" link="/humanity" />
        <SubjectCategory communityName="Education" imageSrc="/assets/Education.png" link="/humanity" />
      </div>
    </div>
  );
};

export default Square;