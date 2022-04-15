import React, { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const WebSocketContext = createContext();

export function WebSocketContextProvider(props) {
    const [binanceCoins, setBinanceCoins] = useState({});
    const [binanceTradeValue, setBinanceTradeValue] = useState({});
    // const [binanceTickerValue, setBinanceTickerValue] = useState({});
    const [binancePassSocket, setBinancePassSocket] = useState(undefined);
    const [binanceTradeSocket, setBinanceTradeSocket] = useState(undefined);
    // const [binanceTickerSocket, setBinanceTickerSocket] = useState(undefined);
    const currentCoin = useSelector((state) => state.data.coin);
    const currentCurrency = useSelector((state) => state.data.currency);

    const binanceSocketCall = async () => {
        var pair = currentCoin + currentCurrency;
        pair = pair.toLowerCase();

        var conn = new WebSocket(
            "wss://stream.binance.com:9443/ws/" + pair + "@depth"
        );
        conn.onmessage = (evt) => {
            var value = evt.data;
            setBinanceCoins(JSON.parse(value));
        };
        conn.onerror = (evt) => {
            console.error("an error occurred", evt.data);
        };

        setBinancePassSocket(conn);
    };

    const binanceSocketClose = () => {
        var conn = binancePassSocket;
        conn.send(JSON.stringify({ method: "close" }));
        console.log("ddd", conn);
    };

    const binanceTradeSocketCall = async () => {
        var pair = currentCoin + currentCurrency;
        pair = pair.toLowerCase();

        var conn = new WebSocket(
            "wss://stream.binance.com:9443/ws/" + pair + "@trade"
        );
        setBinanceTradeSocket(conn);
        conn.onmessage = (evt) => {
            var value = evt.data;
            setBinanceTradeValue(JSON.parse(value));
        };
        conn.onerror = (evt) => {
            console.error("an error occurred", evt.data);
        };
    };

    const binanceTradeSocketClose = () => {
        var tdconn = binanceTradeSocket;
        tdconn.send(JSON.stringify({ method: "close" }));
    };

    // const binanceTickerSocketCall = async () => {
    //     var pair = currentCoin + "usdt";
    //     pair = pair.toLowerCase();

    //     var conn = new WebSocket(
    //         "wss://stream.binance.com:9443/ws/" + pair + "@trade"
    //     );
    //     setBinanceTickerSocket(conn);
    //     conn.onmessage = (evt) => {
    //         var value = evt.data;
    //         setBinanceTickerValue(JSON.parse(value));
    //     };
    //     conn.onerror = (evt) => {
    //         console.error("an error occurred", evt.data);
    //     };
    // };

    // const binanceTickerSocketClose = async () => {
    //     var tdconn = binanceTickerSocket;
    //     tdconn.send(JSON.stringify({ method: "close" }));
    // };

    useEffect(() => {
        binanceSocketCall();
        binanceTradeSocketCall();
        // binanceTickerSocketCall();
        return () => {};
    }, [currentCoin, currentCurrency]);
    // console.log(binanceTradeValue);

    return (
        <WebSocketContext.Provider
            value={{
                binanceCoins,
                binancePassSocket,
                binanceSocketClose,
                // binanceTickerValue,
                binanceTradeValue,
                binanceTradeSocketCall,
                binanceTradeSocketClose,
            }}
        >
            {props.children}
        </WebSocketContext.Provider>
    );
}
