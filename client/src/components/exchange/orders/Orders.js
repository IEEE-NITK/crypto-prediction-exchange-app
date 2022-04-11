import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TechAnalysisWidget from "./TechAnalysisWidget";
import "./Orders.css";

const Orders = () => {
    const data = useSelector((state) => state.data.coin);
    return (
        <>
            <div className="orders-container">
                <TechAnalysisWidget />
                <div className="buy-sell">
                    <div
                        className="buy-sell-navbar"
                        style={{ display: "flex" }}
                    >
                        <div className="buy">
                            <p>BUY</p>
                        </div>
                        <div className="sell">
                            <p>SELL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;
