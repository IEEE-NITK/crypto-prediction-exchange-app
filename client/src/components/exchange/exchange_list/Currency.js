import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoin, setCurrency } from "../../../actions/currencyActions";
import "./Currency.css";

const Currency = () => {
    const currentCurrency = useSelector((state) => state.data.currency);
    const dispatch = useDispatch();
    return (
        <div className="currency-container">
            <div className="currency-button">
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            currentCurrency === "USDT" ? "#2a2e39" : "",
                    }}
                    onClick={() => dispatch(setCurrency("USDT"))}
                >
                    USDT
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            currentCurrency === "INR" ? "#2a2e39" : "",
                    }}
                    onClick={() => dispatch(setCurrency("INR"))}
                >
                    INR
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            currentCurrency === "USD" ? "#2a2e39" : "",
                    }}
                    onClick={() => dispatch(setCurrency("USD"))}
                >
                    USD
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            currentCurrency === "BTC" ? "#2a2e39" : "",
                    }}
                    onClick={() => dispatch(setCurrency("BTC"))}
                >
                    BTC
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            currentCurrency === "ETH" ? "#2a2e39" : "",
                    }}
                    onClick={() => dispatch(setCurrency("ETH"))}
                >
                    ETH
                </button>
            </div>
        </div>
    );
};

export default Currency;
