"use client"
import React, { useState } from 'react';

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
    md:border md:w-3/5 md:px-20 md:py-10 border">
      <p style={{ color: lightPurpleColor }}
        className="font-ClashBold text-2xl font-bold pb-5 xl:hidden"
        >Questions or need assistance? <br />
        Let us know about it</p>

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
    </div>
  );
}
