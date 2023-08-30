// import React, { createContext, useContext, useReducer, useState } from 'react';

// const ThemeContext = createContext(null)

// const initialvalue = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case "incremment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         case "reset":
//             return 0;
//         default:
//             return alert("red alert")

//     }
// }
// const UseContextTask = () => {
//     // const [state, setTheme] = useState(0)
//     const [count, dispatch] = useReducer(reducer, initialvalue)

//     return (
//         <div>
//             <ThemeContext.Provider value={count}>
//                 <Form />
//             </ThemeContext.Provider>
//             {/* <Button onclick={() => { setTheme(state + 1) }}>
//                 TOggle Botton
//             </Button> */}
//             <Button onclick={() => dispatch(incremment)}>increment</Button>
//             <Button onclick={() => dispatch(decremment)}>decrement</Button>
//             <Button onclick={() => dispatch(reset)}>reset</Button>

//         </div>
//     );
// };

// function Form() {
//     return (
//         <>
//             <Panel title="welcome">

//             </Panel>
//         </>
//     )
// }

// function Panel({ title, children }) {
//     const count = useContext(ThemeContext)
//     return (
//         <section>
//             PanelComponent
//             <h2>{title}</h2>
//             <p>{count}</p>
//             {children}
//         </section>
//     )
// }

// function Button({ onclick, children }) {
//     return (
//         <>
//             <button onClick={onclick}>{children}</button>
//         </>
//     )
// }

// export default UseContextTask


import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ color: "", size: "" })
// const SizeContext = createContext(null)
const UseContextTask = () => {
    const [color, setColor] = useState("primary")
    const [size, setSize] = useState("md")


    return (
        <div>
            <ThemeContext.Provider value={{ color, size }}>
                {/* <SizeContext.Provider value={size}> */}
                <Form />
                {/* </SizeContext.Provider> */}
            </ThemeContext.Provider>
            <br />
            {/* <Button onclick={() => { setTheme(state + 1) }}>
                TOggle Botton
            </Button> */}
            {/* <Button onclick={() => dispatch(incremment)}>increment</Button>
            <Button onclick={() => dispatch(decremment)}>decrement</Button>
            <Button onclick={() => dispatch(reset)}>reset</Button> */}
            <Button onclick={() => { setColor("primary") }}>primary</Button>
            <Button onclick={() => { setColor("secondary") }}>secondary</Button>
            <Button onclick={() => { setColor("success") }}>success</Button>
            <Button onclick={() => { setColor("danger") }}>Danger</Button>
            <Button onclick={() => { setColor("warning") }}>Warning</Button>
            <Button onclick={() => { setColor("info") }}>Info</Button>
            <Button onclick={() => { setColor("light") }}>Light</Button>
            <Button onclick={() => { setColor("dark") }}>Dark</Button><br />
            <Button onclick={() => { setSize("lg") }}>Large</Button>
            <Button onclick={() => { setSize("sm") }}>Small</Button>
        </div>
    );
};

function Form() {
    return (
        <>
            <Panel title="welcome">
                <Button>login</Button>
            </Panel>
        </>
    )
}

function Panel({ title, children }) {
    const {color,size} = useContext(ThemeContext)
    return (
        <section>
            PanelComponent
            <h2>{title}</h2>
            {/* <p>{"btn-"+ color + " btn-"+ size }</p> */}
            <p>{color}</p>
            <p>{size}</p>
            {children}
        </section>
    )
}

function Button({ onclick, children }) {
    const {color,size} = useContext(ThemeContext)
    // const size = useContext(ThemeContext)
    const className = `btn btn-${color} btn-${size}` 
    return (
        <>
            <button className={className} onClick={onclick}>{children}</button>
        </>
    )
}

export default UseContextTask

