const defaultState = {
    cash: 0,
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

export const cashReducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case ADD_CASH:
            return { ...state, cash: state.cash + actions.payload };
        case GET_CASH:
            return { ...state, cash: state.cash - actions.payload };
        default:
            return state;
    }
};

export const addCashAction = (payload) => ({ type: ADD_CASH, payload });
export const getCashAction = (payload) => ({ type: GET_CASH, payload });
