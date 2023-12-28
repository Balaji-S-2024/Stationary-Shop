import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for login styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulating a successful login - replace with your authentication logic
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
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
        <form className="login-form" onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission behavior
          handleLogin();
        }}>
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
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
