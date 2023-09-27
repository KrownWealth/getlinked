import React from 'react';
import Image from 'next/image';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal justify-center items-center">
      <div className="modal-content">
        <div className="flex flex-row">
          <span className="relative z-1">
          <Image src="/assets/successful-done.svg" alt="success" width={50} height={50} className="w-full" />
          </span>
          <span claasName="relative ">
            <Image src="/assets/successful-man.svg" alt="success" width={50} height={50} className="w-full" />
          </span>

        </div>
        <h2>Congratulations <br /> you have successfully Registered</h2>
        <p>Yes, it was easy and you did it! <br />check your mail box for next step.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
