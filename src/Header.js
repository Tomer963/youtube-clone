import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import youtubeLogo from './assets/youtube-logo.svg';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

import './Header.css';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img src={youtubeLogo} alt='Youtube Logo' className='header__logo' />
        </Link>
      </div>

      <div className='header__input'>
        <input
          placeholder='Search'
          type='text'
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
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
