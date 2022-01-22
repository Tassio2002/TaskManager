import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from "react-router-dom";

import "./css/Task.css"

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    return (
        <div
        
        className="task-container"
        style={task.completed ? {borderLeft: '6px solid #57edf8'} : {}}
        >
            <div className="task-title" 
            onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>

            <div className="buttons-container">
                <button
                    className="remove-task" 
                    onClick={() => handleTaskDeletion(task.id)}
                    >
                        <CgClose />
                    </button>
                    <button
                    className="see-task-details" 
                    onClick={handleTaskDetailsClick}
                    >
                        <CgInfo />
                    </button>
            </div>
        </div>        
    )
}
 
export default Task;