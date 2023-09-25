import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function IntroSection() {
  return (
    <section className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-10 2xl:flex-row border-b-2 pb-20 text-start  justify-between">

        <div className="intro-img relative w-full top-10 lg:w-1/2 items-center justify-center ">
       
          <Image src="/assets/big-idea.svg" alt="creativity" width={490} height={477} className="big-idea " />
          <Image src="/assets/arrow.svg" alt="arrow" width={50} height={50} 
          className="arrow-img  lg:left-[28rem] lg:top-[-4rem]"/>
          
        </div>

        <div className="intro-text w-full lg:w-1/2 lg:pt-[8rem] ">
        <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 pb-10">Introduction to getlinked <br />
          <span>tech Hackathon 1.0</span>
          </h3>
        
          <p className="font-montserat features-text">Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you&apos;re a coding genius, a 
design maverick, or a concept wizard, you&apos;ll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that&apos;s what we&apos;re all about!</p>


        </div>
        


      </section>

    
  )
}
