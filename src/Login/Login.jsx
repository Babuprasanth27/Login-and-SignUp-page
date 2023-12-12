import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    if (!isChecked) {
      alert('Please check the box to agree to the terms.');
      return;
    }
    // Replace this with your actual login logic, e.g., making an API call
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  const handleReset = () => {
    // Reset the form fields
    setEmail('');
    setPassword('');
    setIsChecked(false);
  };

  return (
    <div
      id="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div id="image" style={{ flex: 1 }}>
        <img src={'./download.png'} alt="Login Image" style={{ width: '60%', height: 'auto', paddingLeft: '150px' }} />
      </div>

      <div id="login-form" style={{ flex: 1, padding: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '100px' }}>
        <h2>Login</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}>
            <input
              type="checkbox"
              name="terms"
              checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              style={{ marginRight: '5px' }}
            />
            Agree to the terms and conditions
          </label>

          <button
            type="button"
            onClick={handleLogin}
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Login
          </button>

          <button
            type="reset"
            onClick={handleReset}
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
