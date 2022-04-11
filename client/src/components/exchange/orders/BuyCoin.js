import React from "react";
import "./Orders.css";

const BuyCoin = () => {
    return (
        <>
            <form action="" className="form">
                <div className="current-price">
                    <p>Current price in USDT</p>
                </div>
                <div className="amount">
                    <div className="qty-text">
                        <p>Quantity</p>
                    </div>
                    <input type="text" className="quantity" />
                </div>
                <div className="total-amount">
                    <p>OUTPUT AMOUNT</p>
                </div>
                <div className="button">
                    <div className="buy-btn">
                        <p>BUY</p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BuyCoin;
