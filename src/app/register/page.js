"use client"
import React from 'react';
import Image from 'next/image';
import RegisterForm from '../components/RegisterForm';

export default function page() {
  const magentaPurple="#d434fe"

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
        

        if (response.ok) {
          const responseData = await response.json();
          console.log('Form submitted successfully');
          console.log('Response Data:', responseData);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form has errors. Please correct them before submitting.');
    }
  };
  return (
    <section className="container flex flex-col lg:flex-row xl:flex-row 2xl:flex-row py-20 z-10">
    
    <h3 style={{ color: magentaPurple }} 
      className="font-ClashBold text-2xl font-bold pb-5 lg:hidden">
        Register  
        </h3>

    <div>
        <Image src="/assets/register-page-img.svg" alt="register image"  
        className="registerImg items-center justify-center w-2/5" width={100} height={100} />

      </div>
       
        <div className="w-3/5">
          <RegisterForm onSubmit={handleUserRegister} />
        </div>
    </section>
  )
}
