import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import Tasks from './componenets/Tasks';
import "./App.css"
import AddTask from './componenets/AddTask';
import Header from './componenets/Header';
import TaskDetails from './componenets/TaskDetails';

const App = () => {

  // let message = 'Hello world'
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
        setTasks(data)
    };
    fetchTasks()
    
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    },
  ];

 

  setTasks(newTasks);
  }

  return (
    <Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>	
        <Route path="/:taskTitle" exact component={TaskDetails} />			
			</div>

      
      
		</Router>
  );

};

export default App;
