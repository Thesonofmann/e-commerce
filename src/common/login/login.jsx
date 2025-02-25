import React, { useState } from 'react';
import './login.scss'; 

const Login = () => {
  // State for login and signup forms
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState('');

  
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find(
      (u) => u.username === loginUsername && u.password === loginPassword
    );

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(loginUsername);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    const users = getUsers();
    const userExists = users.some((u) => u.username === signupUsername);

    if (userExists) {
      setError('Username already exists');
    } else {
      const newUser = { username: signupUsername, password: signupPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setError('Signup successful! Please log in.');
      setSignupUsername('');
      setSignupPassword('');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
    setLoginUsername('');
    setLoginPassword('');
  };

  return (
    <div className="app-one">
      {isLoggedIn ? (
        <div className="dashboard">
          <h2>Welcome, {currentUser}!</h2>
          <p>You are now logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-container">
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>

          <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>

          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;