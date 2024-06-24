/* 
  All Routes
  Created: 2024-05-28
  Last Modified: 2024-06-22
  Author: Zihan Zhao
*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import SignUp from './SignUp';
import EmailVerification from './EmailVerification';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
