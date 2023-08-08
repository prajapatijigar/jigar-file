import React, { useState } from 'react';

const StateInFunctiCompo = () => {

    const [username,setState] = useState("jigar prajapati")
     
    let btnClickHandle = ()=>{
        console.log(username);
        setState("kasamali")
    }

    return (
        <div>
            <p>state in functional component</p>
            <p>user name : {username}</p>
            <button className='btn btn-primary' onClick={btnClickHandle}>click</button>
        </div>
    );
};

export default StateInFunctiCompo;