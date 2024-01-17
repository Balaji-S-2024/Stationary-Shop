import React, { useEffect, useState } from 'react';
import './Login.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Home from '../home/Home';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    username: '',
    password: '',
  });;

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setUser({
      username:username,
      password:password,
    })
    console.log('user');
    console.log(user);
    // Handle login logic (authentication, API calls, etc.) here
    axios.post('http://localhost:3000/login', user)
      .then(response => {
        // Handle successful creation
        console.log('Donee;');
        // Optionally, reset the form or perform other actions upon successful creation
        // setConPassword("")
        // setUsername("")
        // setPassword("")
        // setEmail("")
        // history.push('/home');
        navigate('/home');
        
      })
      .catch(error => {
        // Handle error
        console.error('Error creating user:', error);
      });
    


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
      {
      }
      {/* <Home></Home> */}
    </div>
  );
}

export default Login;
