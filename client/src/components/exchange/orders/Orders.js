import React from "react";
import TechAnalysisWidget from "./TechAnalysisWidget";
import "./Orders.css";

const Orders = () => {
    return (
        <>
            <div className="orders-container">
                <h1 style={{ color: "black" }}>Orders Executed</h1>
                <TechAnalysisWidget />
            </div>
        </>
    );
};

export default Orders;
