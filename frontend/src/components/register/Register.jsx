import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for login styles
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {
  // const history = useHistory();

  const [usernam, setUsername] = useState('');
  const [passwor, setPassword] = useState('');
  const [emai, setEmail] = useState('');
  const [conpassword, setConPassword] = useState('');
  // const [userData, setUserData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConformPasswordChange = (e) => {
    setConPassword(e.target.value);
  };

  const handleLogin = async (event) => {
    // Handle all the validations
    event.preventDefault();
    const userData = {
      username:usernam,
      email:emai,
      password:passwor,
    };
    console.log('Requesting...');
    axios.post('http://localhost:3000/register', userData)
      .then(response => {
        // Handle successful creation
        console.log('User created:', response.data);
        // Optionally, reset the form or perform other actions upon successful creation
        // setConPassword("")
        // setUsername("")
        // setPassword("")
        // setEmail("")
        history.push('/login');
        
      })
      .catch(error => {
        // Handle error
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="register-container">
        <form className="register-form" onSubmit={handleLogin}>
          <h2>Register</h2>
          <label>
            Username:
            <input
              type="text"
              value={usernam}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={emai}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={passwor}
              onChange={handlePasswordChange}
            />
          </label>
          <label>
            Retype Password:
            <input
              type="password"
              value={conpassword}
              onChange={handleConformPasswordChange}
            />
          </label>
          <button type="submit">Register</button>
          <p><a href="/login">Already have an account?</a></p>
        </form>
    </div>
  );
}

export default Register;
