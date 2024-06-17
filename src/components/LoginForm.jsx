import React, { useState } from 'react';

const LoginForm = ({ onStart }) => {
  const [nameOne, setNameOne] = useState('');
  const [nameTwo, setNameTwo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart(nameOne, nameTwo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Player One"
        value={nameOne}
        onChange={(e) => setNameOne(e.target.value)}
        required
        style={{
          fontFamily: 'Medium',
          backgroundColor: 'var(--blueGradiant)',
          border: '1px solid black',
          color: 'white',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '5px',
          width: '195px',
          height: '24px'
        }}
      />
      <input
        type="text"
        placeholder="Enter Player Two"
        value={nameTwo}
        onChange={(e) => setNameTwo(e.target.value)}
        required
        style={{
          fontFamily: 'Medium',
          backgroundColor: 'var(--blueGradiant)',
          border: '1px solid black',
          color: 'white',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '5px',
          width: '195px',
          height: '24px'
        }}
      />
      <button type="submit"
        style={{
          fontFamily: 'Medium',
          padding: '10px 20px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: 'var(--orange)',
          color: '#fff',
          border: 'none',
          borderRadius: '40px',
          margin: '10px 0',
          width: '195px',
          height: '24px',
          lineHeight: '5px'
        }}>Start Game</button>
    </form>
  );
};

export default LoginForm;