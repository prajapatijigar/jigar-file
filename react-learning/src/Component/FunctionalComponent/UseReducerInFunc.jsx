import React, { useReducer } from 'react';
const initialValue = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return 0;
        default:
            return alert("no valid")
    }
}

const UseReducerInFunc = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <p>syntext  is usereducer hook: const [state, dispatch] = useReducer(reducerMethod, initialValue)</p>
            <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</p>
            <p>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</p>
            <p><a href="https://youtu.be/TlSJVL3dvRM?si=zFxHmt2kbI3ChJx2">Usereducer hook videos</a>(yoshita jain)</p>
            <br />
            <br />
            <p> count :{count}</p>
            <button onClick={() => dispatch("increment")}>increment</button>
            <button onClick={() => dispatch("decrement")}>decrement</button>
            <button onClick={() => dispatch("reset")}>reset</button>

        </div>
    );
};

export default UseReducerInFunc;