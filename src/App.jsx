import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoData from "./data/tododata";
import TodoStats from "./components/TodoStats";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import About from "./pages/About";

function App() {
  const [todo, setTodo] = useState(TodoData);

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete the TODO ITEM?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
    console.log(newTodo);
  };

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
              
                <div className="container">
                  <TodoForm handleAdd={addTodo} />
                  <TodoStats todo={todo} />
                  <TodoList todo={todo} handleDelete={deleteTodo} />
                  
                </div>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
