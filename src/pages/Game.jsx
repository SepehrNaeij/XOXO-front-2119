import React from 'react';
import GameBoard from '../components/GameBoard.jsx';

const Game = () => {
  return (
    <div className="game-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <p className='o' style={{ marginRight: 'auto' }}>Blue is: O</p>
  <p className='x' style={{ marginLeft: 'auto' }}>Red is: X</p>
</div>

      <GameBoard />
    </div>
  );
};

export default Game;
