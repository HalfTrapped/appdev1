import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UsersFetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      // Fetch data when the component first loads
      fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          console.log(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });
      }, []);

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div><span>Name: </span>{user.name}</div>
            <div><span>Email: </span>{user.email}</div>
            <br/>
          </li>
        ))}
      </ul>

    </>
  )
}

export default UsersFetch
