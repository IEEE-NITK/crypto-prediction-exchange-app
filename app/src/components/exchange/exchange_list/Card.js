import React from 'react'
import "./Card.css"

const Card = (coin) => {
    return (
        <div className='selected ticker-item'>
            <div className="currency-logo">
                <img src={coin.coin.image} class="logo"></img>
            </div>
            <div className="market">
                <div className="market-name">
                    <span className="market-name-text">{coin.coin.symbol.toUpperCase()}</span>
                </div>
                <div className="market-change">
                    <span>🔼{coin.coin.price_change_percentage_24h}</span>
                </div>
            </div>
            <div className="price">
                <div className="price-box">
                    <span className="price-text ticker-price">
                        {coin.coin.current_price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
