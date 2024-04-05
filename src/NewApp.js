import axios from "axios";
import React, { useState } from 'react';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/login', {
          username,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = response.data;
        const stat=response.status;

        if(stat===200){
            alert("login successfully ")
        }
        
        console.log(data); // Handle response data as needed
      } catch (error) {
        console.error('Error:', error);
        alert("wrong usrname or password")
      }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
