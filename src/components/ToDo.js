import React from 'react';

const ToDo = (props) => {
    
    const toggleComplete = (taskIdx) => {
        // const tasksCopy = [...props.tasks]
        props.tasks[taskIdx].completed = !props.tasks[taskIdx].completed;
        props.setTasks([...props.tasks])
    }

    const deleteTask = (taskIdx) => {
        props.tasks.splice(taskIdx)
        props.setTasks([...props.tasks])
    }

    const tasksHtml = props.tasks.map((task, i) => {
        return(
            <div key={i} className="d-flex">{
                task.completed ?
                <p className="test"><del>{task.text}</del></p> :
                <p>{task.text}</p>
            }       
                <input type="checkbox" className="form-check-input mx-3" checked={task.completed} onChange={ (e) => toggleComplete(i)}/>
                <button className="btn-sm btn-danger" onClick={(e) => {deleteTask(i)}}>Delete Task</button>
            </div>
        )
    });

    return (
        <div className="container my-4 p-3">
            <div className="row">
                <div className="col">
                    {tasksHtml}
                </div>
            </div>
        </div>
    )
}

export default ToDo;