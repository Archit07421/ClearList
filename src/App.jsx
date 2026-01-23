import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import {  useReducer} from 'react';
import { TodoItemsContext } from './store/todo-items-store';

const todoContentReducer = (currValue , action) =>{
  let newTodoItems = currValue;
  if(action.type === "NEW_ITEM"){
    
    newTodoItems= [...currValue , {text:action.payload.itemName , date:action.payload.itemDate},];
    
  
  }

  if(action.type === "DELETE_ITEM"){
    newTodoItems= currValue.filter((item)=> item.text !== action.payload.itemName );
    
  }
  return newTodoItems;
}


function App() {

  const [todoContent , dispatchTodoContent]= useReducer(todoContentReducer ,[] )

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
    const newItemAction = {
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDate
      }
    };

    dispatchTodoContent(newItemAction);

    
    
    // settodoContent((currValue)=>{
    //   const newTodoItems = [...currValue , {text:itemName , date:itemDate}];
    //   return newTodoItems;
    // });
    
  }

  const handleDelete = (deleteItem) =>{
     
    const deleteItemAction = {
      type:"DELETE_ITEM",
      payload:{
        itemName:deleteItem,
      }
    };

    dispatchTodoContent(deleteItemAction);
  }

//  const [todoContent , settodoContent] = useState([]);

  return (
    <TodoItemsContext.Provider value={{
        todoContent,
        handleInput,
        handleDelete,
      }}>
      <div className="text-center">
          <h1>TODO APP</h1>

        <TodoInput ></TodoInput>
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems ></TodoItems>
          
      </div>
    </TodoItemsContext.Provider>
  );
}


export default App;