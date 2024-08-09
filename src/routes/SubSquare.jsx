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
  const defaultCommunity = 'Default Community';
  const [searchText, setSearchText] = useState('');
  const [finalCommunityName, setFinalCommunityName] = useState(defaultCommunity);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const communityName = location.state ? location.state.communityName : defaultCommunity;
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/projects/community/${communityName}`);
        setProjects(response.data);
        setFinalCommunityName(communityName);
      } catch (error) {
        setError('Failed to load projects');
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [communityName]);

  const handleSearch = async (query) => {
    setSearchText(query);
    setLoading(true);
    setFinalCommunityName(query);

    try {
      const response = await axios.get(`http://localhost:3000/projects/community/${communityName}`);
      setProjects(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to load projects');
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    console.log('Filter button clicked');
    // Add your filter logic here
  };

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
    { label: 'Post', href: '/postTypeSelect' },
    { label: 'Plaza', href: '/square' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  const rightLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ];

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
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : (
              projects.map((project, index) => (
                <ProjectPost
                  key={index}
                  project_id={project._id}
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
