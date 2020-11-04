import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img className="header-icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="logo" />

      <div className="header-center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>




    </div>
  )
}

export default Header
