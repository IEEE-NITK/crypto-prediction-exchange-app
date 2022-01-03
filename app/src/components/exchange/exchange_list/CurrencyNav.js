import React from 'react'
import Currency from './Currency'
import "./CurrencyNav.css"

const CurrencyNav = () => {
    return (
        <div className='currency-nav'>
            <Currency/>
            <div className="header-search-bar">
                <span className="header-search-input-container">
                    <div className="form-container">
                        <button type="button" className="search-button iconedButton">
                                <span className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M18.162 17.089a7.412 7.412 0 10-1.06 1.062l4.774 4.679a.75.75 0 101.05-1.071l-4.764-4.67zm-5.75 1.235a5.912 5.912 0 110-11.824 5.912 5.912 0 010 11.823z"></path></svg>
                                </span>
                        </button>
                        <input type="text" inputMode='search' className='input-search' placeholder="Search"/>
                    </div>
                </span>
            </div>
            <div className="list-sort">
                <div className="list-sort-item">
                    <span className="not-selectable">Pair</span>
                    <i class="mdi marker not-selectable mdi-arrow-up"></i>
                </div>
                <div className="list-sort-item">
                    <span className="not-selectable">Vol</span>
                    <i class="mdi marker not-selectable mdi-arrow-up"></i>
                </div>
                <div className="list-sort-item">
                    <span className="not-selectable">Change</span>
                    <i class="mdi marker not-selectable mdi-arrow-up"></i>
                </div>
            </div>
        </div>
    )
}

export default CurrencyNav
