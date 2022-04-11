import React from "react";
import "./Orders.css";

const SellCoin = () => {
    return (
        <>
            <div className="current-price">
                <p>Current price in USDT</p>
            </div>
            <div className="amount">
                <input type="text" />
            </div>
            <div className="total-amount">
                <p>OUTPUT AMOUNT</p>
            </div>
            <div className="buy-sell-btn">SELL</div>
        </>
    );
};

export default SellCoin;
