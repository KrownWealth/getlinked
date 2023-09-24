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
<section id="" className="container intro-section flex flex-col 
      lg:flex-row xl:flex-row 2xl:flex-row py-20 text-center
       items-center justify-center border-b-2 ">
        <div className="intro-text">
          <h3 className="features-heading font-ClashBold
           text-white font-bold pt-10">Frequently Ask <br />
          <span>Question</span>
          </h3>
          <Image
          src="/assets/star gray.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-rules-2"
        />

        
          <p className="font-montserat features-text">
          We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0
</p>
<Image
          src="/assets/star.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-rules-3"
        />
        <ul>
          {faqData.map((question, index) => (
            <li key={index} className="border-b py-2 flex justify-between items-center">
              <div>{question}</div>
              <span className="text-gray-600 cursor-pointer">+</span>
            </li>
          ))}
        </ul>
        </div>
        <div className="intro-img mt-10">
          
        <Image
          src="/assets/star.svg"
          alt="purple lens"
          width={50}
          height={50}
          className="star-rules-1"
        />
          <Image src="/assets/FAQ picture.svg" alt="creativity" width={490} height={477} />
          </div>
        
        

        
        </section>
  )
}
