import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";

const rootRedicer = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
});

export const store = createStore(rootRedicer);
