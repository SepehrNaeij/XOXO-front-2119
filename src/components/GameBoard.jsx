import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import { useLocation } from 'react-router-dom'; 

const GameBoard = () => {
  const location = useLocation(); 
  const { playerOne, playerTwo } = location.state || {}; 
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    

    if (winner !== null && playerOne && playerTwo) { 
      const winnerName = winner === 'Draw!' ? 'Draw!' : (winner === 'X' ? playerOne : playerTwo);
      const loserName = winner === 'Draw!' ? 'Draw!' : (winner === 'X' ? playerTwo : playerOne);

      fetch('http://localhost:8000/score/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ 
    name: winnerName, 
    status: 'WIN' 
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
fetch('http://localhost:8000/score/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ 
    name: loserName, 
    status: 'LOSE' 
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

        console.log("fff");
        console.log(winner, winnerName, loserName);
    }
    
  }, [winner, playerOne, playerTwo]);

  const handleClick = (index) => {
    if (board[index] || winner) return; 
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const renderSquare = (index) => {
    return (
      <button
        className="square"
        onClick={() => handleClick(index)}
      >
        <span
          className={board[index] === 'X' ? 'cell X' : 'cell O'}
        >
          {board[index]}
        </span>
      </button>
    );
  };
  

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return squares.every(square => square !== null) ? 'Draw!' : null;
  };

  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square !== null)
    ? 'Draw!'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div>
      <h2>{status}</h2>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default GameBoard;
