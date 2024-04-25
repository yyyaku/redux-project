import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const defaultState = {
    cash: 0,
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash - actions.payload };
        case "GET_CASH":
            return { ...state, cash: state.cash + actions.payload };
        default:
            return state;
    }
};

// store - объект, содержащий методы: getstate - получить состояние, dispatch - изменить состояние, и подписаться на изменение. Передаем туда reducer
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // Provider нужен для того, чтобы опрокидывать состояние в компоненты
    <Provider store={store}>
        <App />
    </Provider>
);
