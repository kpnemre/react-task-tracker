import React from 'react'
import {FaTimes} from "react-icons/fa"
const Task = ({task, onDelete, onToggle}) => {
    console.log("Task: rendering")
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3 >
                {task.text}
                 <FaTimes style={iconstyle}
                  onClick={()=>onDelete(task.id)}
                 />
                 </h3>
            <p>{task.day}</p>
        </div>
    )
}
const iconstyle ={
    color:"red",
    cursor:"pointer"
}
export default React.memo(Task);
