import Task from "./Task";
import React from 'react';


const Tasks = (props) => {
  
  console.log("Tasks: rendering")
  return (
    <>
      {props.tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </>
  );
};

export default React.memo(Tasks);
