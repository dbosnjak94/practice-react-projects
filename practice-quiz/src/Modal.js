import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-container">
        <h2>Congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)} of
          questions correct
        </p>
        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
