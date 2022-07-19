import Square from "./Square";

const Board = (props: AppProps) => {

  const renderSquare = (i : number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} history={props.history} stepNumber={props.stepNumber} />;
  };

  return (
    <div className="board-area">
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

type AppProps = {
    squares: any;
    onClick: any;
    history: any;
    stepNumber: any;
}

export default Board;
