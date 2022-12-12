import React from 'react'

function TodoItem({item}) {


  return (
    <div className='card'>
        <div className="num-display">{item.priority}</div>
        <div className="text-display">
            {item.text}
        </div>
    </div>
  )
}

export default TodoItem