import React from 'react'
import "./Card.css"

const Card = () => {
    return (
        <div className='selected ticker-item'>
            <div className="currency-logo">
                <i class="fab fa-bitcoin"></i>
            </div>
            <div className="market">
                <div className="market-name">
                    <span className="market-name-text">AVAX</span>
                </div>
                <div className="market-change">
                    <span>🔼18.31</span>
                </div>
            </div>
            <div className="price">
                <div className="price-box">
                    <span className="price-text ticker-price">
                        9310.00
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
