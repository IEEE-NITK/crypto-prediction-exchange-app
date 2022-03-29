import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Buttons.css"

const Buttons = () => {
    return (
        <div className='tv-header__middle-content'>
            <nav className="tv-header__area--menu tv-header__area">
                <ul className='tv-header__main-menu'>
                    <NavLink to="/" style={{color:"white", paddingRight:"12px"}}>
                        {({isActive}) => (
                            <li className={'tv-header__main-menu-item ' + (isActive ? 'active' : '')}>
                                <a>Exchange</a>
                            </li>
                        )}
                    </NavLink>
                    <NavLink to="/screener" style={{color:"white", paddingRight:"12px"}}>
                        {({isActive}) => (
                            <li className={'tv-header__main-menu-item ' + (isActive ? 'active' : '')}>
                                <a>Sceener</a>
                            </li>
                        )}
                    </NavLink>
                    <NavLink to="/news" style={{color:"white", paddingRight:"12px"}}>
                        {({isActive}) => (
                            <li className={'tv-header__main-menu-item ' + (isActive ? 'active' : '')}>
                                <a>News</a>
                            </li>
                        )}
                    </NavLink>
                    <NavLink to="/funds" style={{color:"white", paddingRight:"12px"}}>
                        {({isActive}) => (
                            <li className={'tv-header__main-menu-item ' + (isActive ? 'active' : '')}>
                                <a>Funds</a>
                            </li>
                        )}
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Buttons
