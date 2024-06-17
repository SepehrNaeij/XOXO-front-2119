import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Game from './pages/Game.jsx';
import Scores from './pages/Scores.jsx';
import './App.css'; 

const Footer = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/game' || location.pathname === '/scores';

  return !hideFooter && <footer>Proved By Your Niousha 2024</footer>;
};

const App = () => {
  return (
    <Router>
      <Header title="Tic-Tac-Toe" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
