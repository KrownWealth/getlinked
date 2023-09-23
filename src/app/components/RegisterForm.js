"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterForm({ onSubmit }) {
  const magentaPurple = "#d434fe";
  const [errors, setErrors] = useState({});
  const [registerData, setRegisterData] = useState({
    team_name: "",
    project_topic: "",
    phone_number: 0,
    email: "",
    category: 0,
    group_size: 0
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    let updatedErrors = { ...errors };

    if (name === 'team_name') {
      if (value.length < 3 || !/^[a-zA-Z]+$/.test(value)) {
        updatedErrors[name] = 'Team Name must be at least 3 characters long and contain only letters.';
      } else {
        delete updatedErrors[name];
      }
    } else if (name === 'phone_number') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        updatedErrors[name] = 'Invalid Phone format.';
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

    setRegisterData({
      ...registerData,
      [name]: updatedValue,
    });
    setErrors(updatedErrors);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      onSubmit(registerData, errors);
    } else {
      console.log('Form has errors. Please correct them before submitting.');
    }
  };

  return (
    <div className="inputField pt-5 md:border border">
      <h3 style={{ color: magentaPurple }} 
      className="font-ClashBold text-2xl font-bold pb-5 sm:hidden ">
        Register  
        </h3>
    
        <p className="flex flex- pb-2 text-xl font-montserat"> Be part of the movement
        <span><Image src="/assets/femail-unicode.svg" alt="part of the move" width={20} height={20} /></span>
        <span><Image src="/assets/male-unicode.svg" alt="part of the move" width={20} height={20} /></span>
      
     </p>
      <p className="creat-acct pb-2 text-2xl 
      font-montserat text-uppercase font-bold">CREATE YOUR ACCOUNT</p>

      <form onSubmit={handleRegisterSubmit} 
      className="form flex flex-col text-white font-bold-600 mt-10">
           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="grid grid-rows md:grid-rows-none">
            <label htmlFor="team_name" className="">Team&apos;s Name</label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              name="team_name"
              value={registerData.team_name}
              onChange={handleRegisterChange}
            />
            {errors.team_name && <div className="error">{errors.team_name}</div>}

            <label htmlFor="phone" className="pb-2">Phone</label>
            <input
              type="phone"
              placeholder="Enter your phone number"
              name="phone_number"
              value={registerData.phone_number}
              onChange={handleRegisterChange}
              className="-mt-2"
            />
            {errors.phone_number && <div className="error">{errors.phone_number}</div>}
          </div>
          <div className="grid grid-rows md:grid-rows-none">
            <label htmlFor="email" className="pb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}

            <label htmlFor="project_topic" className="pb-2">Project Topic</label>
            <input
              type="text"
              placeholder="What is your group project topic"
              name="project_topic"
              value={registerData.project_topic}
              onChange={handleRegisterChange}
            />
            {errors.project_topic && <div className="error">{errors.project_topic}</div>}
          </div> 
          <div className="flex flex-col lg:-mt-3">
            <label htmlFor="category" className="pb-2">Category</label>
            <select name="category" id="category" className="bg-transparent">
            <option value="Select your category" selected>Select your category</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            </select>
            {errors.category && <div className="error">{errors.category}</div>}
        
            </div>
            <div className="flex flex-col lg:last:-mt-3">
            <label htmlFor="group_size" className="pb-2">Group Size</label>
            <select name="group_size" id="group_size" className="bg-transparent">
            <option value="Select your category" selected>Select your category</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            </select>
            {errors.group_size && <div className="error">{errors.group_size}</div>}
          
            </div>
          
          </div>
    <p className="confirm pb-2">Please review your registration details before submitting</p>
        <div className="checkbox-container">
  <input type="checkbox" id="termsCheckbox" className="checkbox gap-2" />
  <label htmlFor="termsCheckbox" className="checkboxlabel" >
    I agree with the event 
    <Link href="/termsandcondition">terms and conditions</Link> and{" "}
    <Link href="/privacypolicy">privacy policy</Link>
  </label>
  </div>
  <button type="submit" className="cta-btn mt-5 mx-auto w-5">
          Register
        </button>
        </form>
      </div>
  );
}
