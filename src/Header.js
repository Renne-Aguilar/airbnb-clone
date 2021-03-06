import React from 'react' ;
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className= 'header'>
            <Link to='/'>
            <img
            className="header_icon"
            src="logo.png"
            alt=""
            />
            </Link>
           

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Alberga una persona</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                
                <Link to='/register'>
                    <Avatar />
                </Link>
            </div>
             

            
        </div>
    )
}

export default Header
