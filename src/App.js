import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toogleReminder = async (id) => {
      const toggle = await fetch(`http://localhost:5000/tasks/${id}`).then((res) => res.json());
      const update = { ...toggle, reminder: !toggle.reminder };
      // console.log(toggle);
      // console.log("update:", update);
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          // bu kısım önemli yanlış yazınca çalışmıyor
        },
        body: JSON.stringify(update),
      });
      const data = await res.json()

      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      );
    }

  const onAddTask = async (task) => {
    console.log(task);
    const res = await fetch("http://localhost:5000/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // bu kısım önemli yanlış yazınca çalışmıyor
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    // console.log("res:", res);
    // console.log("data:", data);
    setTasks([...tasks, data]);
    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAdd(!showAdd)}
        showAdd={showAdd}
      />
      {showAdd && <AddTask onAdd={onAddTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} />
      ) : (
        "There is no Task"
      )}
    </div>
  );
}

export default App;
