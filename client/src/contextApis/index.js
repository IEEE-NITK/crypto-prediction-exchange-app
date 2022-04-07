import React, { createContext, useState, useEffect } from "react";
export const WebSocketContext = createContext();

const cryptoData = require("./cryptocurrency.json");
var crypto = Object.keys(cryptoData);
crypto = crypto.map((item) => item + "usdc@miniTicker");

export function WebSocketContextProvider(props) {
    var coins = [];
    const [binanceCoins, setBinanceCoins] = useState([]);
    const [tempCoins, setTempCoins] = useState({});
    const [binancePassSocket, setBinancePassSocket] = useState(undefined);

    const binanceSocketCall = async () => {
        let conn = new WebSocket(
            "wss://stream.binance.com:9443/ws/" + crypto.join("/")
        );
        conn.onmessage = (evt) => {
            var data = JSON.parse(evt.data);
            function upsert(array, element) {
                var currency = element.s
                    .substring(element.s.length - 4)
                    .toLowerCase();
                var coin = element.s.slice(0, -4).toLowerCase();
                var i = array.findIndex((_element) => _element.symbol === coin);
                if (i > -1) {
                    array[i].price = element.c;
                    array[i].quantity = element.q;
                } else
                    array.push({
                        symbol: coin,
                        currency,
                        price: element.c,
                        quantity: element.q,
                        image: cryptoData[coin],
                    });
            }
            // console.log(data);
            upsert(coins, data);
            setTempCoins(data);
            setBinanceCoins(coins);
        };
        conn.onerror = (evt) => {
            console.error("an error occurred", evt.data);
        };
        setBinancePassSocket(conn);
    };

    useEffect(() => {
        binanceSocketCall();
        return () => {};
    }, []);
    // console.log(binanceCoins);

    return (
        <WebSocketContext.Provider
            value={{
                binanceCoins,
                binancePassSocket,
            }}
        >
            {props.children}
        </WebSocketContext.Provider>
    );
}
