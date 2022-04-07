import React from "react";
import "./Book.css";
import TradeCard from "./TradeCard";

const TradeBook = () => {
    return (
        <>
            <div className="book-container">
                <div className="book-title">
                    <h5 style={{ margin: "10px" }}>Trade Book</h5>
                </div>
                <div className="book-table">
                    <table className="book-table">
                        <colgroup>
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                        </colgroup>
                        <thead>
                            <th
                                className="book-stickyTop"
                                style={{ textAlign: "right" }}
                            >
                                <div className="book-heading">
                                    <div className="gbtfIe">
                                        <p className="hJMpdk">PRICE</p>
                                    </div>
                                </div>
                            </th>
                            <th className="book-stickyTop">
                                <div className="pEXWP">
                                    <div className="gbtfIe">
                                        <p className="hJMpdk">VOLUME</p>
                                    </div>
                                </div>
                            </th>
                            <th className="book-stickyTop">
                                <div className="pEXWP">
                                    <div className="gbtfIe">
                                        <p className="hJMpdk">TIME</p>
                                    </div>
                                </div>
                            </th>
                        </thead>
                        <tbody>
                            <TradeCard />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TradeBook;
