import React, { useContext, useReducer } from "react";
import ExchangeList from "./exchange_list/ExchangeList";
import Main from "./Main/Main";
import Orders from "./orders/Orders";
import "./Exchange.css";

const Exchange = () => {
    return (
        <div className="exchange-component">
            <ExchangeList />
            <Main />
            <Orders />
        </div>
    );
};

export default Exchange;
