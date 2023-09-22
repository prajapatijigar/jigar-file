import React from 'react';

const InputData = () => {
    

     const onChange = (e) => {
        console.log("called",e);
     }
    return (
        <>
          <input type="text" ref={onChange} />
        </>
    );
};

export default InputData;