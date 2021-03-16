import React from 'react';

const Number = props => {
    const word = props.num;
    return (
            <div className="row">
            { isNaN(+props.num) ?
                <h2>The word is: {word}</h2> : <h2>The number is: {word}</h2>
            }
            </div>
    )
}

export default Number;