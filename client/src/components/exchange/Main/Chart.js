import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AdvancedChart } from "react-tradingview-embed";
import "./Chart.css";

const Chart = () => {
    const currentCoin = useSelector((state) => state.data.coin);
    const currentCurrency = useSelector((state) => state.data.currency);

    return (
        <div id="trading-view-chart" className="chart-container">
            <AdvancedChart
                widgetProps={{
                    width: "Autosize",
                    height: 450,
                    symbol: `COINBASE:${currentCoin}${currentCurrency}`,
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
