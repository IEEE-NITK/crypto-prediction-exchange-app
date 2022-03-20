import React from 'react'
import Buttons from './Buttons'
import Logo from './Logo'
import "./NavBar.css"
import User from './User'

const NavBar = () => {
    return (
        <div className='tv-header__inner'>
            <Logo/>
            <Buttons/>
            <User/>
        </div>
    )
}

export default NavBar
