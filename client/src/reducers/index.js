import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
import authReducers from "./authReducers";
import stockReducers from "./stockReducers";
import errorReducers from "./errorReducers";

export default combineReducers({
    auth: authReducers,
    stock: stockReducers,
    error: errorReducers,
    data: currencyReducer,
});
