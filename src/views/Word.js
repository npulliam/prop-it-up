import React from 'react';

const Word = props => {
    const word = props.word;
    return (

        <div className="container">
            <div className="row">
                <h2>The word is: {word}</h2>
            </div>
        </div>
    )
}

export default Word;