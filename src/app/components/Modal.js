import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Modal = ({ closeModal }) => {
  return (
    <div className="overlay">
    <div className="container modal justify-center items-center">
      <div className="modal-content pb-10">
        <div className="flex flex-row mb-10 mt-10 justify-center items-center">
          <div className="relative z-1 w-20 left-11 ">
         
            <Image src="/assets/successful-done.svg" alt="success" width={50} height={50} className="w-full lg:w-50" />
        
          </div>
          <div className="relative  w-20">
            <Image src="/assets/successful-man.svg" alt="success" width={50} height={50} className="w-full lg:w-50" />
          </div>
        </div>
        <h2 className="font-bold pb-5">Congratulations <br /> you have successfully Registered</h2>
        <p>Yes, it was easy and you did it! <br />check your mailbox for the next steps.</p>
        <button className="cta-btn mt-10">
          <Link href="/" onClick={closeModal}>Back</Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Modal;
