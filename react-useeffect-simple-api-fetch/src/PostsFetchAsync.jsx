import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UsersFetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchusers = async () => {
            try {
                const response = await 
                fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
                const data = await response.json();
                setUsers(data);
            } 
            catch (error) {
                console.error("Error user info:", error);
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
