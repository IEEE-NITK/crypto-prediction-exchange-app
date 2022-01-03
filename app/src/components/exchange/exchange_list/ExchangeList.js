import React from "react";
import Card from "./Card";
import CurrencyNav from "./CurrencyNav";
import "./ExchangeList.css"

const ExchangeList = () => {
  return (
    <div className="exchange-list">
        <CurrencyNav/>
        <Card />
    </div>
  );
};

export default ExchangeList;
