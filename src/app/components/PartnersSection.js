import React from 'react';
import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="container hero-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center 
      items-center justify-center border-b-1 ">
        <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 md:hidden lg:hidden">Partners and Sponsers
           </h3>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors
</p>
        <div className="intro-img">
          <Image src="/assets/prices cup.svg" alt="prices cup" width={100} height={100} />


        </div>
        <div className="intro-text grid grid-rows-3">
          <div className="silver-medal">
            <Image src="/assets/Liberty company logo white colour.svg" alt="silver medal" width={100} height={100} />

          </div>
          <div className="gold-medal">
            <Image src="/assets/Liberty company logo white.svg" alt="gold medal" width={100} height={100} />

          </div>
          <div className="bronze-medal">
            <Image src="/assets/Winwise logo White colour 1.svg" alt="bronze medal" width={100} height={100} />
            </div>
            <div className="bronze-medal">
            <Image src="/assets/wisper logo white.svg" alt="bronze medal" width={100} height={100} />
            </div>
            <div className="bronze-medal">
            <Image src="/assets/Paybox.png" alt="bronze medal" width={100} height={100} />
            </div>
            <div className="bronze-medal">
            <Image src="/assets/Vizual Plus.svg" alt="bronze medal" width={100} height={100} />
            </div>

        </div>
      
    </section>
  )
}
