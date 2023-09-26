"use client"
import React, { useState } from 'react';
import Image from "next/image";

export default function ContactForm({ onSubmit }) {
  const lightPurpleColor = "#903aff"
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;  // Define updatedValue here

    // Perform data validation based on input field name
    let updatedErrors = { ...errors };

    if (name === 'first_name') {
      if (value.length < 3 || !/^[a-zA-Z]+$/.test(value)) {
        updatedErrors[name] = 'First Name must be at least 3 characters long and contain only letters.';
      } else {
        delete updatedErrors[name];
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        updatedErrors[name] = 'Invalid email format.';
      } else {
        delete updatedErrors[name];
      }
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      onSubmit(formData, errors);
    } else {
      console.log('Form has errors. Please correct them before submitting.');
    }
  };


  return (
    <div className="inputField pt-5 md:mt-20 
    md:border md:w-3/5 lg:px-20 md:py-10 border z-10">
      <div className="image-container absolute z-1">
      <span className="relative z-5 left-[-2rem] top-[-8rem] lg:hidden">
          <Image
            src="/assets/Purple-Lens-Flare-PNG.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-full"
          />
        </span>

      </div>
      <p style={{ color: lightPurpleColor }}
        className="font-ClashBold text-2xl font-bold pb-5 "
        >Questions or need assistance? <br />
        Let us know about it</p>
        <p className="email-us-text font-bold-400 text-white pb-4 lg:hidden block">
          Email us below for any questions related to our event
          </p>
      

      <form onSubmit={handleSubmit}
       className="form flex flex-col text-white font-bold-600 ">
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          className="md:w-50"
        />
        {errors.first_name && <div className="error">{errors.first_name}</div>}
        
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        
        <button type="submit" className="cta-btn mt-5 mx-auto">
          Submit
        </button>

      </form>
      <span className="relative z-5 top-[-4rem] lg:left-[-2rem]">
          <Image
            src="/assets/star pu.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
      <span className="relative z-5 top-[-8rem] left-[20rem] lg:left-[28rem] lg:top-[-2rem]">
          <Image
            src="/assets/star.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
    </div>
  );
}
