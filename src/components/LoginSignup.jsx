import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if(!email||!password)
    {
      alert("all fields are required");
      return;
    }
    e.preventDefault();
    // Save the player's name in localStorage
    localStorage.setItem('playerName', name);
    navigate('/player-profile');
  };

  return (
    <div className="login-signup">
      <h1 style={{ textAlign: "center" }}>Login / Signup</h1>
      <form onSubmit={handleLogin}>
        <label>Name:</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <label>Email:</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label>Password:</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginSignup;
