import { useContext, useState } from "react";
import Board from "./Board";
import calculateWinner from "./CalculateWinner";
import Modal from "./Modal";
import { ThemeContext } from "./ThemeContext";

const Game = () => {
  const { person1Win, person2Win, showModal } = useContext<any>(ThemeContext);

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const [person1, setPerson1] = useState<string>("X");
  const [person2, setPerson2] = useState<string>("O");
  const [count, setCount] = useState<number>(0);

  const handleClick = (i: number) => {
    const History = history.slice(0, stepNumber + 1);
    const current = History[History.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...history, { squares: squares }]);
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
    setCount(count + 1);
  };

  const jumpTo = (step: number) => {
    setCount(count - 1);
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const empty = () => {
    setStepNumber(0);
    setXIsNext(true);
    setCount(0);
    setHistory([{ squares: Array(9).fill(null) }]);
  };

  let status;
  if (count === 9 && !calculateWinner(history[stepNumber].squares)) {
    status = "Result is DRAW.";
  } else if (calculateWinner(history[stepNumber].squares)) {
    const winner = calculateWinner(history[stepNumber].squares);
    if (winner === "X") {
      status = "Winner : " + person1;
    } else {
      status = "Winner : " + person2;
    }
  } else {
    status = "Current player: " + (xIsNext ? person1 : person2);
  }

  return (
    <div className="game-board">
      <Modal empty={empty} show={showModal} person={calculateWinner(history[stepNumber].squares) === "X" ? person1 : person2}/>
      <h2 className="game-element">
        {person1} : {person1Win} {person1Win===person2Win ? null : (person1Win > person2Win ? <>😎</> : <>😢</>)}
      </h2>
      <div className="middle">
        <div className="Name">
          <div className="NameInput">
            Player 1:{" "}
            <input
              value={person1}
              onChange={(e) => setPerson1(e.target.value)}
            />
          </div>
          <div className="NameInput">
            Player 2:{" "}
            <input
              value={person2}
              onChange={(e) => setPerson2(e.target.value)}
            />
          </div>
        </div>
        <h2 className="status">{status}</h2>
        <Board
          squares={history[stepNumber].squares}
          onClick={(i: number) => handleClick(i)}
          history={history}
          stepNumber={stepNumber}
        />
        <div className="EndButtons">
          <div
            className="btn"
            onClick={() => jumpTo(stepNumber > 1 ? stepNumber - 1 : 0)}
          >
            Undo
          </div>
          <div className="btn" onClick={() => empty()}>
            Restart
          </div>
        </div>
      </div>
      <h2 className="game-element">
        {person2} : {person2Win} {person1Win === person2Win ? null : (person2Win > person1Win ? <>😎</> : <>😢</>)}
      </h2>
    </div>
  );
};

export default Game;
