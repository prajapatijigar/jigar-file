import React, { useState } from "react";

const ControlledClass = () => {
  const [input, setInput] = useState("default");
  const [state, setState] = useState("default value");
  const [inp, setInp] = useState()

  

  return (
    <>
      <h1>Hii, {state}</h1>
      <input
        type="text"
        placeholder="enter  your name"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button>click</button>

      <p>{input}</p>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <br />
      <form action="post">
        <br />
        <label htmlFor="">
          username :
          <input type="text" onChange={(e) => {setInp(e.target.value)}} />
          &nbsp;{inp}
        </label>
      </form>
    </>
  );
};

export default ControlledClass;
