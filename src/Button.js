import React from 'react';

function Button(props) {
    return (
        <div className={`btn ${props.color}`} onClick={props.onClick}>{props.name}</div>
    )
}

export default Button;