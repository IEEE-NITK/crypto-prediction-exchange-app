import React, { useContext } from "react";
import { WebSocketContext } from "../../../contextApis";

var askSlice;
var appendData = [];

const Ask = () => {
    const { binanceCoins } = useContext(WebSocketContext);
    var askData = binanceCoins.a;
    appendData.push(askData);

    if (appendData !== undefined) {
        askSlice = appendData.slice(-8);
        askSlice.reverse();
    }
    return (
        <>
            {askSlice !== undefined
                ? askSlice.map((data, index) => {
                      var price =
                          data !== undefined
                              ? data[0] !== undefined
                                  ? +data[0][0]
                                  : 0
                              : 0;
                      var amount =
                          data !== undefined
                              ? data[0] !== undefined
                                  ? +data[0][1]
                                  : 0
                              : 0;
                      return (
                          <tr
                              key={index}
                              className="book-tr"
                              style={{ color: "green" }}
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
                                              {amount}
                                          </span>
                                      </div>
                                  </div>
                              </td>
                              <td className="book-td">
                                  <div className="price">
                                      <span>{price}</span>
                                  </div>
                              </td>
                          </tr>
                      );
                  })
                : null}
        </>
    );
};

export default Ask;
