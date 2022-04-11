import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TechAnalysisWidget from "./TechAnalysisWidget";
import "./Orders.css";
import { NavLink, Outlet } from "react-router-dom";

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
                        <NavLink className="buy buy-sell-nav" to="/">
                            <div className="buy-sell-btn">
                                <p>BUY</p>
                            </div>
                        </NavLink>
                        <NavLink className="sell buy-sell-nav" to="/sell">
                            <div className="buy-sell-btn">
                                <p>SELL</p>
                            </div>
                        </NavLink>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Orders;
