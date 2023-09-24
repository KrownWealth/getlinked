import React from 'react';
import Image from 'next/image';

export default function PrivacyTermsSection() {
  return (
    <section className="container hero-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center 
      items-center justify-center border-b-1 ">
        
        <div className="intro-img">
          <Image src="/assets/privacy lock.svg" alt="prices cup" width={100} height={100} />
          <Image src="/assets/privacy.svg" alt="prices cup" width={100} height={100} />


        </div>
        <div className="intro-text">
        <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 md:hidden lg:hidden">Privacy Policy and <br /> 
           Terms
           </h3>
        <p>Last updated on September 12, 2023</p>
        <p>Below are our privacy & policy, which outline a lot of goodies. 
it&apos;s our aim to always take of our participant</p>
          

        </div>
      
    </section>
  )
}
