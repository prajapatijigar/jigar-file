import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null)
const UseContextInFuncCompo = () => {
    const [theme, setTheme] = useState("dark")
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <Form />
            </ThemeContext.Provider>
            <Button onclick={() => { setTheme((theme === "dark") ? "light" : "dark"); }}>
                TOggle Botton
            </Button>
        </div>
    );
};

function Form() {
    return (
        <>
            <Panel title="welcome">
                {/* {/* <Bottun>sign in</Bottun>
                <Button>Log in</Button> */}
                <Button>Sign In</Button>&nbsp;
                <Button>Log In</Button>
            </Panel>
        </>
    )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext)
    const className = "panel-" + theme
    return (
        <section className={className}>
            PanelComponent
            <h2>{title}</h2>
            <p>{theme}</p>
            {children}
        </section>
    )
}

function Button({ onclick, children }) {
    const theme = useContext(ThemeContext)
    const className = "button-" + theme
    return (
        <>
            <button className={className} onClick={onclick}>{children}</button>
        </>
    )
}


export default UseContextInFuncCompo;