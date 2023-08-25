import React, {useRef} from "react"; 
import ChildCompo from "./UseImperativeChildCompo"
const UseImperativefunCompo = () =>{
    
    const ref = useRef(null)
    function updateInput () {
        ref.current.focus()
    }
 
    return(
        <>
            <h2>1. What is ref ?</h2>
            <p> =&gt; <strong>Refs are a function provided by React to access the DOM element and the React element that you might have created on your own.</strong></p>
            <p> =&gt; They are used in cases where we want to change the value of a child component, without making use of props and all. </p>
            <p> =&gt; They have wide functionality as we can use callbacks with them.</p>

            <h2>2. what is forwardRef</h2>
            <p> =&gt; forwardRef lets your component expose a DOM node to parent component with a ref.</p>

            <ChildCompo ref = {ref} />
            <button onClick={updateInput}>update input</button>
            

        </>
    )
}

export default UseImperativefunCompo
