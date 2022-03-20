import React from "react";
import Card from "./Card";
import CardList from "./CardList";
import CurrencyNav from "./CurrencyNav";
import "./ExchangeList.css"

const ExchangeList = () => {
  return (
    <div className="exchange-list">
        <CurrencyNav/>
    </div>
  );
};

export default ExchangeList;
