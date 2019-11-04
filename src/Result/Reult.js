import React from 'react';

const Result = (props) => {
    return (
        <React.Fragment>
            <div className="Result">
                <h3>Your Score is <strong>{props.result}/10</strong> </h3>
            </div>
        </React.Fragment>
    )
}

export default Result; 