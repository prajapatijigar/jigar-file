import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectFunCompo = () => {
    const [count, setCount] = useState(0)
    const [num, setnum] = useState(0)


    useEffect(() => {
        console.log("callled useeffect");
        const Interval = setTimeout(() => {
            setCount(count + 1)
        }, "1000")
        return () => {
            clearInterval(Interval)
            console.log("called return");
        }

    }, [count])

    useLayoutEffect(() => {
        console.log("callled uselayouteeffect");
        const Interval = setTimeout(() => {
            setnum(num + 1)
        }, "1000")
        return () => {
            clearInterval(Interval)
            console.log("called layout return");
        }

    }, [count])
    return (
        <div>
            <ol>
                <li>what is useeffect hook?</li>
                <p>=&gt; useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
                <p>=&gt; The useEffect() Hook runs after every render by default.</p>
                <p>=&gt; The useEffect() Hook is a built-in Hook in React that allows functional components to perform side effects. </p>
                <p>=&gt; Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
                <p>=&gt; useEffect (&lt;function&gt;, [dependency])</p>
            </ol>
            <p>count : {count}</p>
            <p>num : {num}</p>
        </div>
    );
};

export default UseEffectFunCompo;