import React from 'react'
import Image from 'next/image'

const faqData = [
  'Question 1: What is Lorem Ipsum?',
  'Question 2: Why do we use it?',
  'Question 3: Where can I get some?',
  'Question 4: How does Lorem Ipsum work?',
  'Question 5: Is it safe to use?',
  'Question 6: How do I get started?',
];

export default function FAQSection() {
  return (
<section className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-10 2xl:flex-row border-b-2 pb-20 text-start  justify-between">
   <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 pb-10 hidden">Frequently Ask <br />
          <span>Questions</span>
  </h3>
   <div className="intro-text w-full lg:w-1/2 lg:pt-[8rem] ">

  <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10 pb-10 hidden lg:block">Frequently Ask <br />
          <span>Questions</span>
  </h3>
  <p className="font-montserat features-text">
          We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0
</p>
<ul>
          {faqData.map((question, index) => (
            <li key={index} className="border-b py-2 flex justify-between items-center">
              <div>{question}</div>
              <span className="text-gray-600 cursor-pointer">+</span>
            </li>
          ))}
        </ul>        
</div>
<div className="intro-img relative w-full top-10 lg:w-1/2 items-center justify-center ">

<Image src="/assets/FAQ picture.svg" alt="creativity" width={490} height={477} />
         
</div>
</section>
  )
}
