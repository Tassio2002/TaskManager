import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {

    return (
//Mapeia a quantidade de tasks(objeto no app) e gera uma nova Task para cada item do objeto.
        <>
            {tasks.map((task =>
                 <Task 
                 task={ task } 
                 handleTaskClick={handleTaskClick}
                 handleTaskDeletion={handleTaskDeletion}
                 />
            ))}
        </>
    )
}
export default Tasks;