import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Scoreboard } from './components/Scoreboard';
import { ResetButton } from './components/ResetButton';

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsPlaying, setXIsPlaying] = useState(true)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)

  const checkWinner = board => {
    for (let winInstance of WIN_CONDITIONS) {
      const [x, y, z] = winInstance
      // check that each corresponding position of the board has the same X/O value
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log("winner is " + board[x])
        setGameOver(true)
        return board[x]
      }
    }
  }
  // click handler - update the box element on the board with the current player's value
  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xIsPlaying === true ? "X" : "O"
      }
      return value;
    })
    const winner = checkWinner(updatedBoard)
    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore++
        setScores({ ...scores, xScore })
      }
      if (winner === "O") {
        let { oScore } = scores;
        oScore++
        setScores({ ...scores, oScore })
      }
    }
    setBoard(updatedBoard)
    setXIsPlaying(!xIsPlaying)
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }
  return (
    <div className="App">
      <Scoreboard scores={scores} xIsPlaying={xIsPlaying} />
      <Board boardList={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
