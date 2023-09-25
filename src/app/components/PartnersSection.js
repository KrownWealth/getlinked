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
<div className="partner-box flex flex-col md:w-full lg:w-full w-[100%] ">
  {/* Vertical section */}
  <div className="flex flex-row py-5 justify-center items-center">
    <div className="silver-medal relative mb-2" >
      <div className="border-silver-medal" style={{width: '100%' }}>
        <Image src="/assets/Liberty company logo white colour.svg" alt="silver medal" width={100} height={100} />
      </div>
    </div>
    <div className="gold-medal relative mb-2" >
      <div className="border-gold-medal" style={{ width: '100%' }}>
        <Image src="/assets/Liberty company logo white.svg" alt="gold medal" width={100} height={100} />
      </div>
    </div>
    <div className="bronze-medal relative" >
      <div className="border-b-2 border-bronze-medal" style={{ width: '100%' }}>
        <Image src="/assets/Winwise logo White colour 1.svg" alt="bronze medal" width={100} height={100}/>
      </div>
    </div>
  </div>

  {/* Horizontal section */}
  <div className="flex flex-row py-5 justify-center items-center">
    <div className="bronze-medal relative mb-5" style={{ width: '100%' }}>
      <div className="border-t-2 border-bronze-medal">
        <Image src="/assets/wisper logo white.svg" alt="bronze medal" width={100} height={100} />
      </div>
    </div>
    <div className="bronze-medal relative mb-5" style={{ width: '100%' }}>
      <div className="border-t-2 border-l-2 border-bronze-medal">
        <Image src="/assets/Paybox.png" alt="bronze medal" width={100} height={100} />
      </div>
    </div>
    <div className="bronze-medal relative mb-5" style={{ width: '100%' }}>
      <div className="border-l-2 border-bronze-medal">
        <Image src="/assets/Vizual Plus.png" alt="bronze medal" width={100} height={100} />
      </div>
    </div>
  </div>
</div>



      
    </section>
  )
}
