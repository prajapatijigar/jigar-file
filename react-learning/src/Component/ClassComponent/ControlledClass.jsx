import React, { useState } from 'react';

const ControlledClass = () => {

      const [state, setState] = useState("default value")

    return (
        <>
        <h1>Hii, {state}</h1>
        <input type="text" placeholder='enter  your name'  value={state} onChange={(e) => setState(e.target.value)}/>
        <button>click</button>
        
        </>
    );
};

export default ControlledClass;