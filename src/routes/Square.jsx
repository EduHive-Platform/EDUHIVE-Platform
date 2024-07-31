import React from 'react';
import Sidebar from '../components/Sidebar';
import Posts from '../components/ProjectPost';
import './Square.css';
import SubjectCategory from '../components/SubjectCategory';
import HeaderMain from '../components/HeaderMain';
import SearchBox from '../components/SearchBox'; 

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

  const leftLinks = [
    { label: 'Profile', href: '/solutions' },
    { label: 'Post', href: '/PersonalProject' },
    { label: 'Plaza', href: '/square' },
    { label: 'Dashboard', href: '/contact' },
  ];

  const rightLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ];

  const handleSearch = (query) => {
    console.log('Searching for:', query);

  };

  const handleFilter = () => {
    console.log('Filter button clicked');

  };

  return (
    <div className="square-page">
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
        <div className="square-container">
          <Sidebar items={sidebarItems} />
          <div className="main-content">
            <div className='search'>
            <SearchBox onSearch={handleSearch} onFilter={handleFilter} /> {/* Add the SearchBox here */}
            </div>
            <div className="subject-categories">
              <SubjectCategory communityName="Humanity" imageSrc="/assets/Humanity.png" link="/community/humanity" />
              <SubjectCategory communityName="Engineering" imageSrc="/assets/Engineering.png" link="/community/Engineering"/>
              <SubjectCategory communityName="Law" imageSrc="/assets/Law.png" link="/community/Law"/>
              <SubjectCategory communityName="Math" imageSrc="/assets/Math.png" link="/community/Math"/>
              <SubjectCategory communityName="Business" imageSrc="/assets/Business.png" link="/community/Business"/>
              <SubjectCategory communityName="Social Science" imageSrc="/assets/SocialScience.png" link="/community/SocialScience" />
              <SubjectCategory communityName="Natural Science" imageSrc="/assets/NaturalScience.png" link="/community/NaturalScience" />
              <SubjectCategory communityName="Education" imageSrc="/assets/Education.png" link="/community/Education" />
              <SubjectCategory communityName="Art" imageSrc="/assets/Art.png" link="/community/Art" />
              <SubjectCategory communityName="Med" imageSrc="/assets/Med.png" link="/community/Med" />
              <SubjectCategory communityName="History" imageSrc="/assets/History.png" link="/community/History" />
              <SubjectCategory communityName="Sports" imageSrc="/assets/Sports.png" link="/community/Sports" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Square;