import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginEmail from './LoginWithEmail';
import Main from './MainSite';
import Login from './Login';
import SignUp from './SignUp';
import EmailVerification from './EmailVerification';
import StudentPost from './StudentPost';
import NotFound from './NotFound';
import Form from './Form';
import Square from './Square';
import Post from './Post'; // Import the Post component

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
        <Route path="/form" element={<Form />} />
        <Route path="/posts" element={<Post />} /> {/* Add this route for Posts */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
