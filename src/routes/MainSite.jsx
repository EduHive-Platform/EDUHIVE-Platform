/* 
  Route: /main
  Created: 2024-06-24
  Last Modified: 2024-06-24
  Author: Zihan Zhao
*/

import React from 'react';
import HeaderMain from '../components/HeaderMain';
import FuncMain from '../components/FuncMain';
import PictureMain from '../components/PictureMain';
import FooterMain from '../components/FooterMain';

const Main = () => {
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
    <div>
      <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
      <main>
        <FuncMain />
        <PictureMain />
      </main>
      <FooterMain />
    </div>
  );
};

export default Main;
