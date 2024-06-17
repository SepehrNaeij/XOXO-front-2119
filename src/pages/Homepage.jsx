import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login button clicked'); // Add console log here
    navigate('/login');
  };

  const handleScores = () => {
    console.log('Scores button clicked'); // Add console log here
    navigate('/scores');
  };

  return (
    <div>
      <Button text="Login" onClick={handleLogin} />
      <Button text="Scores" onClick={handleScores} />
    </div>
  );
};

export default Homepage;