import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Form Submitted Successfully!</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
