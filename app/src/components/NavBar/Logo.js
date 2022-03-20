import React from 'react'
import logo from "../../images/cryptocurrency.png"
import "./Logo.css"

const Logo = () => {
    return (
        <div className="tv-header__logo">
            <img className='tv-header__link--logo' src={logo} alt="Codeverse" />
        </div>
    )
}

export default Logo
