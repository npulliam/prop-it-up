import React from 'react';
import Number from './Number'

const WordStyles = props => {
    const word = props.word;
    const color = props.color;
    const background = props.background;
    const styleArg = {
        color: color,
        backgroundColor: background,
        border: "2px solid black"
    }

    console.log(word, color, background);
    return (
        <div className="w-100 text-center" style={styleArg}>
            <Number num={word}/>
        </div>
    )
}

export default WordStyles;