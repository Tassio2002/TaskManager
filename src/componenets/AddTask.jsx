import { useState } from 'react';
import Button from './Button';
import './css/AddTask.css'
const  AddTask= ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className="add-task-container">
            <input 
            type="text" 
            className="add-task-input" 
            value={inputData}
            onChange={handleInputChange}
            />
             ;

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;