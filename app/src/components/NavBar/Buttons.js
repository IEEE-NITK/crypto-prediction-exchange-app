import React from 'react'
import "./Buttons.css"

const Buttons = () => {
    return (
        <div className='tv-header__middle-content'>
            <nav className="tv-header__area--menu tv-header__area">
                <ul className='tv-header__main-menu'>
                    <li className='tv-header__main-menu-item'>
                        <a href="">Exchange</a>
                    </li>
                    <li className='tv-header__main-menu-item'>
                        <a href="">Sceners</a>
                    </li>
                    <li className='tv-header__main-menu-item'>
                        <a href="">News</a>
                    </li>
                    <li className='tv-header__main-menu-item'>
                        <a href="">Ideas</a>
                    </li>
                    <li className='tv-header__main-menu-item'>
                        <a href="">Funds</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Buttons
