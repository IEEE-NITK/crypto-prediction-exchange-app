import React, { useContext } from "react";
import { WebSocketContext } from "../../contextApis";

const News = () => {
    const context = useContext(WebSocketContext);
    console.log(context.binanceCoins);
    return <div>News</div>;
};

export default News;
