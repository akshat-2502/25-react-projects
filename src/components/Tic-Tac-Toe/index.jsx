import { useEffect, useState } from "react";
import "./styles.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (getCurrentSquare) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquares(copySquares);
  };

  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(Array(9).fill(""));
    setIsXturn(true);
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! Please RESTART the game");
    } else if (getWinner(squares)) {
      setStatus(`${getWinner(squares)} Won The Match`);
    } else {
      setStatus(`Next Player is ${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);

  return (
    <div className="tic-tac-toe-container">
      <h1 className="mb-4 text-4xl">Tic Tac Toe</h1>
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="text-3xl mt-4">{status}</h1>
      <button
        className="bg-blue-600 rounded-lg mt-4 mb-12 text-white px-5 py-1"
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
};
export default TicTacToe;
