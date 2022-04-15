import { SET_CURRENT_COIN, SET_CURRENT_CURRENCY } from "../actions/types";

const initialState = {
    coin: "ETH",
    currency: "BTC",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_COIN:
            return {
                ...state,
                coin: action.value,
            };
        case SET_CURRENT_CURRENCY:
            return {
                ...state,
                currency: action.value,
            };
        default:
            return state;
    }
}
