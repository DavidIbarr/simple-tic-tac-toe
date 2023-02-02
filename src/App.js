import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      return index === boxIndex ? "X" : value
    })
    setBoard(updatedBoard)
  }
  return (
    <div className="App">
      <Board boardList={board} onClick={handleBoxClick}></Board>

    </div>
  );
}

export default App;
