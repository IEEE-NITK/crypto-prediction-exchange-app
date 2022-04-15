import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoin } from "../../../actions/currencyActions";
import { WebSocketContext } from "../../../contextApis";
import "./Card.css";

const Card = (coin) => {
    const currentCoin = useSelector((state) => state.data.coin);
    const currentCurrency = useSelector((state) => state.data.currency);
    const dispatch = useDispatch();
    const {
        binanceSocketCall,
        binanceSocketClose,
        binanceTradeSocketCall,
        binanceTradeSocketClose,
    } = useContext(WebSocketContext);
    return (
        <div
            className="selected ticker-item"
            style={{
                backgroundColor:
                    currentCoin === coin.coin.symbol.toUpperCase()
                        ? "#192948"
                        : "",
            }}
            onClick={() => {
                binanceSocketClose();
                binanceTradeSocketClose();
                dispatch(setCoin(coin.coin.symbol.toUpperCase()));
                binanceSocketCall();
                binanceTradeSocketCall();
            }}
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
                            {currentCurrency}
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
