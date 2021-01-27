import React from 'react';

import youtubeLogo from './assets/youtube-logo.svg';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img src={youtubeLogo} alt='Youtube Logo' className='header__logo' />
      </div>
      <div className='header__input'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__inputButton' />
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt='Tomer Dore'
          src='https://media-exp1.licdn.com/dms/image/C4E03AQEybUL0FEs5dQ/profile-displayphoto-shrink_800_800/0/1594979511692?e=1617235200&v=beta&t=Xo1Eyg3wB6_7pvtLoAv46596pzmoG3jL65CSBxSmEwY'
        />
      </div>
    </div>
  );
};

export default Header;
