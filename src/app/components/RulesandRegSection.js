import React from 'react';
import Image from "next/image"


export default function RulesandRegSection() {
  return (
    <section id="" className="container intro-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center
       items-center justify-center border-b-2 ">
        <div className="intro-img">
          
        <Image
          src="/assets/star.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-rules-1"
        />
          <Image src="/assets/rules and guidelines.svg" alt="creativity" width={490} height={477} />
          </div>
        <div className="intro-text">
          <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10">Rules and <br />
          <span>Guildelines</span>
          </h3>
          <Image
          src="/assets/star gray.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-rules-2"
        />

        
          <p className="font-montserat features-text">Our tech hackathon is a melting pot of 
visionaries, and its purpose is as clear as day:
to shape the future. Whether you&apos;re a coding
genius, a design maverick, or a concept 
wizard, you&apos;ll have the chance to transform 
your ideas into reality. Solving real-world 
problems, pushing the boundaries of 
technology, and creating solutions that can 
change the world, that&apos;s what we&apos;re all about!
</p>
<Image
          src="/assets/star.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-rules-3"
        />
</div>
        

        
        </section>
  )
}
