import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootRedicer = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
});

export const store = createStore(
    rootRedicer,
    composeWithDevTools(applyMiddleware(thunk))
);
