import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoData from "./data/tododata";


function App() {
  const [todo, setTodo] = useState(TodoData);

  return (
    <>
      <Header text="To Do App"/>
      <div className="container">
        <TodoList todo = {todo}/>
      </div>
    </>
  );
}

export default App;
