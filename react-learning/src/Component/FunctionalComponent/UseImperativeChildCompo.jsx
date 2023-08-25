import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ChildCompo = (props, ref) => {
      
    const inputRef = useRef(null)

    useImperativeHandle (ref,() => {
       
        return {
            focus(){
                inputRef.current.value ="1000"
                inputRef.current.style.color = "blue"
            }
        }

    } ,[]) 
        
    


    return (
        <input type="text" ref={inputRef} />
    );
};

export default forwardRef(ChildCompo);