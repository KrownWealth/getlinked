"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io"
import ContactForm from '../components/ContactForm';
import MobileFooter from '../components/MobileFooter';


export default function Contact ({ setActiveLink }) {
  const lightPurpleColor = "#903aff"

  const handleSubmit = async (formData, errors) => {
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("https://backend.getlinked.ai/hackathon/contact-form", {
         
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        

        if (response.ok) {
          const responseData = await response.json();
          window.alert("Your message has been sent");
          // console.log('Form submitted successfully');
          // console.log('Response Data:', responseData);
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
    <section className="container contact-section py-10 z-10 ">
      <div className="close-btn lg:hidden block">
        <button className="direct-arrow">
        <Link href="/" onClick={() => setActiveLink("/")}>
        <IoIosArrowBack className="font-bold text-white" />
          </Link>
          </button>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="hidden lg:block contactText lg:mt-40 lg:marker:w-2/5">
        {/**Desktop contact text */}
        <div className="hidden lg:flex flex-col text-base">
        <h3 style={{ color: lightPurpleColor }}
        className="font-ClashBold text-3xl font-bold pb-8"
        >Get in touch</h3>
        <p className="pb-4">Contact <br />Information</p>
        <p className="pb-4">27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
        <p className="pb-4">Call Us : <br /> 07067981819</p>
        <p className="pb-4">we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
        <p style={{ color: lightPurpleColor }} 
        className="font-monteserat text-base font-bold pb-5">Share on</p>
        <div className="flex flex-row gap-2 items-start justify-start text-white">
          <Link href="" >
          <Image src="/assets/insta logo.svg" 
           alt="instagram" width={50} height={50}
           className="social-logo" />
           </Link>
           <Link href="" >
            <Image src="/assets/Twitter logo.svg" 
           alt="instagram" width={50} height={50} 
           className="social-logo" 
           />
           </Link>
           <Link href="" >
            <Image src="/assets/facebook logo.svg" 
           alt="instagram" width={50} height={50} 
           className="social-logo"
           />
           </Link>
            <Link href="" >
           <Image src="/assets/linkedin logo.svg" 
           alt="instagram" width={50} height={50} 
           className="social-logo"
           />
           </Link>

        </div>

        </div>

        {/**Mobile contact text */}
        <div className="lg:hidden block">
        <p style={{ color: lightPurpleColor }}
        className="font-ClashBold text-2xl font-bold pb-5"
        >Questions or need <br /> assistance? <br />
        Let us know about it</p>
       
        </div>
      </div>
      <ContactForm onSubmit={handleSubmit} />
      </div>
      <MobileFooter lightPurpleColor={lightPurpleColor} />

      
      
    </section>

  );
}
