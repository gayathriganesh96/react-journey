import './App.css';
import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]); //initial value will be empty array
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    setNewTask(""); // Clear the input field after adding the task
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName; // Simplified filter condition
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange} required />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, index) => ( // Added unique key prop and fixed syntax
          <div key={index}>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
