import { FaTimes } from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'

function TodoItem({item, handleDelete}) {

  return (
    <Card>
        <div className="num-display">{item.priority}</div>
        <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes color="#CCD6A6"></FaTimes>
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

export default TodoItem