import React, { useState } from 'react';

const ControlledClass = () => {

    const [state,setState] = useState()
    
    const onchange = (e) =>{
        // console.log("called");
        console.log(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder='enter your name' value="" onClick={onchange} />
            <button>click</button>
            <h2>hello</h2>
        </div>
    );
};

export default ControlledClass;