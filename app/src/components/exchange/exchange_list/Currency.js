import React from 'react'
import "./Currency.css"

const Currency = () => {
    return (
        <div className='currency-container'>
            <div className="currency-button">
                <button className="btn small-btn">⭐</button>
                <button className="btn small-btn">INR</button>
                <button className="btn small-btn">USD</button>
                <button className="btn small-btn">USDT</button>
                <button className="btn small-btn">BTC</button>
            </div>
        </div>
    )
}

export default Currency
