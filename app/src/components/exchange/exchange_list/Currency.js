import React, { useContext, useState } from "react";
import { CoinContext } from "../Exchange";
import "./Currency.css";

const Currency = () => {
    const coinContext = useContext(CoinContext);
    const [clicked, setClicked] = useState(3);
    return (
        <div className="currency-container">
            <div className="currency-button">
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            coinContext.activeCoin.currency === "FAV"
                                ? "#2a2e39"
                                : "",
                    }}
                    onClick={() =>
                        coinContext.dispatchActiveCoin({
                            type: "currency",
                            value: "FAV",
                        })
                    }
                >
                    ⭐
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            coinContext.activeCoin.currency === "INR"
                                ? "#2a2e39"
                                : "",
                    }}
                    onClick={() =>
                        coinContext.dispatchActiveCoin({
                            type: "currency",
                            value: "INR",
                        })
                    }
                >
                    INR
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            coinContext.activeCoin.currency === "USD"
                                ? "#2a2e39"
                                : "",
                    }}
                    onClick={() =>
                        coinContext.dispatchActiveCoin({
                            type: "currency",
                            value: "USD",
                        })
                    }
                >
                    USD
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            coinContext.activeCoin.currency === "BTC"
                                ? "#2a2e39"
                                : "",
                    }}
                    onClick={() =>
                        coinContext.dispatchActiveCoin({
                            type: "currency",
                            value: "BTC",
                        })
                    }
                >
                    BTC
                </button>
                <button
                    className={"btn small-btn"}
                    style={{
                        backgroundColor:
                            coinContext.activeCoin.currency === "ETH"
                                ? "#2a2e39"
                                : "",
                    }}
                    onClick={() =>
                        coinContext.dispatchActiveCoin({
                            type: "currency",
                            value: "ETH",
                        })
                    }
                >
                    ETH
                </button>
            </div>
        </div>
    );
};

export default Currency;
