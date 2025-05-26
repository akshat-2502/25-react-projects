import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopup, setModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setModalPopup(false);
  };

  return (
    <div className="flex flex-col justify-items-center items-center">
      <h1 className="text-4xl mb-28 -mt-48 font-bold">Custom Modal Popup</h1>
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded-lg"
        onClick={handleToggleModalPopup}
      >
        Open Modal Popup
      </button>
      {showModalPopup && <Modal onClose={onClose} />}
    </div>
  );
};

export default ModalTest;
