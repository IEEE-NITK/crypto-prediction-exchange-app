import React from "react";
import { useSelector } from "react-redux";
import { TechnicalAnalysis } from "react-tradingview-embed";

const TechAnalysisWidget = () => {
    const currentCoin = useSelector((state) => state.data.coin);
    const currentCurrency = useSelector((state) => state.data.currency);

    return (
        <>
            <div className="analysis">
                <TechnicalAnalysis
                    widgetProps={{
                        interval: "1m",
                        width: "100%",
                        height: "100%",
                        isTransparent: false,
                        height: 450,
                        symbol: `COINBASE:${currentCoin}${currentCurrency}`,
                        showIntervalTabs: true,
                        locale: "en",
                        colorTheme: "dark",
                    }}
                />
            </div>
        </>
    );
};

export default TechAnalysisWidget;
