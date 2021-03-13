import React, { useState } from 'react';

const BoxDisplay = props => {
    const boxesHtml = props.boxes.map((x,i) => {
        return <div className="m-2" style={{backgroundColor: x.color, width: x.width, height: x.height}} key={i}/>
        });
    return (
        <div className="row d-flex">{boxesHtml}</div>
        
    )
}
export default BoxDisplay