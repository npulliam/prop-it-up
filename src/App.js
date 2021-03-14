import './App.css';
import Tabs from './components/Tabs';
import ToDo from './components/ToDo';
import TaskForm from './components/TaskForm';
import React, { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {text: "Get Python Red Belt", completed: false},
    {text: "Get Python Black Belt", completed: true},
    {text: "Get MERN Red Belt", completed: false},
    {text: "Get MERN Black Belt", completed: false}
  ]);
  
  const addTask = ( newTask ) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <TaskForm onNewTask={ addTask }/>
      <ToDo tasks={ tasks }/>
    </div>
    
  );
}

export default App;
