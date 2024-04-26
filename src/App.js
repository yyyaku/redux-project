import { useDispatch, useSelector } from "react-redux";
import {
    addCustomerAction,
    removeCustomerAction,
} from "./store/customersReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { fetchCustomers } from "./store/asuncCustomer/customers";

function App() {
    // useDispatch нужен для dispatch - изменяет состояние
    // useSelector нужен для полученя состояния
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    };

    const getCash = (cash) => {
        dispatch(getCashAction(cash));
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div className='App'>
            <div style={{ fontSize: "40px" }}>{cash}</div>
            <div>
                <button onClick={() => getCash(Number(prompt()))}>
                    Снять деньги
                </button>
                <button onClick={() => addCash(Number(prompt()))}>
                    Положить деньги
                </button>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <button onClick={() => dispatch(fetchCustomers())}>
                    Показать всех клиентов
                </button>
            </div>
            {customers.length > 0 ? (
                customers.map((customer) => (
                    <div
                        onClick={() => removeCustomer(customer)}
                        key={customer.id}
                    >
                        {customer.name}
                    </div>
                ))
            ) : (
                <div>Клиенты не найдены!</div>
            )}
        </div>
    );
}

export default App;
