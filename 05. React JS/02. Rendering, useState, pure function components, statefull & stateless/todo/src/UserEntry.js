import React from 'react';

const UserEntry = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            &nbsp; &nbsp;&nbsp;
            <span>{props.college}</span>
            &nbsp; &nbsp;&nbsp;
            <span>{props.grad_year}</span>
            &nbsp; &nbsp;&nbsp;
            <button onClick={() => props.onDelete(props.name)}>Delete Entry</button>
        </li>
    )
}

export default UserEntry