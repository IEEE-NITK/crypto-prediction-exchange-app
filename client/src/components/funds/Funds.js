import React from "react";
import ScreenerCard from "../screeners/ScreenerCard";
import "../screeners/Screener.css";
import Holdings from "./Holdings";

const Funds = () => {
    return (
        // <div className="screener">
        //     <div className="screener-title">
        //         <h1>Crypto Screener</h1>
        //     </div>
        //     {/* <CryptoMarket /> */}
        //     <div className="table">
        //         <table className="screener-table czTsgW">
        //             <colgroup>
        //                 <col />
        //                 <col
        //                     style={{
        //                         width: "50px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col
        //                     style={{
        //                         width: "200px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col />
        //                 <col
        //                     style={{
        //                         width: "100px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col
        //                     style={{
        //                         width: "150px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col
        //                     style={{
        //                         width: "200px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col
        //                     style={{
        //                         width: "250px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col
        //                     style={{
        //                         width: "200px",
        //                         minWidth: "auto",
        //                         maxWidth: "auto",
        //                     }}
        //                 />
        //                 <col />
        //             </colgroup>
        //             <thead>
        //                 <th className="stickyTop"></th>
        //                 <th className="stickTop" style={{ textAlign: "left" }}>
        //                     <div className="bOfkjI">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">#</p>
        //                             <span className="icon-caret-down"></span>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th
        //                     className="stickyTop"
        //                     style={{ textAlign: "right" }}
        //                 >
        //                     <div className="bOfkjI">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">Name</p>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th className="stickyTop">
        //                     <div className="pEXWP">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">Price</p>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th
        //                     className="stickyTop"
        //                     style={{ textAlign: "right" }}
        //                 >
        //                     <div>
        //                         <div className="pEXWP">
        //                             <div className="gbtfIe">
        //                                 <p className="hJMpdk">24 %</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th
        //                     className="stickyTop"
        //                     style={{ textAlign: "right" }}
        //                 >
        //                     <div className="pEXWP">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">Market Cap</p>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th
        //                     className="stickyTop"
        //                     style={{ textAlign: "right" }}
        //                 >
        //                     <div className="pEXWP">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">Volume(24h)</p>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th
        //                     className="stickyTop"
        //                     style={{ textAlign: "right" }}
        //                 >
        //                     <div className="pEXWP">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">Circulating Supply</p>
        //                         </div>
        //                     </div>
        //                 </th>
        //                 <th
        //                     className="stickyTop"
        //                     style={{ textAlign: "center" }}
        //                 >
        //                     <div className="pEXWP">
        //                         <div className="gbtfIe">
        //                             <p className="hJMpdk">Technical Rating</p>
        //                         </div>
        //                     </div>
        //                 </th>
        //             </thead>
        //             <tbody>
        //                 <ScreenerCard />
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
        <>
            <Holdings />
        </>
    );
};

export default Funds;
