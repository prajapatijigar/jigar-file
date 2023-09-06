import React, { useCallback, useState } from 'react';

const UseCallbackInFuncCompo = () => {

    const funcount = new Set()

    const [count, setcount] = useState(0)
    const [num, setnum] = useState(0)

    const increase = useCallback(() => {
        setcount(count + 1)
    }, [count])
    const decrease = useCallback(() => {
        setcount(count - 1)
    }, [count])
    const increasenum = useCallback(() => {
        setnum(num + 1)
    }, [num])


    funcount.add(increase);
    funcount.add(decrease);
    funcount.add(increasenum);
    console.log("func-size", funcount.size);
    console.log("funcount", funcount);

    return (
        <div>
            <h2>usecallback in functional</h2>
            <p>count : {count}</p>
            <p>num : {num}</p>
            <button className='btn btn-primary' onClick={increase}>increase</button> &nbsp;
            <button className='btn btn-primary' onClick={decrease}>decrease</button> &nbsp;
            <button className='btn btn-primary' onClick={increasenum}>increasenum</button>

        </div>
    );
};

export default UseCallbackInFuncCompo;