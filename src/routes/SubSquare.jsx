import React from 'react';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';
import './Square.css';
import SubjectCategory from '../components/SubjectCategory';
import HeaderMain from '../components/HeaderMain';
import SearchBox from '../components/SearchBox'; 
import './SubSquare.css'

const SubSquare = () => {
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

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Add your search logic here
  };

  const handleFilter = () => {
    console.log('Filter button clicked');
    // Add your filter logic here
  };

  const postsData = [
    {
      community: 'Community 1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      likes: 10,
      comments: ['Great post!', 'Thanks for sharing.'],
    },
    {
      community: 'Community 2',
      title: 'Second Post',
      content: 'This is the content of the second post.',
      likes: 20,
      comments: ['Very informative.', 'I learned a lot.'],
    },
    {
      community: 'Community 3',
      title: 'Third Post',
      content: 'This is the content of the third post.',
      likes: 15,
      comments: ['Interesting perspective.', 'Good read!'],
    },
  ];

  return (
    <div className="square-page">
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
        <div className="square-container">
          <Sidebar items={sidebarItems} />
          <div className="main-content">
            <SearchBox onSearch={handleSearch} onFilter={handleFilter} /> {/* Add the SearchBox here */}
            <div className='posts'>
                {postsData.map((post, index) => (
                    <Post
                    key={index}
                    community={post.community}
                    title={post.title}
                    content={post.content}
                    likes={post.likes}
                    comments={post.comments}
                    />
                ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default SubSquare;
