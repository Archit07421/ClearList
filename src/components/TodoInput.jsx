import { useState, useRef } from "react";

const TodoInput = ({ handleInput }) => {


  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  

  const handleAddButton = (event) => {
   
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = todoDueDateElement.current.value;
    todoNameElement.current.value="";
    todoDueDateElement.current.value="";

    handleInput(todoName, todoDueDate);
   
  };

  return (
    <div className="container-fluid">
      <form className="row" onSubmit={handleAddButton} >
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            className="w-100"
            placeholder="enter the teext here "
            
          />
        </div>
        <div className="col-4">
          <input className="w-100" type="date" ref={todoDueDateElement}  />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-outline-success w-100"
            
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
