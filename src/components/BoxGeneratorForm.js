import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [newBox, setNewBox] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(newBox);
        e.target.children[1].value = ""; //setting the value of the input based on the event target
        e.target.children[3].value = "";
        e.target.children[5].value = "";
        console.log(e)
    };


    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <label>Color: </label>
                        <input type="text" name="color" onChange={ (e) => {
                            setNewBox({
                                color: e.target.value,
                                width: newBox.width,
                                height: newBox.height
                            })
                            }}/>
                        <label>Width: </label>
                        <input type="number" onChange={ (e) => {
                            setNewBox({
                                color: newBox.color,
                                width: `${e.target.value}px`,
                                height: newBox.height
                            })
                        }}/>
                        <label>Height: </label>
                        <input type="number" onChange={ (e) => {
                            setNewBox({
                                color: newBox.color,
                                width: newBox.width,
                                height: `${e.target.value}px`,
                            })
                        }}/>
                        <button type="submit" className="btn btn-success mx-4">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BoxGenerator