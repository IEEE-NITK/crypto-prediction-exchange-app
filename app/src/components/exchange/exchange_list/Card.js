import React, { useContext } from "react";
import { CoinContext } from "../Exchange";
import "./Card.css";

const Card = (coin) => {
    const coinContext = useContext(CoinContext);
    return (
        <div
            className="selected ticker-item"
            style={{
                backgroundColor:
                    coinContext.activeCoin.coin ===
                    coin.coin.symbol.toUpperCase()
                        ? "#192948"
                        : "",
            }}
            onClick={() =>
                coinContext.dispatchActiveCoin({
                    type: "coin",
                    value: coin.coin.symbol,
                })
            }
        >
            <div className="currency-logo">
                <img src={coin.coin.image} className="logo"></img>
            </div>
            <div className="market">
                <div className="market-name">
                    <span className="market-name-text">
                        {coin.coin.symbol.toUpperCase()}
                    </span>
                </div>
                <div
                    className={
                        "market-change " +
                        (coin.coin.price_change_percentage_24h >= 0
                            ? "green"
                            : "red")
                    }
                >
                    <span>
                        <i
                            className={
                                "fas " +
                                (coin.coin.price_change_percentage_24h >= 0
                                    ? "fa-caret-up"
                                    : "fa-caret-down")
                            }
                        ></i>{" "}
                        {coin.coin.price_change_percentage_24h}%
                    </span>
                </div>
            </div>
            <div className="price">
                <div className="price-box">
                    <span className="price-text ticker-price">
                        <p>
                            {coin.coin.current_price}&nbsp;
                            {coinContext.activeCoin.currency}
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
