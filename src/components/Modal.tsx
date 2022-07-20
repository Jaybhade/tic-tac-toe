import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Modal = ({ show, person, empty }: any) => {
  const { toggleModal } = useContext<any>(ThemeContext);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleClick = () => {
    toggleModal();
    empty();
  }
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 style={{marginBottom: "20px"}}>{person} won the Match 🎉🎉🎉</h1>
        <div>
          <div className="btn" onClick={handleClick}>
            Play Again
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
