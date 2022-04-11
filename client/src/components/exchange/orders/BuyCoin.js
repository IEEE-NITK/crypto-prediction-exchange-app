import React from "react";

const BuyCoin = () => {
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
            <div className="buy-sell-button">BUY</div>
        </>
    );
};

export default BuyCoin;
