import React, {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
 const [task, setTasks] = useState([]);

 const addTask = (text, dueDate) => {
  const newTask = {
    id: Date.now(),
    text,
    dueDate,
    completed: false,
    createdAt: new Date().toISOString()
  };

  setTasks(prev => [...prev, newTask]);
 };

 const deleteTask = (id) => {
  setTasks(prev => prev.filter(task => task.id !== id));
 };

 return (
  <div style= {{ maxWidth: "600px", margin: " 0 auto", }}>
    <h1>Modular Task Manager</h1>
    <TaskForm onAdd={addTask} />
    <TaskList tasks={task} onDelete={deleteTask} />
  </div>
 );
}

export default App;
