// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import {  useReducer} from 'react';
import { TodoItemsContext } from './store/todo-items-store';
import githubImg from "./asset/github.jpeg";


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
        <div className="bg-black font-display text-slate-100  min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-[480px] bg-[#18181b] rounded-xl shadow-2xl border border-[#27272a] overflow-hidden flex flex-col h-[85vh] px-6 py-4 ">
            <div className='flex justify-between mt-4'>
              <div className='flex items-centre gap-1 justify-center'>
                  <span class="material-symbols-outlined bg-[#0d59f2] w-fit p-1 rounded-full mb-1">check_circle</span>
                  <h1 class="text-white text-xl font-bold">Todo</h1>
              </div>
                <img src={githubImg} alt="GitHub" className="w-8 h-8 rounded-full" />

            </div>
            <h2 className='text-2xl font-bold mt-2  tracking-wide'>Workspace</h2>
            <div className='text-sm text-slate-400 '>Tuesday, Jan 26</div>
           

          <TodoInput ></TodoInput>
          <WelcomeMessage ></WelcomeMessage>
          <TodoItems ></TodoItems>
            
          </div>
        </div>
      
    </TodoItemsContext.Provider>
  );
}


export default App;