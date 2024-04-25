const defaultState = {
    cash: 0,
};

export const cashReducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + actions.payload };
        case "GET_CASH":
            return { ...state, cash: state.cash - actions.payload };
        default:
            return state;
    }
};
