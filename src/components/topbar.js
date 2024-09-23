import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/logo.png';
import SideBar from './navbar';
import { useState } from 'react';
import photo from '../images/Profile.png';
import '../styles/topbar.css';

function TopBar() {
    const [showSideBar, setShowSideBar] = useState(false);
  return (
    <header className='topbar'>
        <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} className='menu-hamburger'/>
        <div className='main-content'>
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            
            <div className='user-info'>
                <span className='user-name'>Nombre Apellido</span>
                <div className='photo-container'>
                    <img src={photo} alt='photo' className='photo' />
                </div>
            </div>
        </div>

        {showSideBar && <SideBar />}
    </header>

  )
}

export default TopBar