import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs'

export default function PrivacyTermsSection() {
  const magentaPurpleColor = "#d434fe";

  return (
    <section className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-5 2xl:flex-row border-b-2 py-20 text-start  justify-between">

        <div className="privacy-text w-full lg:w-1/2 lg:mr-20">
          <h3 className="features-heading font-ClashBold text-white font-bold">
            Privacy Policy and <br />
            <span style={{ color: magentaPurpleColor }}>Terms</span>
          </h3>
          <p className="pb-5">Last updated on September 12, 2023</p>
          <p className="pb-10">
            Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take care of our participant.
          </p>

          <div className="license-policy py-10 text-start">
            <p className="pb-5">
              At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech Hackathon event. By participating in our event, you consent to the practices described in this policy.
            </p>
            <h3 className="pb-4" style={{ color: magentaPurpleColor }}>Licensing Policy</h3>
            <p className="font-bold text-white pb-10">Here are terms of our Standard License</p>
            <div className="flex pb-5 ">
               <BsCheckCircleFill className="check-mark" />
              <p className="ml-2">The Standard License grants you a non-exclusive right to navigate and register for our event</p>
              </div>
              <div className="flex pb-10 ">
              <BsCheckCircleFill className="check-mark" />
              <p className="ml-2"> You are licensed to use the item available at any free source sites, for your project development.</p>
            </div>
            <button className="flex cta-btn font-montserat font-base items-center justify-center">
              <Link href="/register" className="">
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="privacy-img relative w-full top-10 lg:w-1/2 items-center justify-center">
        <Image
              src="/assets/privacy_lock.svg"
              alt="prices cup"
              width={100}
              height={100}
              className="relative z-10 "
          />
          <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src="/assets/privacy.svg"
      alt="prices cup"
      width={100}
      height={100}
      className="relative z-50"
      style={{ top: '-5px' }} 
    />
  </div>
        </div>

    </section>
  )
}
