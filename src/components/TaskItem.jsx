
import React from "react";

function TaskItem ({task, onDelete }) {
    return (
        <li>
            <span>{task.text}</span>
            {task.dueDate && <small> (Due: {task.dueDate})</small>}
            <button onClick= {() => onDelete(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;