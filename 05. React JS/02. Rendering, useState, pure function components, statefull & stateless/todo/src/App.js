import './App.css';
import UserEntry from './UserEntry';

function App() {
  
  const users = [
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
  ]

  const onUserDelete = (userName) => {
    console.log(userName);
    console.log(users.filter(user => user.Name !== userName))
  }

  const getUserListHtml = () => {
    return users.map(elem => 
      <UserEntry name={elem.Name} college={elem.College} grad_year={2020} onDelete = {onUserDelete}/>
    );
  }
  return (
    <ul>
      {getUserListHtml()}
    </ul>
  );
}

export default App;
