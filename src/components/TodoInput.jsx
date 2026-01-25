import { useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoInput = () => {
  const { handleInput } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = todoDueDateElement.current.value;
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";

    handleInput(todoName, todoDueDate);
  };

  return (
    <div className="container-fluid">
      <form className="row" onSubmit={handleAddButton}>
        <div className="group flex flex-col gap-2 p-4 rounded-3xl border border-slate-700 bg-[#121214]  transition-all duration-300 mt-4">
          <input
            type="text"
            ref={todoNameElement}
            className="bg-transparent border-none outline-none
    focus:outline-none focus:ring-0 text-sm  placeholder:text-[#90a4cb] w-full font-light"
            placeholder=" What needs to be done? "
          />
          <div className="col-4">
            <input
              className="absolute opacity-0 pointer-events-none text-slate-400"
              type="date"
              ref={todoDueDateElement}
            />
            <div className="flex justify-between">
            <button
              type="button"
              onClick={() => todoDueDateElement.current?.showPicker()}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition"
            >
              <span class="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-sm">Date</span>
            </button>

            <div className="col-2">
          <button type="submit" className="bg-[#0d59f2] px-2 py-1 rounded-full text-sm ">
            Add Task
          </button>
        </div>
        </div>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default TodoInput;
