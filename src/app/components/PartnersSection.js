import React from "react";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section
      className="container hero-section flex flex-col gap-10 py-20 text-center 
      items-center justify-center border-b-1 text-white "
    >
      <div>
        <h3
          className="font-ClashBold
           text-white font-bold text-2xl "
        >
          Partners and Sponsers
        </h3>
        <p className="text-base ">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="partner-box">
        <div className="partnerImg">
          <div className="eachImg lg:border-b-4 border-b-[2px]">
            <Image
              src="/assets/Liberty company logo white colour.svg"
              alt="silver medal"
              width={100}
              height={100}
            />
          </div>
          <p className="hr-line lg:h-28 h-8 lg:w-1 w-[1.5px] bg-dark-purple"></p>
        </div>
        {/*  */}
        <div className="partnerImg">
          <div className="eachImg lg:border-b-4 border-b-[2px]">
            <Image
              src="/assets/Liberty company logo white.svg"
              alt="gold medal"
              width={100}
              height={100}
            />
          </div>
          <p className="hr-line lg:h-28 h-8 lg:w-1 w-[1.5px] bg-dark-purple"></p>
        </div>
        {/*  */}
        <div className="partnerImg">
          <div className="eachImg lg:border-b-4 border-b-[2px]">
            <Image
              src="/assets/Winwise logo White colour 1.svg"
              alt="bronze medal"
              width={100}
              height={100}
            />
          </div>
          
        </div>

        <div className="partnerImg">
          <div className="eachImg border-b-0">
            <Image
              src="/assets/wisper logo white.svg"
              alt="bronze medal"
              width={100}
              height={100}
            />
          </div>
          <p className="hr-line lg:h-28 h-8 lg:w-1 w-[1.5px] bg-dark-purple"></p>
        </div>

        <div className="partnerImg">
          <div className="eachImg border-b-0">
            <p className="absolute lg:bottom-[30%] bottom-[10%] lg:text-[8px] text-[3px] right-0">
              Design Studios
            </p>
            <Image
              src="/assets/Paybox.png"
              alt="bronze medal"
              width={100}
              height={100}
            />
          </div>
          <p className="hr-line lg:h-28 h-8 lg:w-1 w-[1.5px] bg-dark-purple"></p>
        </div>
        <div className="partnerImg">
          <div className="eachImg border-b-0">
            <p className="absolute lg:bottom-[30%] bottom-[10%] lg:text-[8px] text-[3px] right-0">
              Design Studios
            </p>
            <Image
              src="/assets/Vizual Plus.png"
              alt="bronze medal"
              width={100}
              height={100}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
