import SET_TICKER_COIN from "./types";

export const setTickerCoin = (value = "BTC") => {
    return {
        type: SET_TICKER_COIN,
        value,
    };
};
