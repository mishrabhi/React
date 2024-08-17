import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    isCompleted: false,
    assignee: "",
  });
  const [filterAssignee, setFilterAssignee] = useState("");

  const baseURL = "http://localhost:5000/tasks";

  //Fetch all tasks from server
  const getAllTasks = async () => {
    try {
      const response = await axios.get(baseURL);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Add New Task
  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(baseURL, newTask);
      setNewTask({ title: "", isCompleted: false, assignee: "" });
      getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //Delete a Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //Filtering task by assignee

  const filterTaskByAssignee = () => {
    return tasks.filter((task) =>
      task.assignee.toLowerCase().includes(filterAssignee.toLowerCase())
    );
  };

  //Show incomplete task
  const showIncompleteTasks = () => {
    return tasks.filter((task) => !task.isCompleted);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="container">
      <h1>Advanced Task Manager</h1>

      {/* Add New Task Form */}
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Assignee"
          value={newTask.assignee}
          onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={newTask.isCompleted}
            onChange={(e) =>
              setNewTask({ ...newTask, isCompleted: e.target.checked })
            }
          />{" "}
          Completed
        </label>
        <button type="submit">Add Task</button>
      </form>

      {/* Task Actions */}
      <div className="actions">
        <button onClick={getAllTasks}>Get All Tasks</button>
        <button onClick={() => setTasks(showIncompleteTasks)}>
          Show Incomplete Tasks
        </button>
        <input
          type="text"
          placeholder="Filter by Assignee"
          value={filterAssignee}
          onChange={(e) => setFilterAssignee(e.target.value)}
        />
        <button onClick={() => setTasks(filterTaskByAssignee)}>
          Filter Tasks
        </button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.isCompleted ? "completed" : ""}>
            {task.title} (Assignee: {task.assignee})
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
