import React, { useState } from 'react';
import './track.scss'; 

const Track = () => {
  // State for login and signup forms
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');

  // Retrieve users from localStorage or initialize an empty array
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Retrieve orders from localStorage or initialize an empty array
  const getOrders = () => {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
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
      setCurrentUser(user);
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
    setCurrentUser(null);
    setLoginUsername('');
    setLoginPassword('');
  };

  // Add a sample order (for demonstration)
  const addSampleOrder = () => {
    const orders = getOrders();
    const newOrder = {
      id: orders.length + 1,
      username: currentUser.username,
      product: 'Sample Product',
      status: 'Shipped',
      date: new Date().toLocaleDateString(),
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
  };
  const userOrders = getOrders().filter(
    (order) => order.username === currentUser?.username
  );

  return (
    <div className="leg">
      {isLoggedIn ? (
        <div className="user-account">
          <h2>User Account</h2>
          <div className="user-info">
            <p>
              <strong>Username:</strong> {currentUser.username}
            </p>
          </div>

          <h3>Track Your Orders</h3>
          {userOrders.length > 0 ? (
            <div className="orders">
              {userOrders.map((order) => (
                <div key={order.id} className="order">
                  <p>
                    <strong>Order ID:</strong> {order.id}
                  </p>
                  <p>
                    <strong>Product:</strong> {order.product}
                  </p>
                  <p>
                    <strong>Status:</strong> {order.status}
                  </p>
                  <p>
                    <strong>Date:</strong> {order.date}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No orders found.</p>
          )}

          <button onClick={addSampleOrder}>Add Sample Order</button>
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

export default Track;