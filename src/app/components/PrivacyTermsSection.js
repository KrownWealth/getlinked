import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyTermsSection() {
  const magentaPurpleColor = "#d434fe";

  return (
    <section className="container flex flex-col lg:flex-row xl:flex-row 
    lg:gap-5 2xl:flex-row border-b-2 py-10 text-start  justify-between">
      {/* <div className=""> */}

        {/* Privacy Text */}
        <div className="privacy-text w-full lg:w-1/2 lg:mr-20">
          <h3 className="features-heading font-ClashBold text-white font-bold">
            Privacy Policy and <br />
            <span style={{ color: magentaPurpleColor }}>Terms</span>
          </h3>
          <p className="pb-5">Last updated on September 12, 2023</p>
          <p className="pb-10">
            Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take care of our participant.
          </p>

          <div className="license-policy mt-4 text-start">
            <p className="pb-5">
              At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech Hackathon event. By participating in our event, you consent to the practices described in this policy.
            </p>
            <h3 className="pb-4" style={{ color: magentaPurpleColor }}>Licensing Policy</h3>
            <p className="font-bold text-white pb-10">Here are terms of our Standard License</p>
            <ul className="pb-5">
              <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
              <li>You are licensed to use the item available at any free source sites, for your project development.</li>
            </ul>
            <button className="flex cta-btn font-montserat font-base items-center justify-center">
              <Link href="/register" className="">
                Read More
              </Link>
            </button>
          </div>
        </div>

        {/* Privacy Images */}
        <div className="privacy-img w-full lg:w-1/2 lg:pt-0">
          <div className="relative z-1 ">
            <Image
              src="/assets/privacy_lock.svg"
              alt="prices cup"
              width={100}
              height={100}
            />
          </div>
          <div className="relative z-10 top-[-18rem] top-[-24rem] ">
            <Image
              src="/assets/privacy.svg"
              alt="prices cup"
              width={100}
              height={100}
            />
          </div>
        </div>

      {/* </div> */}
    </section>
  )
}
