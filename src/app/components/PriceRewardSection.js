import React from 'react';
import Image from 'next/image';

export default function PriceRewardSection() {
  const magentaPurpleColor = "#d434fe";
  return (
    <section className="container text-center border-b-2 py-20">
     
      <div className="lg:hidden block">
          <h3 className="features-heading font-ClashBold text-white font-bold">
            Prices and <br />
            <span style={{ color: magentaPurpleColor }}>Reward</span>
          </h3>
          <p>Higligth of the prizes or rewards for winners and for participants</p>
          
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-row 
         lg:gap-5 2xl:flex-row  text-start  justify-between">
          <div className="prices-img relative w-full top-10 lg:w-1/2 items-center justify-center">
        <Image src="/assets/prices cup.svg" alt="prices cup" width={100} height={100} />
        </div>

        <div className="prices-text w-full  lg:w-1/2 lg:mr-20">
          <div className="hidden lg:block">
          <h3 className="features-heading font-ClashBold text-white font-bold">
            Prices and <br />
            <span style={{ color: magentaPurpleColor }}>Reward</span>
          </h3>
          <p>Higligth of the prizes or rewards for winners and for participants</p>
          
          </div>
          <div className="flex flex-row pt-20">
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
        </div>
          </div>
          
        
        </section>
  )
}
