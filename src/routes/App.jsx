import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginEmail from './LoginWithEmail';
import Main from './MainSite';
import Login from './Login';
import SignUp from './SignUp';
import EmailVerification from './EmailVerification';
import StudentPost from './StudentPost';
import NotFound from './NotFound';
import Square from './Square';
import SubSquare from './SubSquare';
import CommunityDescription from './CommunityDescription';
import PostTypeSelect from './PostTypeSelect'; // Import the new component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/community/:communityName" element={<CommunityDescription />} />
        <Route path="/subSquare" element={<SubSquare />} />
        <Route path="/subSquare/:communityName" element={<SubSquare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginWithEmail" element={<LoginEmail />} />
        <Route path="/square" element={<Square />} />
        <Route path="/subSquare" element={<SubSquare />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/studentPost" element={<StudentPost />} />
        <Route path="/postTypeSelect" element={<PostTypeSelect />} /> {/* New Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
