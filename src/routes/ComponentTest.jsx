import React from 'react';
import styled from 'styled-components';

import Header from '../components/CommunityHeader'


const ComponentTest = () => {
    return (
        <div>
            <Header
                communityTitle="CommunityTitle"
                communityAvatar="/assets/LogoFormal.png"
                communityImage="/assets/PictureMain.png"
                joined={true}
            />
        </div>
    );
  };

export default ComponentTest;