import React, { useContext, useReducer } from "react";
import ExchangeList from "./exchange_list/ExchangeList";
import Main from "./Main/Main";
import Orders from "./orders/Orders";
import "./Exchange.css";
// import { useWebSocketContext } from "../../contextApis";

export const CoinContext = React.createContext();

const initialState = {
    coin: "BTC",
    currency: "USD",
};
const reducer = (state, action) => {
    switch (action.type) {
        case "currency":
            return { ...state, currency: action.value.toUpperCase() };
        case "coin":
            return { ...state, coin: action.value.toUpperCase() };
        default:
            return state;
    }
};

const Exchange = () => {
    const [activeCoin, dispatchActiveCoin] = useReducer(reducer, initialState);
    // const websocketContext = useContext(useWebSocketContext);
    // console.log(websocketContext);
    return (
        <CoinContext.Provider value={{ activeCoin, dispatchActiveCoin }}>
            <div className="exchange-component">
                <ExchangeList />
                <Main />
                <Orders />
            </div>
        </CoinContext.Provider>
    );
};

export default Exchange;
