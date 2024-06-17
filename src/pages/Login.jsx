import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx';

const Login = () => {
  const navigate = useNavigate();

  const handleStart = (nameOne, nameTwo) => {
    navigate('/game', { state: { playerOne: nameOne, playerTwo: nameTwo } });
  };

  return (
    <div>
      <h2>Fill the Form</h2>
      <LoginForm onStart={handleStart} />
    </div>
  );
};

export default Login;
