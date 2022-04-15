import React from "react";
import "./Screener.css";
import CryptoMarket from "./CryptoMarket";

const Screener = () => {
    return (
        <div className="screener">
            <div className="screener-title">
                <h1>Crypto Screener</h1>
            </div>
            <CryptoMarket />
        </div>
    );
};

export default Screener;
