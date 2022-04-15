import { SET_CURRENT_COIN, SET_CURRENT_CURRENCY } from "./types";

export const setCoin = (value = "BTC") => {
    return {
        type: SET_CURRENT_COIN,
        value,
    };
};

export const setCurrency = (value = "USDT") => {
    return {
        type: SET_CURRENT_CURRENCY,
        value,
    };
};
