import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";

function App() {
    // useDispatch нужен для dispatch - изменяет состояние
    // useSelector нужен для полученя состояния
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash);

    const getCash = (cash) => {
        dispatch({ type: "ADD_CASH", payload: cash });
    };
    const addCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash });
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
            </div>
        </div>
    );
}

export default App;
