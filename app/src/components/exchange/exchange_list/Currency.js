import React, { useState } from 'react'
import "./Currency.css"

const Currency = (props) => {
    const [clicked, setClicked] = useState(2)
    return (
        <div className='currency-container'>
            <div className="currency-button">
                <button className={"btn small-btn" + (clicked === 1 ? ' btn-clicked' : '')} onClick={() => {
                    props.onChange('inr')
                    setClicked('1')
                    }}>⭐</button>
                <button className={"btn small-btn" + (clicked === 2 ? ' btn-clicked' : '')}  onClick={() => {
                    props.onChange('inr')
                    setClicked('2')
                    }}>INR</button>
                <button className={"btn small-btn" + (clicked === 3 ? ' btn-clicked' : '')}  onClick={() => {
                    props.onChange('usd')
                    setClicked('3')
                    }}>USD</button>
                <button className={"btn small-btn" + (clicked === 4 ? ' btn-clicked' : '')}  onClick={() => {
                    props.onChange('btc')
                    setClicked('4')
                    }}>BTC</button>
                <button className={"btn small-btn" + (clicked === 5 ? ' btn-clicked' : '')}  onClick={() => {
                    props.onChange('eth')
                    setClicked('5')
                    }}>ETH</button>
            </div>
        </div>
    )
}

export default Currency
