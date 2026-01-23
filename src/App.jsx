import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';

function App() {

  // const initialtodoContent = [
  //   {
  //     text:"go to school",
  //     date:"23/07/2026"
  //   },
  //   {
  //     text:"win a hackathon",
  //     date:"23/07/2026"
  //   }
  // ]

  const handleInput = (itemName , itemDate) =>{
    console.log(`the name is:${itemName} and the date is:${itemDate}`);
    const newTodoItems = [...todoContent , {text:itemName , date:itemDate}];
    settodoContent(newTodoItems);
  }

  const handleDelete = (deleteItem) =>{
    const newDelete = todoContent.filter((item)=> item.text !== deleteItem );
    settodoContent(newDelete);
  }

 const [todoContent , settodoContent] = useState([]);

  return (
    <div className="text-center">
      <h1>TODO APP</h1>

     <TodoInput handleInput={handleInput}></TodoInput>
     {todoContent.length === 0 && <WelcomeMessage></WelcomeMessage>}
     <TodoItems todoContent={todoContent} handleDelete={handleDelete}></TodoItems>
      
    </div>
  );
}


export default App;