import React, { useState } from 'react'
import { Notifications, Menu, SearchOutlined, VideoCall, Apps } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='header'>
            <div className="header__left">
                <Menu />
                <Link to='/'>
                    <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png" alt="" srcset="" />
                </Link>
            </div>
            <div className="header__input">
                <input calue={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchOutlined className='header__inputButton' />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCall className='header__icon' />
                <Apps className='header__icon' />
                <Notifications className='header__icon' />
                <Avatar alt="Taha" src="https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg" />
            </div>
        </div>
    )
}

export default Header;