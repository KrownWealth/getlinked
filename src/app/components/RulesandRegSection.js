import React from "react";
import Image from "next/image";

export default function RulesandRegSection() {
  return (
    <section
      className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-10 2xl:flex-row border-b-2 pb-20 text-center lg:text-start  justify-between"
    >
      <div className="intro-img relative w-full lg:mt-20 lg:w-1/2 items-center justify-center ">
      <div className="hidden lg:block">
        <span className="flex relative z-10 justify-end items-end top-5 left-[-2rem] lg:left-[10rem] lg:top-[5rem]">
          <Image
            src="/assets/star gray.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
        <h3
          className="features-heading font-ClashBold
           text-white font-bold  pt-2 pb-3 lg:pt-10 lg:pb-10"
        >
          Rules and
          <br />
          <span>Guildelines</span>
        </h3>

        <p className="font-montserat features-text">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
        <span className="flex relative z-10 items-end justify-end ">
          <Image
            src="/assets/star.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
        </div>
        <div className="image-container absolute z-10">
          {/* <span className="relative z-10 lg:top-[16rem]">
            <Image
              src="/assets/star.svg"
              alt="creativity"
              width={50}
              height={50}
              className="w-5"
            />
          </span> */}
          <Image
            src="/assets/rules and guidelines.svg"
            alt="creativity"
            width={490}
            height={477}
            className="lg:hidden block"
          />
        </div>
        <span className="lg:hidden block relative z-5 left-[-2rem] top-[-4rem]">
          <Image
            src="/assets/Purple-Lens-Flare-PNG.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-full"
          />
        </span>
      </div>

      <div className="intro-text relative w-full pt-[2rem] lg:w-1/2 lg:pt-[8rem] ">
        <div className="lg:hidden block">
        <span className="flex relative z-10 justify-end items-end top-5 left-[-2rem] lg:left-[10rem] lg:top-[5rem]">
          <Image
            src="/assets/star gray.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
        <h3
          className="features-heading font-ClashBold
           text-white font-bold  pt-2 pb-3 lg:pt-10 lg:pb-10"
        >
          Rules and
          <br />
          <span>Guildelines</span>
        </h3>

        <p className="font-montserat features-text">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
        <span className="flex relative z-10 items-end justify-end ">
          <Image
            src="/assets/star.svg"
            alt="creativity"
            width={50}
            height={50}
            className="w-5"
          />
        </span>
        </div>
        <Image
            src="/assets/rules and guidelines.svg"
            alt="creativity"
            width={490}
            height={477}
            className="hidden lg:block"
          />
      </div>
    </section>
  );
}
