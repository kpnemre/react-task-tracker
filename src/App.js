import React, { useState, useCallback, useMemo } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Go to Home",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    // console.log("id",id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toogleReminder = useCallback((id) => {
    // console.log("id",id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  },[tasks]);
  // console.log(tasks.length);
const onAddTask =((task)=>{
// console.log(task);
const id = tasks.length + 1;
// console.log(id);
const newTask = {id, ...task}
// console.log(newTask);
setTasks([...tasks, newTask])
})

// console.log(tasks);
  return (
    <div className="container">
 
      {/* <Header title={1}/> */}
      <Header title="Task Tracker" onAdd ={()=>setShowAdd(!showAdd)} showAdd={showAdd}/>
      {/* <Header /> */}
      {/* <AddTask onAdd ={onAddTask}/> */}

      {showAdd && <AddTask onAdd ={onAddTask}/>}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} />
      ) : (
        "There is no Task"
      )}
    </div>
  );
}

export default App;
