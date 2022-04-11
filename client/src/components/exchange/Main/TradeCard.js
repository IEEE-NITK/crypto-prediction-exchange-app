import React, { useContext } from "react";
import { WebSocketContext } from "../../../contextApis";
import "./Card.css";

var tradeData = [];
var sliceTradeData;

const TradeCard = () => {
    const { binanceTradeValue } = useContext(WebSocketContext);
    tradeData.push(binanceTradeValue);
    sliceTradeData = tradeData.slice(-8);
    return (
        <>
            {sliceTradeData !== undefined
                ? sliceTradeData.map((data, index) => {
                      var date = new Date(data.E);
                      var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                      return (
                          <tr
                              key={index}
                              className="book-tr"
                              style={{ color: data.m ? "red" : "green" }}
                          >
                              <td
                                  className="book-td"
                                  style={{ textAlign: "left" }}
                              >
                                  <div className="book-name-container">
                                      <div
                                          className="book-name"
                                          style={{
                                              justifyContent: "flex-start",
                                          }}
                                      >
                                          <span className="book-name-text">
                                              {data.p}
                                          </span>
                                      </div>
                                  </div>
                              </td>
                              <td className="book-td">
                                  <div className="price">
                                      <span>{data.q}</span>
                                  </div>
                              </td>
                              <td className="book-td">
                                  <div className="price">
                                      <span>{time}</span>
                                  </div>
                              </td>
                          </tr>
                      );
                  })
                : null}
        </>
    );
};

export default TradeCard;
