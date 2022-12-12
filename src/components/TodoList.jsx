import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todo, handleDelete}) {
    if(!todo || todo.length === 0){
        return <p>No Items Yet</p>
    }
  return (
    <div className="feedback-list">
        {todo.map((item)=>(
            <TodoItem key={item.id} item={item} handleDelete={handleDelete}></TodoItem>
        ))}
    </div>
  )
}

export default TodoList