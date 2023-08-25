import React, { useState } from 'react';

const StateInFunctiCompo = () => {
     const [state, setstate] = useState("default")
     const [num, setnum] = useState(0)

    
    const onClick =() => {
        setstate("jigr")
    }
    const onclickHadler =() => {
        setnum(num + 1)
    }

    return (
        <div>
            <h2>state: {state}:Roll num: {num}</h2>
            <button className='btn btn-primary' onClick={onClick}>onClick</button>
            &nbsp;&nbsp;
           
            <button className='btn btn-secondary' onClick={onclickHadler}>roll no.</button>

        </div>
    );
};

export default StateInFunctiCompo;