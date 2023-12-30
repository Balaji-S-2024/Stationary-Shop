import React, { useEffect, useState } from 'react';
import './Login.css'; // Import your CSS file
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get-user'); // Make a GET request to your backend API
        setUsers(response.data); // Update the state with the fetched data
        console.log('res.data');
        console.log(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic (authentication, API calls, etc.) here
    


    console.log('Logging in...', { username, password });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      <p><a href="/register">Don't have an account?</a></p>
      </form>
    </div>
  );
}

export default Login;
