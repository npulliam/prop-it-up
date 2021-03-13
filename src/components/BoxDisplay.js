import React, { useState } from 'react';

const BoxDisplay = props => {
    const boxesHtml = props.boxes.map((x,i) => {
        return <div className="box m-2" style={{backgroundColor: x.color}} key={i}/>
        });
    return (
        <div className="row d-flex">{boxesHtml}</div>
        
    )
}
export default BoxDisplay