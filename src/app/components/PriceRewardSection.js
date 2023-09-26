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

        <div className="prices-text w-full mt-[10rem]  lg:w-1/2 ">
          <div className="hidden lg:block">
          <h3 className="features-heading font-ClashBold text-white font-bold">
            Prices and <br />
            <span style={{ color: magentaPurpleColor }}>Reward</span>
          </h3>
          <p>Higligth of the prizes or rewards for winners and for participants</p>
          
          </div>
      <div className="flex flex-col lg:flex-row xl:flex-row 
         lg:gap-5 2xl:flex-row  text-start  justify-between">
      
      <div className="flex flex-row  gap-2 justify-center items-center">
        <div className="silver-medal relative z-1 flex flex-col items-center text-center">
         <div>
      <Image
        src="/assets/silver_medal 1.svg"
        alt="silver medal"
        width={100}
        height={100}
        className="relative top-[-3rem] z-5"
      />
    </div>
    <h3>2nd Runner</h3>
    <h3>#300,000</h3>
  </div>
  <div className="gold-medal relative z-1 w-1/3 flex flex-col items-center text-center">
    <div>
      <Image
        src="/assets/gold_medal 1.svg"
        alt="gold medal"
        width={100} 
        height={100}
        className="relative top-[-5rem] z-10"
        style={{width: '100%'}} />
    </div>
    <h3>1st Runner</h3>
    <h3>#400,000</h3>
  </div>

  <div className="bronze-medal relative z-1 flex flex-col items-center text-center">
    <div>
      <Image
        src="/assets/bronze_medal 1.svg"
        alt="bronze medal"
        width={100}
        height={100}
        className="relative top-[-3rem] z-5"
      />
    </div>
    <h3>3rd Runner</h3>
    <h3>#150,000</h3>
  </div>

</div>

          </div>
        </div>
          </div>
          
        
        </section>
  )
}
