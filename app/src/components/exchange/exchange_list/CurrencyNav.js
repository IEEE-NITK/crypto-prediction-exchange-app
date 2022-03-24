import React, { useState, useEffect, useContext } from "react";
import { CoinContext } from "../Exchange";
import CardList from "./CardList";
import Currency from "./Currency";
import "./CurrencyNav.css";

const CurrencyNav = () => {
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState([]);
    const coinContext = useContext(CoinContext);
    const [order, setOrder] = useState("market_cap_desc");
    var axios = require("axios").default;

    const fetchData = () => {
        var options = {
            method: "GET",
            url: "https://coingecko.p.rapidapi.com/coins/markets",
            params: {
                vs_currency: `${coinContext.activeCoin.currency}`,
                page: "1",
                per_page: "100",
                order: `${order}`,
            },
            headers: {
                "x-rapidapi-host": "coingecko.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.REACT_APP_X_RAPID_API_KEY}`,
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setCoins(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const updateInput = (event) => {
        setInput(event.target.value);
        const filtered = coins.filter((coin) => {
            return coin.name
                .toString()
                .toLowerCase()
                .includes(input.toString().toLowerCase());
        });
        setCoins(filtered);
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 2000);

        return () => clearInterval(interval);
    }, [coinContext.activeCoin.currency, order]);
    return (
        <>
            <div className="currency-nav">
                <Currency />
                <div className="header-search-bar">
                    <span className="header-search-input-container">
                        <div className="form-container">
                            <button
                                type="button"
                                className="search-button iconedButton"
                            >
                                <span className="search-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28"
                                        fill="currentColor"
                                    >
                                        <path d="M18.162 17.089a7.412 7.412 0 10-1.06 1.062l4.774 4.679a.75.75 0 101.05-1.071l-4.764-4.67zm-5.75 1.235a5.912 5.912 0 110-11.824 5.912 5.912 0 010 11.823z"></path>
                                    </svg>
                                </span>
                            </button>
                            <input
                                type="text"
                                inputMode="search"
                                className="input-search"
                                placeholder="Search"
                                input={input}
                                onChange={updateInput}
                            />
                        </div>
                    </span>
                </div>
                <div className="list-sort">
                    <div
                        onClick={() => setOrder("market_cap_asec")}
                        className="list-sort-item-pair"
                    >
                        <span className="not-selectable">Pair </span>
                        <i class="fas fa-arrow-up arrow"></i>
                    </div>
                    <div
                        onClick={() => setOrder("total_volume_asec")}
                        className="list-sort-item-vol"
                    >
                        <span className="not-selectable">Vol </span>
                        <i class="fas fa-arrow-up arrow"></i>
                    </div>
                    <div
                        onClick={() =>
                            setOrder("market_cap_change_percentage_24h_desc")
                        }
                        className="list-sort-item-change"
                    >
                        <span className="not-selectable">Change </span>
                        <i class="fas fa-arrow-up arrow"></i>
                    </div>
                </div>
            </div>
            <CardList coins={coins} />
        </>
    );
};

export default CurrencyNav;
