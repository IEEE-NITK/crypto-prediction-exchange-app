import React from "react";
import "./HoldingCard.css";

const HoldingCard = () => {
    return (
        <tr>
            <td>
                <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star"></span>⭐
                </span>
            </td>
            <td style={{ textAlign: "left" }}>
                <p color="text2" font-size="0" class="sc-1eb5slv-0 ejtSnS">
                    1
                </p>
            </td>
            <td style={{ textAlign: "left" }}>
                <div className="escjiH">
                    <div className="dBKWCw">
                        <img
                            class="coin-logo"
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                            loading="lazy"
                            alt="BTC logo"
                        />
                    </div>
                    <div className="name">
                        <span className="name-text">Avalanche AVAX</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="price">
                    <span>25gdgyethe4324</span>
                </div>
            </td>
            <td style={{ textAlign: "right" }}>
                <span className="last24">
                    <span className="icon-caret-up">
                        <i className="icon">I</i>
                    </span>
                    43%
                </span>
            </td>
            <td style={{ textAlign: "right" }}>
                <p className="market-cap">
                    <span>64567487</span>
                </p>
            </td>
            <td style={{ textAlign: "right" }}>
                <p className="market-volume">6435de</p>
            </td>
            <td style={{ textAlign: "right" }}>
                <p className="circulating-supply">63475647</p>
            </td>
            <td style={{ textAlign: "center" }}>
                <span className="market-rating">
                    <span className="icon">
                        <i className="icon"></i>
                    </span>
                    SELL
                </span>
            </td>
        </tr>
    );
};

export default HoldingCard;
