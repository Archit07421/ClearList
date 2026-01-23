import TodoItem from "./TodoItem";


const TodoItems = ({ todoContent , handleDelete }) => {
  return (
    <div >
      {todoContent.map((item) => (
        <TodoItem key = {item.text} todoDate={item.date} handleDelete={handleDelete} todoName={item.text}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;