import React from "react";
import Ask from "./Ask";
import Bids from "./Bids";
import "./Book.css";

const OrderBook = () => {
    return (
        <>
            <div className="book-container">
                <div className="book-title">
                    <h4 style={{ margin: "10px" }}>Order Book</h4>
                </div>
                <div className="book-table" style={{ display: "flex" }}>
                    <div className="bids">
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
                            </colgroup>
                            <thead>
                                <th className="book-stickyTop">
                                    <div
                                        className="book-heading"
                                        style={{ justifyContent: "flex-start" }}
                                    >
                                        <div className="book-gbtfIe">
                                            <p className="book-hJMpdk">
                                                VOLUME
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="book-stickyTop">
                                    <div className="book-pEXWP">
                                        <div className="book-gbtfIe">
                                            <p className="book-hJMpdk">
                                                BUY PRICE
                                            </p>
                                        </div>
                                    </div>
                                </th>
                            </thead>
                            <tbody>
                                <Ask />
                            </tbody>
                        </table>
                    </div>
                    <div className="asks">
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
                            </colgroup>
                            <thead>
                                <th className="book-stickyTop">
                                    <div
                                        className="book-heading"
                                        style={{ justifyContent: "flex-start" }}
                                    >
                                        <div className="book-gbtfIe">
                                            <p className="book-hJMpdk">
                                                SELL PRICE
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="book-stickyTop">
                                    <div className="book-pEXWP">
                                        <div className="book-gbtfIe">
                                            <p className="book-hJMpdk">
                                                VOLUME
                                            </p>
                                        </div>
                                    </div>
                                </th>
                            </thead>
                            <tbody>
                                <Bids />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderBook;
