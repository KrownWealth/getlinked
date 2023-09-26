import React from 'react'
import Image from 'next/image'

const faqData = [
  'Can I work on a project I started before the hackathon?',
  'What happens if I need help during the hackathon?',
  'What happens if I dont have an idea for a projecr?',
  'Can I join a team or do I have to come with one?',
  'What happens after the hackathon ends?',
  'Can I work on a project I started before the hackathon?',
];

export default function FAQSection() {
  const magentaPurpleColor = "#d434fe";
  return (
<section className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-10 2xl:flex-row border-b-2 pb-20  text-center lg:text-start  justify-between">
   <div className="lg:hidden block pt-20 pb-10 ">
          <h3 className="features-heading font-ClashBold text-white font-bold pb-2">
            Frequently Ask <br />
            <span style={{ color: magentaPurpleColor }}>Questions</span>
          </h3>
          <p >We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
          
      </div>
   <div className="intro-text w-full lg:w-1/2 lg:pt-[8rem] ">

   <div className="hidden lg:block">
          <h3 className="features-heading font-ClashBold text-white font-bold">
            Frequently Ask <br />
            <span style={{ color: magentaPurpleColor }}>Questions</span>
          </h3>
          <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
          
      </div>
<ul className="text-start pt-5 pb-5 lg-pb-0">
          {faqData.map((question, index) => (
            <li key={index} className="border-b-2 border-b-[#d434fe] py-4 flex justify-between items-center">
              <div>{question}</div>
              <span className=" font-bold cursor-pointer" style={{color: magentaPurpleColor}}>+</span>
            </li>
          ))}
        </ul>        
</div>
<div className="intro-img relative w-full lg:top-10 lg:w-1/2 items-center justify-center ">
<div className="flex flex-row relative justify-center items-center bottom-[-5rem] top-[2rem]">
<p className="q-marks small small-1 top-[3.5rem] left-[-5rem]">?</p>
<span className="relative top-[10rem] left-[-3rem] lg:left-[2rem] xl:left-[-10rem]">
  <Image src="/assets/star pu.svg" alt="creativity" width={50} height={50}
  className='w-5' />
    </span>
    <span className="relative top-[15rem] left-[-8rem] lg:top-[18rem] lg:left-[4rem] xl:top-[20rem] xl:left-[-15rem]">
  <Image src="/assets/star gray.svg" alt="creativity" width={50} height={50}
  className='w-5' />
    </span>
<p className="q-marks left-[-3rem] top-[1rem] lg:left-[-2rem] xl:left-[-4rem]">?</p>
<span className="relative left-[-2rem]">
  <Image src="/assets/star pu.svg" alt="creativity" width={50} height={50}
  className='w-5' />
    </span>
<p className="q-marks small small-2 top-[3.5rem] left-[-1rem] z-2">?</p>

</div>
<Image src="/assets/FAQ picture.svg" alt="creativity" width={490} height={477} />
<span className="relative left-[15rem] top-[-2rem] lg:left-[20rem]">
<Image src="/assets/star.svg" alt="creativity" width={50} height={50}
className="w-5" />
</span>   
</div>
</section>
  )
}
