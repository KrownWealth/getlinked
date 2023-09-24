import React from 'react';
import Image from "next/image";
import Link from "next/link";




export default function HeroSection() {
  const magentaPurple ="#d434fe";
  return (
    <section className="container hero-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center 
      items-center justify-center border-b-1 ">
        

        <div className="hero-text pb-10 lg:justify-center lg:items-center">
        <div className="flareImgContainer">
        <Image
          src="/assets/Purple-Lens-Flare-PNG.svg"
          alt="purple lens"
          width={100}
          height={100}
          className="purpleFlareImg-hero sm:hidden"
        />
         
        
          <Image
          src="/assets/star.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-hero-1 lg:hidden"
        /> 
        <Image
        src="/assets/star gray.svg"
        alt="purple lens"
        width={50}
        height={50}
        className="star-hero-2 lg:hidden"
      />
      <Image
        src="/assets/star gray.svg"
        alt="purple lens"
        width={50}
        height={50}
        className="star-hero-3 lg:hidden xl:hidden"
      />

      </div>
      <p className="block md:hidden lg:hidden font-montserat text-white italic relative z-2 md:text-3xl lg:text-3xl">
        Igniting a Revolution in HR Innovation <br />
        <span className="flex items-end justify-end line">
          <Image src="/assets/vector 4.svg" alt="line" width={50} height={50} className="line-img" />
        </span>
      </p>


          <span className="flex justify-end items-end">
            <Image src="/assets/creatice light.svg" alt="creativity" width={20} height={20} 
            className="creative-light relative lg:top-10 lg:right-20" />
        </span>
          <h2 className="pb-2 text-3xl md:text-5xl lg:text-6xl lg:text-start ">getlinked Tech Hackathon <span styles={{color: magentaPurple}}>1.0</span> 
            <span className="inline-flex"><Image src="/assets/chain.svg" alt="chain graphic" width={30} height={30}/></span>
            <span className="inline-flex"><Image src="/assets/star like.svg" alt="star like" width={20} height={20}/></span>
            </h2>
            <p className="font-montserat pb-8 text-center lg:text-start">Participate in getlinked tech Hackathon <br /> 2023 stand a chance to win a big price</p>
            <button className="lg:flex cta-btn font-montserat font-base mx-auto lg:ml-0">
  <Link href="/register">
    Register
  </Link>
</button>
        <div className="counter grid grid-cols-3 gap-2 lg:items-start lg:justify-start">
          <h2>00<sub>H</sub></h2>
          <h2>00<sub>M</sub></h2>
          <h2>00<sub>S</sub></h2>

        </div>

        </div>
        <div className="hero-img ">
        <p className="hidden md:block lg:block text-base font-montserat text-white md:text-2xl lg:text-2xl italic">
        Igniting a Revolution in HR Innovation <br />
        <span className="flex items-end justify-end line">
          <Image src="/assets/vector 4.svg" alt="line" width={50} height={50} className="line-img" />
        </span>
      </p>
          <Image src="/assets/man-wearing-smart-glasses.svg" alt="smart glasses" width={100} height={100} className="smart-glass lg:top-3"/>
          <Image src="/assets/hero globe stars.svg" alt="globe star" width={100} height={100} className="globe-star lg:top-3" />
        </div>


      </section>
  )
}
