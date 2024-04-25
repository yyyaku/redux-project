const defaultState = {
    customers: [],
};

export const customersReducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + actions.payload };
        case "GET_CASH":
            return { ...state, cash: state.cash - actions.payload };
        default:
            return state;
    }
};
