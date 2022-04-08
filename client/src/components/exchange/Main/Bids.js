import React, { useContext } from "react";
import { WebSocketContext } from "../../../contextApis";

var bidsSlice;
var appendData = [];

const Bids = () => {
    const { binanceCoins } = useContext(WebSocketContext);
    var bidsData = binanceCoins.b;
    appendData.push(bidsData);

    if (appendData !== undefined) {
        bidsSlice = appendData.slice(-8);
        bidsSlice.reverse();
    }
    return (
        <>
            {bidsSlice !== undefined
                ? bidsSlice.map((data, index) => {
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
                              style={{ color: "red" }}
                          >
                              <td
                                  className="book-td"
                                  style={{ textAlign: "left" }}
                              >
                                  <div className="book-name-container">
                                      <div
                                          className="book-name"
                                          style={{ justifyContent: "start" }}
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

export default Bids;
