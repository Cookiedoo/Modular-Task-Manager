
import React from "react";

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li
      onClick={() => onToggle(task.id)}
      style={{
        cursor: "pointer",
        textDecoration: task.completed ? "line-through" : "none",
        opacity: task.completed ? 0.6 : 1,
      }}>

      <span>
        {task.text}
        {task.dueDate && (<small> (Due: {task.dueDate})</small>)}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
