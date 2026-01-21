import React, {useState, useEffect} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import styles from "./App.module.css";

function App() {
 const [tasks, setTasks] = useState([]);
 const [lastDeleted, setLastDeleted] = useState(null);
 const [filter, setFilter] = useState("all");

 useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
 }, []);

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
 }, [tasks]);


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
  const taskToDelete = tasks.find(task => task.id === id);

  setTasks(prev => prev.filter(task => task.id !== id));
  setLastDeleted(taskToDelete);
};


const undoDelete = () => {
  if (lastDeleted) {
    setTasks(prev => [...prev, lastDeleted]);
    setLastDeleted(null);
  }
};

 const toggleTask = (id) => {
  setTasks(prev => 
    prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

const renderFilterButton = (type, label) => (
  <button 
  onClick= {() => setFilter(type)}
  style={{ fontWeight: filter === type ? "bold" : "normal"}}
  >
    {label}
    </button>
);

const filteredTasks = tasks.filter(task => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true;
});

return (
  <div  className = {styles.container}>
    <h1 className = {styles.title}>Modular Task Manager</h1>
    <p  className = {styles.subtitle}>Track and manage your tasks</p>

    <TaskForm onAdd={addTask} />

    <div style={{ margin: "1rem 0" }}>
     {renderFilterButton("all", "All")}
     {renderFilterButton("active", "Active")}
     {renderFilterButton("completed", "Completed")}
    </div>

    <TaskList
      tasks={filteredTasks}
      onDelete={deleteTask}
      onToggle={toggleTask}
    />

    {lastDeleted && (
      <div style={{ marginTop: "1rem" }}>
        <button onClick={undoDelete}>Undo Delete</button>
      </div>
    )}
  </div>
);
};
 
export default App;
