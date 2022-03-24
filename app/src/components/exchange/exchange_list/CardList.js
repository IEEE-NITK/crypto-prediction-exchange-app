import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card";

const CardList = (coins) => {
    const coinsList = coins.coins.map((coin) => (
        <Card key={coin.id} coin={coin}></Card>
    ));
    return <div className="card-list">{coinsList}</div>;
};

export default CardList;
