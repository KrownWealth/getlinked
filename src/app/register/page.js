"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import RegisterForm from '../components/RegisterForm';
import Modal from '../components/Modal';


export default function Register() {
  const magentaPurple="#d434fe";
  const [showModal, setShowModal] = useState(false);

  const handleUserRegister = async (registerData, errors) => {
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("https://backend.getlinked.ai/hackathon/registration", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData),
        });
          if (!response.ok) {
          // Display the error message to the user
          const errorMessage = await response.json();
          window.alert(errorMessage);
          return;
        }
  
        // Form submitted successfully
        const responseData = await response.json();
        setShowModal(true);
        console.log('Response Data:', responseData);
      } catch (error) {
        // Handle other errors here
        window.alert(error);
        console.error('Error submitting form:', error);
      }
    }
  };

  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);


  return (
  
    <section className="container flex flex-col lg:flex-row xl:flex-row 2xl:flex-row py-20 z-10 lg:gap-10">
    <div className="text-2xl font-bold pb-5 lg:hidden block">
    <h3 style={{ color: magentaPurple }} 
      className="font-ClashBold">
        Register  
        </h3>
    </div>
    <div className="flex w-full lg:w-2/5">
    <div className="items -center justify-center">
    <span className="relative z-5 ">
          <Image
            src="/assets/star pu.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
      <Image src="/assets/register-page-img.svg" alt="register image"  
        className="w-full" width={100} height={100} />
   <span className="relative z-5 flex">
          <Image
            src="/assets/star gray.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
     </div>
      </div>
       <div className="flex w-full lg:w-3/5">
         <RegisterForm onSubmit={(registerData, errors) => {
  handleUserRegister(registerData, errors);
  setShowModal(true);
}} setShowModal={setShowModal} />
         
         
        </div>
        {showModal && <Modal closeModal={() => setShowModal(false)} />}
        
    </section>
    
    
    
  )
}
