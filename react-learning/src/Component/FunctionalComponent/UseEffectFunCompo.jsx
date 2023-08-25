import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectFunCompo = () => {
    const [count, setCount] = useState(0)
    const [num, setnum] = useState(0)


    useEffect(() => {
        console.log("callled useeffect");
        const Interval =  setTimeout(() => {
            setCount(count + 1)
        }, "1000")
        return () => {
            clearInterval(Interval)
            console.log("called return");
        }
       
    }, [count])

    useLayoutEffect(() => {
        console.log("callled uselayouteeffect");
        const Interval =  setTimeout(() => {
            setnum(num + 1)
        }, "1000")
        return () => {
            clearInterval(Interval)
            console.log("called layout return");
        }
       
    }, [count])
    return (
        <div>
            <p>count : {count}</p>
            <p>num : {num}</p>
        </div>
    );
};

export default UseEffectFunCompo;