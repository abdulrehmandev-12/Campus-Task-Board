import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard.jsx";

function App() {
  // Task 1: Create and display tasks using useState.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      category: "Academics",
    },
    {
      id: 2,
      title: "Prepare DBMS Lab",
      category: "Lab",
    },
    {
      id: 3,
      title: "Submit GitHub Repository",
      category: "Submission",
    },
  ]);

  const [newTask, setNewTask] = useState("");

  // Task 4: This effect runs whenever the task list changes.
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total tasks:", tasks.length);
  }, [tasks]);

  // Task 3: Add a new task without refreshing the page.
  function addTask(event) {
    event.preventDefault();

    const title = newTask.trim();

    if (title === "") {
      return;
    }

    const newTaskObject = {
      id: Date.now(),
      title: title,
      category: "General",
    };

    setTasks((currentTasks) => [...currentTasks, newTaskObject]);
    setNewTask("");
  }

  return (
    <main className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">REACT FUNDAMENTALS</p>
          <h1>Campus Task Board</h1>
          <p className="subtitle">
            Keep track of your campus assignments, labs, and submissions.
          </p>
        </div>

        <div className="task-count">
          <strong>{tasks.length}</strong>
          <span>Tasks</span>
        </div>
      </header>

      <section className="add-panel">
        <form onSubmit={addTask}>
          <label htmlFor="taskInput">Add a new campus task</label>

          <div className="input-row">
            <input
              id="taskInput"
              type="text"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              placeholder="Enter a campus task..."
            />

            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>

      <section className="tasks-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TASK LIST</p>
            <h2>Current Tasks</h2>
          </div>

          <span className="total-badge">{tasks.length} total</span>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>

      <footer>
        <p>Campus Task Board • React CLO-1 Mini Project</p>
      </footer>
    </main>
  );
}

export default App;