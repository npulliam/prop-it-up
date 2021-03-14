import React, { useState } from 'react';

const ToDo = (props) => {
    console.log(props)
    const tasks = props.tasks.map((task, i) => {
        return(
            task.completed ?
            <p key={i} className=""><del>{task.text}</del></p> :
            <p key={i}>{task.text}</p>          
        )
    });
    console.log(tasks)
    return (
        <div className="container my-4 p-3">
            <div className="row">
                <div className="col">
                    {tasks}
                </div>
            </div>
        </div>
    )
}

export default ToDo;