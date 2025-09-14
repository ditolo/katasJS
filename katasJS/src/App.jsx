import { useState } from 'react'
import './App.css'

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);

  function restartGame() {
    setSquares(Array(9).fill(null));
    setXisNext(true);
    document.querySelector('.status').style.color = 'beige';
  }
  


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
        document.querySelector('.status').style.color = 'lightgreen';
        return squares[a];
      }
    }
  }

    let status;
  const winner = calculateWinner(squares);
  
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (squares.every(Boolean)) {
    status = "It's a draw!";
    document.querySelector('.status').style.color = 'orange';
  } else {
    status = 'Next player: ' + (xisNext ? 'X' : 'O');
  }
  
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i]) return;
    if (calculateWinner(squares)) return;
    if (xisNext)
      nextSquares[i] = 'X';
    else
      nextSquares[i] = 'O';
    setXisNext(!xisNext);
    setSquares(nextSquares);

  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="status">{status}</div>
      <button className="restart" onClick={restartGame}>Restart</button>
    </>
  );
}
