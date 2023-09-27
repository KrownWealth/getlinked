import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const magentaPurple = "#d434fe";
  return (
    <section
      className="container hero-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center 
      items-center justify-center lg:text-start lg:justify-start lg:items-start
       border-b-2 "
    >
      <div className="hero-text pb-10 lg:justify-center lg:items-center">
         {/**Text for mobile */}
        <div className="block md:hidden lg:hidden pb-4">
        <p className="font-montserat text-white italic relative z-2 md:text-3xl lg:text-3xl">
          Igniting a Revolution in HR Innovation <br />
         </p>
         <span className="relative items-end justify-end pt-4 pb-4 left-[12rem]">
            <Image
              src="/assets/vector 4.svg"
              alt="line"
              width={50}
              height={50}
              style={{width: '40%' }}
            />
          </span>
          <span className="relative  left-[5rem] lg:aria-hidden:">
       <Image src="/assets/star.svg" alt="creativity" width={50} height={50} className="w-5" />
        </span>
        <span className="relative top-[-1rem] left-[15rem] lg:hidden">
       <Image src="/assets/star gray.svg" alt="creativity" width={50} height={50} className="w-5" />
        </span>
        </div>
        <div>
        <span className="flex justify-end items-end">
          <Image
            src="/assets/creatice light.svg"
            alt="creativity"
            width={20}
            height={20}
            className="creative-light relative lg:top-3  lg:left-[-10rem]"
          />
        </span>
        <h2 className="pb-2 text-3xl md:text-5xl lg:text-6xl lg:text-start ">
          getlinked Tech Hackathon{" "}
          <span styles={{ color: magentaPurple }}>1.0</span>
          <span className="inline-flex">
            <Image
              src="/assets/chain.svg"
              alt="chain graphic"
              width={30}
              height={30}
            />
          </span>
          <span className="inline-flex">
            <Image
              src="/assets/star like.svg"
              alt="star like"
              width={20}
              height={20}
            />
          </span>
        </h2>
        <p className="font-montserat pb-8 text-center lg:text-start">
          Participate in getlinked tech Hackathon <br /> 2023 stand a chance to
          win a big price
        </p>
        </div>
         {/**Text for mobile ends */}
        <button className="cta-btn font-montserat font-base ">
          <Link href="/register">Register</Link>
        </button>
        <span className="relative top-[-2rem]  left-[18rem] lg:left-[24rem] ">
       <Image src="/assets/star.svg" alt="creativity" width={50} height={50} className="w-5" />
        </span>
        <div className="counter grid grid-cols-3 gap-2 lg:items-start lg:justify-start pt-[2rem] lg:pt-[5rem]">
          <h2>
            00<sub>H</sub>
          </h2>
          <h2>
            00<sub>M</sub>
          </h2>
          <h2>
            00<sub>S</sub>
          </h2>
        </div>
      </div>
      <div className="hero-img ">
        <div className="hidden md:block lg:block pb-5 ">
        <p className="text-base font-montserat text-white md:text-2xl lg:text-2xl italic">
          Igniting a Revolution in HR Innovation <br />
          
        </p>
        <span className="relative items-end justify-end pt-4 pb-4 left-[15rem]">
            <Image
              src="/assets/vector 4.svg"
              alt="line"
              width={50}
              height={50}
              style={{width: '40%' }}
            />
          </span>
        </div>
        <Image
          src="/assets/man-wearing-smart-glasses.svg"
          alt="smart glasses"
          width={100}
          height={100}
          className="smart-glass lg:top-3"
        />
        <Image
          src="/assets/hero globe stars.svg"
          alt="globe star"
          width={100}
          height={100}
          className="globe-star lg:top-3"
        />
      </div>
    </section>
  );
}
