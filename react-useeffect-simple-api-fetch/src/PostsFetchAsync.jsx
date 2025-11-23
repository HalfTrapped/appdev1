import { useEffect, useState, setError } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UsersFetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchusers = async () => {
            try {
                const response = await axios.get(
                  "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                setTodos(response.data);
              } catch (err) {
                console.error("Error fetching user info:", err);
                setError("Failed to fetch user info");
              } finally {
                setLoading(false);
              }
            };
        
        fetchusers();
    }, []);

      if(loading) {
        return 
        <>
          <p>Loading user data...please wait</p>;
        </>
      }

  return (
    <>
      <h2>Users Info</h2>
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
