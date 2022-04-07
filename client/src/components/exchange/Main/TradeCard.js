import React from "react";
import "./Card.css";

const TradeCard = () => {
    return (
        <tr className="book-tr">
            <td className="book-td" style={{ textAlign: "left" }}>
                <div className="book-name-container">
                    <div className="book-name">
                        <span className="book-name-text">Avalanche AVAX</span>
                    </div>
                </div>
            </td>
            <td className="book-td">
                <div className="price">
                    <span>25gdgyethe4324</span>
                </div>
            </td>
            <td className="book-td">
                <div className="price">
                    <span>25gdgyethe4324</span>
                </div>
            </td>
        </tr>
    );
};

export default TradeCard;
