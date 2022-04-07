import { createStore } from "redux";
import currencyReducer from "./reducers";

export const store = createStore(currencyReducer);
