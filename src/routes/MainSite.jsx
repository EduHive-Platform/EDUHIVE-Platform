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
  return (
    <div>
      <HeaderMain />
      <main>
        <FuncMain />
        <PictureMain />
      </main>
      <FooterMain />
    </div>
  );
};

export default Main;
