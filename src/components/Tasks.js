import Task from "./Task";
import React from 'react';
// import React, {useState} from 'react';

// const tasks =[

//           {
//             "id": 1,
//             "text": "Doctors Appointment",
//             "day": "Feb 5th at 2:30pm",
//             "reminder": true
//           },
//           {
//             "id": 2,
//             "text": "Meeting at School",
//             "day": "Feb 6th at 1:30pm",
//             "reminder": true
//           },
//           {
//             "id": 3,
//             "text": "Go to Home",
//             "day": "Feb 6th at 1:30pm",
//             "reminder": false
//           }

// ]

const Tasks = (props) => {
  // const [tasks, setTasks] = useState([

  //     {
  //         "id": 1,
  //         "text": "Doctors Appointment",
  //         "day": "Feb 5th at 2:30pm",
  //         "reminder": true
  //       },
  //       {
  //         "id": 2,
  //         "text": "Meeting at School",
  //         "day": "Feb 6th at 1:30pm",
  //         "reminder": true
  //       },
  //       {
  //         "id": 3,
  //         "text": "Go to Home",
  //         "day": "Feb 6th at 1:30pm",
  //         "reminder": false
  //       }
  // ])
  console.log("Tasks: rendering")
  return (
    <>
      {/* {props.tasks.map((task, index)=>(
<h3 key={index}>{task.text}</h3>
          ))}   */}

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
