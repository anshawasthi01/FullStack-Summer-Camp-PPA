import React from 'react';

// Pure Funtions -> No state own -> apne andr hi kaam krte h global scope se koi mtlb nahi
const UserEntry = (props) => {
    return (
        <li key = {props.name}>
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

export default React.memo(UserEntry);
// agr same input h to rerender krne ki koi jroort nahi