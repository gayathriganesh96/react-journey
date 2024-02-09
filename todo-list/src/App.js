import './App.css';
import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]); //initial value will be empty array
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);
    setNewTask(""); // Clear the input field after adding the task
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  // const deleteTask = (taskName) => {
  //   const newTodoList = todoList.filter((task) => {
  //     return task !== taskName; // Simplified filter condition
  //   });
  //   setTodoList(newTodoList);
  // };

  return (
    <div className="App">
      <div className="addTask">
        <div style={{ position: "relative", display: "inline-block" }}>
          <input value={newTask} onChange={handleChange} required />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="list">
        <ul>
          {todoList.map((task) => ( // Added unique key prop and fixed syntax        
            <li>
              {task.taskName}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
            //   <h1>{task.taskName}</h1>
            //   <button onClick={() => deleteTask(task.id)}>x</button>
            // </div>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
