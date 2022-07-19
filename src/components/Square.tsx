import { useContext, useEffect } from "react";
import calculateWinner from "./CalculateWinner";
import { ThemeContext } from "./ThemeContext";

const Square = (props: AppProps) => {
  const { toggleTheme, addPerson1Win, addPerson2Win } =
    useContext<any>(ThemeContext);
  const winner = calculateWinner(props.history[props.stepNumber].squares);
  const handleClick = () => {
    props.onClick();
    toggleTheme();
  };

  useEffect(() => {
    if (winner === "X") {
      addPerson1Win();
    } else if (winner === "O") {
      addPerson2Win();
    }
  }, [winner]);

  return (
    <button className="square" onClick={handleClick}>
      <div
        className={
          props.value === "X"
            ? "InnerValX"
            : props.value === "O"
            ? "InnerValY"
            : "InnerVal"
        }
      >
        <div>{props.value}</div>
      </div>
    </button>
  );
};

type RequiredProps = {
  value: string | null;
  onClick: () => {} | null;
};

type DefaultProps = {
  value: string | null;
  history: any;
  stepNumber: any;
};

type AppProps = RequiredProps & DefaultProps;

Square.defaultProps = {
  value: null,
} as DefaultProps;

export default Square;
