import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoContent = contextObj.todoContent;
  
  
  return (
    <div >
      {todoContent.map((item) => (
        <TodoItem key = {item.text} todoDate={item.date} todoName={item.text} ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;