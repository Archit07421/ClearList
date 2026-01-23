import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const {todoContent} = useContext(TodoItemsContext);
  
  return (todoContent && todoContent.length === 0 && <p>All tasks completed</p>);
};

export default WelcomeMessage;
