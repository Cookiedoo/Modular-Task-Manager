
import React from "react";
import TaskItem from "./TaskItem";

function TaskList ({ tasks, onDelete }) {
    return (
        <u1>
            {tasks.map(task => (
                <TaskItem key = {task.id} task={task} onDelete={onDelete} />
            ))}
        </u1>
    );
}

export default TaskList;