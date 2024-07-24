import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectPost from '../components/ProjectPost';
import SubjectCategory from '../components/SubjectCategory';
import HeaderMain from '../components/HeaderMain';
import SearchBox from '../components/SearchBox'; 
import './SubSquare.css';
import { useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';

const SubSquare = () => {
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [finalCommunityName, setFinalCommunityName] = useState('')
  //const [communityName, setCommunityName] = useState('');
  const communityName = location.state ? location.state.communityName : 'Default Community';
  //setFinalCommunityName(communityName)
  console.log(communityName)

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/projects/community/${communityName}`);
        setProjects(response.data);
        setFinalCommunityName(communityName)
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [communityName]);

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
    { label: 'Opportunities' },
    { label: 'Topics' },
  ];

  const leftLinks = [
    { label: 'Profile', href: '/solutions' },
    { label: 'Post', href: '/about' },
    { label: 'Plaza', href: '/insights' },
    { label: 'Dashboard', href: '/contact' },
  ];

  const rightLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ];

  const handleSearch = async (query) => {
    setSearchText(query);  // Update searchText with the query
    setLoading(true);
    setFinalCommunityName(query)
    try {
      const response = await axios.get(`http://localhost:3000/projects/community/${query}`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    console.log('Filter button clicked');
    // Add your filter logic here
  };

  return (
    <div className="square-page">
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
        <div className="square-container">
          <Sidebar items={sidebarItems} />
          <div className="main-content2">
            <div className='search-box'>
            <SearchBox onSearch={handleSearch} onFilter={handleFilter} />
            </div>
            <div className='posts'>
              {loading ? (
                <div className="loading-container">
                  <Oval
                    height={80}
                    width={80}
                    color="#0056b3"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#0056b3"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                  <p>Loading projects...</p>
                </div>
              ) : (
                projects.map((project, index) => (
                  <ProjectPost
                    key={index}
                    communityName={finalCommunityName}
                    title={project.title}
                    content={project.description}
                    likes={project.num_likes}
                    comments={project.comments.map(comment => comment.content)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default SubSquare;
