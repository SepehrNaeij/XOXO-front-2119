import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}
    style={{
      padding: '10px 20px',
      fontSize: '1em',
      margin: '10px',
      cursor: 'pointer',
      backgroundColor: '#FA8305',
      color: '#fff',
      border: 'none',
      borderRadius: '40px',
      width: '195px',
      height: '36px',
    }}>{text}</button>
  );
};

export default Button;