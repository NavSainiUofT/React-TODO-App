import React from "react";
import TodoItem from "./TodoItem";
import {motion, AnimatePresence} from 'framer-motion';

function TodoList({ todo, handleDelete }) {
  if (!todo || todo.length === 0) {
    return <p>No Items Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
      {todo.map((item) => (
        <motion.div 
        key={item.id}
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        >
        <TodoItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        ></TodoItem>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}

export default TodoList;
