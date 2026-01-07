import React, { useState } from "react";

function TaskForm({ onAdd }) {
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        onAdd(text, dueDate);
        setText("");
        setDueDate("");
    };

    return (
        <form onSubmit= {handleSubmit}>
            <input
              type="text"
              placeholder="add a task..."
              value={text}
              onChange= {e => setText(e.target.value)}
            />
            <input
              type="date"
              value={text}
              onChange={e => setText(e.target.value)}
              />
              <button type= "submit">Add</button>
        </form>
    );
}

export default TaskForm;