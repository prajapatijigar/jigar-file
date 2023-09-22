import React, { useState } from 'react';

const StateInFunctiCompo = () => {
    const [state, setstate] = useState("default")
    const [num, setnum] = useState(0)


    const onClick = () => {
        setstate("jigr")
    }
    const onclickHadler = () => {
        setnum(num + 1)
    }

    return (
        <>
            <ol>
                <li>What is the useState() Hook used for?</li>
                <p>=&gt; The useState() Hook is a built-in Hook in React that allows functional components to manage local state</p>
                <p>=&gt; It returns an array with two elements: the current state value and a function to update the state.</p>
                <p>=&gt; It replaces the need for using a class and this.setState() to manage state.</p>
            </ol>
            <h2>state: {state}:Roll num: {num}</h2>
            <button className='btn btn-primary' onClick={onClick}>onClick</button>
            &nbsp;&nbsp;

            <button className='btn btn-secondary' onClick={onclickHadler}>roll no.</button>

        </>
    );
};

export default StateInFunctiCompo;