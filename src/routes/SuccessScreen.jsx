import React from 'react';
import './SuccessScreen.css'; 
import HeaderMain from '../components/HeaderMain';


function SuccessScreen() {
    const leftLinks = [
        { label: 'Profile', href: '/solutions' },
        { label: 'Post', href: '/postTypeSelect' },
        { label: 'Plaza', href: '/square' },
        { label: 'Dashboard', href: '/contact' },
        ];

        const rightLinks = [
        { label: 'LinkedIn', href: 'https://www.linkedin.com' },
        { label: 'Instagram', href: 'https://www.instagram.com' },
        ];

  return (
    <div className="success-container">
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
      <div className="top-right-buttons">
        <button onClick={() => window.location.href = '/PersonalProject'}>Manage your Posts</button>
        <button onClick={() => window.location.href = '/posted-projects'}>Posted Projects</button>
        <button onClick={() => window.location.href = '/deleted-posts'}>Deleted Posts</button>
        <button onClick={() => window.location.href = '/completed-projects'}>Completed Projects</button>
      </div>
      <div className="logo rotate-logo">
        <img src="/assets/LogoFormal.png" alt="Logo" />
      </div>
      <div className='text-success'>
        <h1>Successfully Posted!</h1>
      </div>
      
    </div>
  );
}

export default SuccessScreen;
