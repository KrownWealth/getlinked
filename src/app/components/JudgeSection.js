import React from 'react';
import Image from "next/image";
import Link from 'next/link';


export default function JudgeSection() {
  return (
    <section id="" className="container intro-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center
       items-center justify-center border-b-2 ">
        <div className="intro-img">
          
        <Image
          src="/assets/star pu.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-intro-1"
        />
          <Image src="/assets/judging criteria.svg" alt="creativity" width={490} height={477} />
          </div>
        <div className="intro-text">
          <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10">Judging Criteria <br />
          <span>Key attributes</span>
          </h3>
          <Image
          src="/assets/star.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-intro-2"
        />

        
          <p className="font-montserat features-text">
             <span>Innovation and Creativity:</span> Evaluate the uniqueness and 
          creativity of the solution. Consider whether it addresses a real-world problem 
          in a novel way or introduces innovative features.
          </p>
          <p className="font-montserat features-text"><span>Functionality:</span> Assess how well the solution works. 
            Does it perform its intended functions effectively 
            and without major issues? Judges would 
            consider the completeness and robustness of the solution.</p>
            <p className="font-montserat features-text">
              <span>Impact and Relevance:</span> Determine the 
              potential impact of the solution in the real 
              world. Does it address a significant problem,
               and is it relevant to the target audience? 
               Judges would assess
               the potential social, economic, or environmental benefits.
               </p>
               <p className="font-montserat features-text">
               <span>Technical Complexity:</span> Evaluate the technical 
               sophistication of the solution. Judges would 
               consider the complexity of the code, the use of
                advanced technologies
                or algorithms, and the scalability of the solution.
               </p>
               <p className="font-montserat features-text">
               <span>Adherence to Hackathon Rules:</span> Judges will Ensure
                that the team adhered to the rules and guidelines 
                of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any 
                 other competition-specific requirements.
               </p>
               <button className="cta-btn font-montserat font-base" onClick={() => setActiveLink("/register")}>
          <Link href="/readmore"  className="">
            Read Mor
          </Link>
        </button>
               </div>

        
        </section>
  )
}
