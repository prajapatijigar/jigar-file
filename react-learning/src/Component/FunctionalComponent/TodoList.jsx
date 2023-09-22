import React, { useState } from "react";

const TodoList = () => {
  const [inp, setInp] = useState("");
  const [state, setState] = useState("");
  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    setInp("");
    setState("");
    setTask([...task, { inp, state }]);
   };

   const  deleteHandler = (key)=> {
    const deleteData = [...task]
      deleteData.splice(key,1)
      setTask(deleteData) 

   }

   const renderData = task.map((value,key) => {
    console.log("key",key,"value",value);
    return (
      <li key={key}>
        <div>
          <h5>{value.inp}</h5>
          <h6>{value.state}</h6>
        </div>
        <div>
          <button className="btn btn-danger my-2" onClick={deleteHandler}>Delete</button>
        </div>
      </li>
    )
   })

  //  console.log("renderData",renderData);

  
 
  return (
    <>
      <div>
        <h3 className="bg-black text-center text-danger font-italic">
          Todo List
        </h3>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="d-block my-3 px-5 text-center text-secondary"
          placeholder="Enter Your Task"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="d-block px-5 text-center text-secondary"
          placeholder="Enter Your state"
        />

        <button className="d-block my-5 btn btn-primary ">add</button>
      </form>
      <div className="my-5">
        <ol>{renderData}</ol>
      </div>
    </>
  );
};

export default TodoList;
