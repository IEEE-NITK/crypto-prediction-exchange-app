import React from "react";
import { TechnicalAnalysis } from "react-tradingview-embed";

const TechAnalysisWidget = () => {
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
                        symbol: "COINBASE:BTCUSD",
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
