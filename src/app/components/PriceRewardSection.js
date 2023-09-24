import React from 'react';
import Image from 'next/image';

export default function PriceRewardSection() {
  return (
    <section className="container hero-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center 
      items-center justify-center border-b-1 ">
        <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 md:hidden lg:hidden">Prizes and <br />Rewards
           </h3>
        <p>Highlight of the prizes or rewards for winners 
and for participants.
</p>
        <div className="intro-img">
          <Image src="/assets/prices cup.svg" alt="prices cup" width={100} height={100} />


        </div>
        <div className="intro-text flex flex-col">
        <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 hidden md:block lg:block">Prizes and <br />Rewards
           </h3>

          <div className="silver-medal">
            <Image src="/assets/silver_medal 1.svg" alt="silver medal" width={100} height={100} />

          </div>
          <div className="gold-medal">
            <Image src="/assets/gold_medal 1.svg" alt="gold medal" width={100} height={100} />

          </div>
          <div className="bronze-medal">
            <Image src="/assets/bronze_medal 1.svg" alt="bronze medal" width={100} height={100} />

          </div>

        </div>
      
    </section>
  )
}
