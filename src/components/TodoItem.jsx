import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({todoName , todoDate}) {

    const {handleDelete} = useContext(TodoItemsContext);
    const {todoContent} =useContext(TodoItemsContext)
  return (
    <div className="container-fluid">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
        <button type="button" className="btn btn-outline-danger w-100" onClick={()=>handleDelete(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;