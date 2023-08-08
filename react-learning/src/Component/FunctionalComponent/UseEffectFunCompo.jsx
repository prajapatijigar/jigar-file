import React, { useEffect, useState } from 'react';

const UseEffectFunCompo = () => {

    const [state, setState] = useState("something")
    const [count, setcount] = useState(0)


    
    

    useEffect(() =>{
        console.log("called useeffect");

       const Interval = setInterval(() => {
            setcount( count => count+1)
       }, 1000);

       return () =>{
        console.log("count clear");
             clearInterval(Interval)
       }
        
    },[])
    


    return (
        <div>

            <p>State: {state}</p>
            <p>count : {count}</p>
            <button onClick={() => { setState("Hii jigar") }}>click</button>
            &nbsp;

        </div>
    );
};

export default UseEffectFunCompo;