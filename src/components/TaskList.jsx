
import React from "react";
import TaskItem from "./TaskItem";

function TaskList ({ tasks, onDelete, onToggle }) {
    return (
        <u1>
            {tasks.map(task => (
                <TaskItem key = {task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </u1>
    );
}

export default TaskList;