/* 
  Route: /main
  Created: 2024-06-24
  Last Modified: 2024-06-24
  Author: Zihan Zhao
*/

import React from 'react';
import HeaderMain from '../components/HeaderMain';
import HeroSection from '../components/HeroSection';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import FooterMain from '../components/FooterMain';

const Main = () => {
  return (
    <div>
      <HeaderMain />
      <main>
        <HeroSection />
        <Benefits />
        <Services />
      </main>
      <FooterMain />
    </div>
  );
};

export default Main;
