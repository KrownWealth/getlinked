import React from 'react';
import Image from 'next/image';

export default function PartnersSection() {


  return (
    <section className="container hero-section flex flex-col gap-10 py-20 text-center 
      items-center justify-center border-b-1 text-white ">
 
        <h3 className="font-ClashBold
           text-white font-bold text-2xl ">Partners and Sponsers
           </h3>
        <p className="text-base ">Getlinked Hackathon 1.0 is honored to have the following major 
        companies as its partners and sponsors
</p>
<div className="partner-box flex flex-col md:w-full lg:w-full
 w-[100%] lg:gap-6 gap-y-4 gap-x-0 m-auto justify-center items-center  ">
  {/* Vertical section */}
  <div className="flex flex-row py-5 justify-center items-center space-x-6 lg:space-x-8">
    <div className="partnerImg relative " style={{width: '100%' }} >
      <div className="eachImg border-b-[2px] lg:border-b-4 lg:p-3" >
        <Image src="/assets/Liberty company logo white colour.svg" alt="silver medal" width={100} height={100} />
      </div>
    </div>
    <div className="partnerImg relative" >
      <div className="border-gold-medal" style={{ width: '100%' }}>
        <Image src="/assets/Liberty company logo white.svg" alt="gold medal" width={100} height={100} />
      </div>
    </div>
    <div className="partnerImg relative" style={{ width: '100%' }}>
      <div className="eachImg" >
        <Image src="/assets/Winwise logo White colour 1.svg" alt="bronze medal" width={100} height={100}/>
      </div>
    </div>
  </div>

  {/* Horizontal section */}
  <div className="flex flex-row py-5 justify-center items-center">
    <div className="partnerImg relative" style={{ width: '100%' }}>
      <div className="eachImg">
        <Image src="/assets/wisper logo white.svg" alt="bronze medal" width={100} height={100} />
      </div>
    </div>
    <div className="partnerImg relative" style={{ width: '100%' }}>
      <div className="eachImg">
        <Image src="/assets/Paybox.png" alt="bronze medal" width={100} height={100} />
      </div>
    </div>
    <div className="partnerImg relative" style={{ width: '100%' }}>
      <div className="eachImg">
        <Image src="/assets/Vizual Plus.png" alt="bronze medal" width={100} height={100} />
      </div>
    </div>
  </div>
</div>



      
    </section>
  )
}
