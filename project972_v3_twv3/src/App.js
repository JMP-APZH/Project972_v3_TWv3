import React from 'react'
import './input.css';
import './App.css';
import './index.css';

import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Registration from './components/Registration';
import DarkMode from './components/DarkMode';
import DarkMode2 from './components/DarkMode2';
import DMtoggle from './components/DMtoggle';
import FishSales from './components/FishSales';
import GoogleAuth from './components/GoogleAuth';
import GoogleLogIn2 from './components/GoogleLogIn2';
import FacebookAuth1 from './components/FacebookAuth1';
import Registration_be from './components/Registration_be';
import Auth from './pages/Auth';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import LandingAuth from './pages/LandingAuth';
import RegPage from './pages/RegPage';
import RegConf from './pages/RegConf';
import RegForm from './pages/RegForm';
import MainLogin from './pages/MainLogin';
import Navbarfb from './components/Navbarfb';
import NavItem from './components/NavItem';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import DropdownMenu from './components/DropdownMenu';
import LandingAuth2 from './pages/LandingAuth2';


// import { useNavigate } from 'react-router'



function App() {
  // const navigate = useNavigate();
  return (

<div className="App">
      {/* <Login /> */}
      {/* <Registration_be /> */}
      {/* <GoogleAuth /> */}
      {/* <GoogleLogIn2 /> */}
      {/* <FacebookAuth1 /> */}
      {/* <Sidebar /> */}
      {/* <Registration /> */}
      {/* <DarkMode /> */}
      {/* <DarkMode2 /> */}
      {/* <DMtoggle /> */}
      {/* <FishSales /> */}
      {/* <Auth /> */}
      {/* <Camera /> */}
      {/* <CameraExpo /> */}
      <Navbarfb>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>

          <DropdownMenu />

        </NavItem>

      </Navbarfb>
      
      <Router>

        <Routes>
            <Route path="/start" element={<LandingAuth />} />
            <Route path="/start2" element={<LandingAuth2 />} />
            <Route path="/registration" element={<RegPage />} />
            <Route path="/registrationconf" element={<RegConf />} />
            <Route path="/regform" element={<RegForm />} />
            <Route path="/login" element={<MainLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />


          </Routes>

      </Router>

  </div>



    
  );
}

export default App;


