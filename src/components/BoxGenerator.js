import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
    const [boxesHtml, setBoxesHtml] = useState([]);
    
    const updateBoxesHtml = () => {
        setBoxesHtml(boxes.map((x,i) => {
            return <div className="box m-2" style={{backgroundColor: x.color}} key={i}/>
        }))
    }

    const addBox = (e, color, updateFunction) => {
        e.preventDefault();
        const box = {
            color: color,
            width: "250px",
            height: "250px"
        }
        setBoxes([...boxes, box]);
        updateFunction()
        console.log(boxesHtml)
    }


    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={ (e) => {addBox(e, color, updateBoxesHtml)}}>
                        <label>Color: </label>
                        <input type="text" onChange={ (e) => {setColor(e.target.value)}}/>
                        <button type="submit">Add</button>
                    </form>
                    <div className="row d-flex">{boxesHtml}</div>
                </div>
            </div>
        </div>
    )
}

export default BoxGenerator