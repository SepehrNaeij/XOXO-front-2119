import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScoreTable = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/top10/')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => console.error('Error fetching scores: ', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ROW</th>
          <th>NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.score}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
