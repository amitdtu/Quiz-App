import React from 'react';

const Result = (props) => {
    return (
        <div className="Result">
            <h3>Your Score  <strong>{props.result}/10</strong> </h3>
        </div>
    )
}

export default Result; 