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
import ComponentTest from './ComponentTest'
import Profile from './Profile'
import PersonalProject from './PersonalProject'
import Square from './Square';
import SubSquare from './SubSquare';
import CommunityDescription from './CommunityDescription';
import PostTypeSelect from './PostTypeSelect'; // Import the new component
import ResearchTypeSelect from './ResearchTypeSelect';
import PostStartup from './PostStartup';
import PostShortResearch from "./PostShortResearch"
import PostLongResearch from './PostLongResearch';  
import SuccessScreen from './SuccessScreen';

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
        <Route path="/professorPost" element={<ProfessorPost />}/>
        <Route path="/ComponentTest" element={<ComponentTest />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/PersonalProject" element={<PersonalProject />}/>

        <Route path="/postTypeSelect" element={<PostTypeSelect />} />
        <Route path="/researchTypeSelect" element={<ResearchTypeSelect />} />
        <Route path="/postStartup" element={<PostStartup/>} />
        <Route path="/postShortResearch" element={<PostShortResearch/>} />
        <Route path="/postLongResearch" element={<PostLongResearch/>} />
        <Route path="/success" element={<SuccessScreen/>} />
          
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
