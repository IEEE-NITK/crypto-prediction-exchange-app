import React from "react";
import { CryptocurrencyMarket } from "react-tradingview-embed";

const CryptoMarket = () => {
    return (
        <div>
            <CryptocurrencyMarket
                widgetProps={{
                    width: "100%",
                    height: "780",
                    defaultColumn: "overview",
                    screener_type: "crypto_mkt",
                    displayCurrency: "USD",
                    colorTheme: "dark",
                    locale: "in",
                }}
            />
        </div>
    );
};

export default CryptoMarket;
