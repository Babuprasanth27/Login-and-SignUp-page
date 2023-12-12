import React, { useState } from 'react';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  const handleSignup = () => {
    // Replace this with your actual signup logic, e.g., making an API call
    console.log(`Signing up with first name: ${firstName}, last name: ${lastName}, email: ${email}, and password: ${createPassword}`);
  };

  const handleReset = () => {
    // Reset the form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setCreatePassword('');
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

      <div id="signup-form" style={{ flex: 1, padding: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '100px' }}>
        <h2>Sign Up</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px' }}>First Name:</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px' }}>Create Password:</label>
          <input
            type="password"
            placeholder="Create your password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px' }}
          />

          <button
            type="button"
            onClick={handleSignup}
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom:'20px'
              
            }}
          >
            Sign Up
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
              marginBottom:'20px'
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
