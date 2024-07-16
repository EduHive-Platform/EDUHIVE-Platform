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
import FormSheet from '../components/Form';
import PostsPage from '../components/PostsPage.jsx'; // Updated to .jsx

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginWithEmail" element={<LoginEmail />} />
        <Route path="/square" element={<Square />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/studentPost" element={<StudentPost />} />
        <Route path="/form" element={<FormSheet />} />
        <Route path="/posts" element={<PostsPage />} /> {/* Use PostsPage here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
