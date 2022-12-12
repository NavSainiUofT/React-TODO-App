import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoData from "./data/tododata";


function App() {
  const [todo, setTodo] = useState(TodoData);
  const deleteTodo=(id)=>{
    if(window.confirm("Are you sure you want to delete the TODO ITEM?")){

      setTodo(todo.filter((item)=>item.id !== id))
    }
    
  }

  return (
    <>
      <Header/>
      <div className="container">
        <TodoList todo = {todo} handleDelete={deleteTodo}/>
      </div>
    </>
  );
}

export default App;
