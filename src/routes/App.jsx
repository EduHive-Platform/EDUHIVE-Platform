/* 
  All Routes
  Created: 2024-05-28
  Last Modified: 2024-06-22
  Author: Zihan Zhao
*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './LoginMain';
import Main from './MainSite';
import Login from './Login';
import SignUp from './SignUp';
import EmailVerification from './EmailVerification';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
