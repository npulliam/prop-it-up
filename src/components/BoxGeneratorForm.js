import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [newBox, setNewBox] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(newBox);
    };


    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <label>Color: </label>
                        <input type="text" onChange={ (e) => {
                            setNewBox({
                                color: e.target.value
                            })
                            }}/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BoxGenerator