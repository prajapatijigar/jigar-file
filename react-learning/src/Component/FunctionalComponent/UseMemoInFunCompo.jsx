import React, { useMemo, useState } from 'react';

const UseMemoInFunCompo = () => {

    const [number, setNumber] = useState(0)
    const [count, setcount] = useState(0)

    // use memo start
    const squareNum = useMemo(() => {
        return square(number);
    },[number])

    // use memo end

    
    function square(number) {
        return Math.pow(number, 2)
    }

    const onchangeHadler = (e) => {
        setNumber(e.target.value)
    }

    const onclickHadler = () => {
        setcount(count + 1)
    }

    return (
        <div>
            <input type="number" value={number} onChange={onchangeHadler} />
            <p>output: {squareNum}</p>
            <button onClick={onclickHadler}>count++</button>
            <h2>count : {count}</h2>

            {/* <p>{number}</p> */}
        </div>
    );
};


export default UseMemoInFunCompo;


