import './App.css';
import UserEntry from './UserEntry';
import React, { useState } from 'react';


function App() {

  // State of your component 
  // Statefull(apna dimaaag bhi lgayega) vs Stateless(jesa input wese dikhaya jaayega(render) krega) Component 
  // REST -> State Transfer 
  
  // Hooks of React 
  // Pure Funtions
  const [users, setUsers] = useState([
    // state of your component, state varivale mein daal do jab bhi ye varible changes ho to rernder kr do

    {
      "Name" : "Ansh Awasthi",
      "College" : "LPU"
    },
    {
      "Name" : "Satish Kumar",
      "College" : "WIT"
    },
    {
      "Name" : "Rahul",
      "College" : "KIET"
    }
  ])

  // Unidirectional flow of  data parent to child 
  const onUserDelete = (userName) => {
    console.log(userName);
    setUsers(users.filter(user => user.Name !== userName))
  }

  const getUserListHtml = () => {
    return users.map(elem => 
      <UserEntry key = {elem.Name} name={elem.Name} college={elem.College} grad_year={2020} onDelete = {onUserDelete}/>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault(); // default behaviour refresh onSubmit but we can prevent this
    console.log(e.target.elements.name.value)
    console.log(e.target.elements.college.value)
    setUsers([
      ...users,
      {
        "Name" : e.target.elements.name.value,
        "College" : e.target.elements.college.value
      }
    ])
  }

  const getAddUserForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name"/>
        <label>College</label>
        <input type="text" name="college"/>
        <button>Add User</button>
      </form>
    )
  }

  return (
    <ul>
      {getAddUserForm()}
      {getUserListHtml()}
    </ul>
  );
}

export default App;
