import React from "react";

function TodoStats({ todo }) {
  //calc avg prio
  let average = 
  todo.reduce((acc, cur) => {
    console.log(acc, cur)
    return acc + cur.priority
  }, 0) / todo.length;

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="container">
    <div className="feedback-stats">
      <h4>{todo.length} Items</h4>
      <h4>Average Priority: {isNaN(average) ? 0 : average}</h4>
    </div>
    </div>
  );
}

export default TodoStats;
