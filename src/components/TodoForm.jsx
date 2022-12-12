import React from "react";
import Card from "./shared/Card";
import { useState } from "react";

function TodoForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>What is your Todo Item?</h2>
        {}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your Todo Item"
            value={text}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </Card>
  );
}

export default TodoForm;
