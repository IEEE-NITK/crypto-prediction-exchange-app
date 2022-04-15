import React from "react";
import Chart from "./Chart";
import "./Main.css";
import OrderBook from "./OrderBook";
import TradeBook from "./TradeBook";

const Main = () => {
    return (
        <>
            <div className="main-container">
                <Chart />
                <div className="books" style={{ display: "flex" }}>
                    <OrderBook />
                    <TradeBook />
                </div>
            </div>
        </>
    );
};

export default Main;
