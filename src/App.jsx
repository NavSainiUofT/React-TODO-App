import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoData from "./data/tododata";
import TodoStats from "./components/TodoStats";
import TodoForm from "./components/TodoForm";


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
      <TodoForm/>
      <TodoStats todo = {todo}/>
      </div>
      
      <div className="container">
        <TodoList todo = {todo} handleDelete={deleteTodo}/>
      </div>
    </>
  );
}

export default App;
