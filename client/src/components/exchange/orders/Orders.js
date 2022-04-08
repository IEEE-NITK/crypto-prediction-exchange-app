import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TechAnalysisWidget from "./TechAnalysisWidget";
import "./Orders.css";

const Orders = () => {
    const data = useSelector((state) => state.data.coin);
    return (
        <>
            <div className="orders-container">
                <h1 style={{ color: "black" }}>Orders Executed</h1>
                <TechAnalysisWidget />
                <div className="buy-sell">
                    <h1>{data}</h1>
                    <button></button>
                </div>
            </div>
        </>
    );
};

export default Orders;
