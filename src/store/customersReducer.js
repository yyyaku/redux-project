const defaultState = {
    customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE__CUSTOMER";

export const customersReducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, actions.payload],
            };
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(
                    (customer) => customer.id !== actions.payload
                ),
            };
        default:
            return state;
    }
};

export const addCustomerAction = (payload) => ({
    type: ADD_CUSTOMER,
    payload,
});
export const removeCustomerAction = (payload) => ({
    type: REMOVE_CUSTOMER,
    payload,
});
