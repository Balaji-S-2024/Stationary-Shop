import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import your CSS file for login styles

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleLogin = async (event) => {
    // Handle all the validations
    event.preventDefault();
    setUserData({
      username:username,
      email:email,
      password:password,
    })
    console.log('Requesting...');
    axios.post('http://localhost:3000/register', userData)
      .then(response => {
        // Handle successful creation
        console.log('User created:', response.data);
        // Optionally, reset the form or perform other actions upon successful creation
      })
      .catch(error => {
        // Handle error
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="logged-in">
          <h2>Welcome, {username}!</h2>
          {/* Add user-specific content or redirect to another page */}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Register</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Retype Password:
            <input
              type="password"
              value={conpassword}
              onChange={(e) => setConPassword(e.target.value)}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default Register;
