import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import PrioSelect from "./PrioSelect";

function TodoForm({ handleAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newTodo = {
        text: text,
        priority: priority,
      };
      handleAdd(newTodo);

      setText('')
    }
  };
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 chars");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState(10);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>What is your Todo Item?</h2>
        <PrioSelect select={(prio) => setPriority(prio)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your Todo Item"
            value={text}
          />

          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Add
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default TodoForm;
