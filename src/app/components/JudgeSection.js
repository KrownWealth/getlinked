import React from 'react';
import Image from "next/image";
import Link from 'next/link';


export default function JudgeSection() {
  return (
    <section className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-10 2xl:flex-row border-b-2 pb-20 text-start  justify-between">

        <div className="intro-img relative w-full lg:mt-80 lg:w-1/2 items-center justify-center ">
        <Image src="/assets/judging criteria.svg" alt="creativity" width={490} height={477} />
        </div>
        <div className="intro-text w-full lg:w-1/2 lg:pt-[8rem] ">
        <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 pb-10">Judging Criteria <br />
          <span>Key attributes</span>
          </h3>
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
               <button className="cta-btn font-montserat font-base pt-5">
          <Link href="/readmore"  className="">
            Read More
          </Link>
        </button>

          </div>
       </section>
  )
}
