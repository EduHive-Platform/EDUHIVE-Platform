import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginEmail from './LoginWithEmail';
import Main from './MainSite';
import Login from './Login';
import SignUp from './SignUp';
import EmailVerification from './EmailVerification';
import StudentPost from './StudentPost';
import ProfessorPost from './ProfessorPost';
import NotFound from './NotFound';
import Square from './Square'

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
        <Route path="/professorPost" element={<ProfessorPost />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
