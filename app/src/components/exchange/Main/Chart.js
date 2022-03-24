import React, { useContext } from "react";
import { AdvancedChart } from "react-tradingview-embed";
import { CoinContext } from "../Exchange";
import "./Chart.css";

const Chart = () => {
    const coinContext = useContext(CoinContext);
    return (
        <div id="trading-view-chart" className="chart-container">
            <AdvancedChart
                widgetProps={{
                    width: "Autosize",
                    height: 450,
                    symbol: `COINBASE:${coinContext.activeCoin.coin}${coinContext.activeCoin.currency}`,
                    interval: "D",
                    timezone: "Etc/UTC",
                    theme: "dark",
                    style: "1",
                    locale: "in",
                    toolbar_bg: "#f1f3f6",
                    enable_publishing: false,
                    withdateranges: true,
                    hide_side_toolbar: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_d376d",
                }}
            />
        </div>
    );
};

export default Chart;
