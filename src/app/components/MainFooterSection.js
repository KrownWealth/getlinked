import React from "react";
import Image from "next/image";
import Link from "next/link";
import BackToTop from "./BackToTop";



export default function Footer() {
  const magentaPurpleColor = "#d434fe";

  return (
    <footer className="bg-footer-bg text-white py-20">
      <div className="container mx-auto py-12 flex flex-col sm:items-start justify-center lg:flex-row lg:justify-between">
        {/* Column 1 */}
        <div className="flex flex-col sm:items-start mb-8 lg:mb-0 lg:flex-row lg:w-2/3 lg:mr-10">
          <div className="mb-4 lg:mb-0 w-full">
         
          <div className="w-5 relative lg:top-12 lg:-left-12">
            <Image src="/assets/star.svg" alt="star white" width={10} height={10} />
          </div>
            <Link href="/">
            <h1 className="font-ClashBold font-bold text-2xl lg:text-3xl">
              get<span style={{ color: magentaPurpleColor }}>linked</span>
            </h1>
            </Link>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex flex-row">
              <Link href="">Terms of Use</Link>
              <Link href="">Privacy Policy</Link>
            </div>
          </div>
         
        </div>

        {/* Column 2 */}
        <div className="flex flex-col lg:w-1/3 sm:items-start mb-8 lg:mb-0 lg:flex-row ">
          <div className="mb-4 lg:mb-0 w-full">
            <h3
              className="text-xl font-bold"
              style={{ color: magentaPurpleColor }}
            >
              Useful Links
            </h3>
            <ul className="flex flex-col">
              <li>
                <Link href="#overview">Overview</Link>
              </li>
              <li>
                <Link href="#timeline">Timeline</Link>
              </li>
              <li>
                <Link href="#faq">FAQs</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>

              <li>
                <Link href="" style={{ color: magentaPurpleColor }}>
                  Follow us
                </Link>
                <ul className="flex ml-4 gap-2">
                  <li className="footer-social">
                    <Link href="https://instagram.com/getlinked.ai?igshid=NTc4MTIwNjQ2YQ==">
                      <Image
                        src="/assets/insta logo.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </Link>
                  </li>
                  <li className="footer-social">
                    <Link href="https://twitter.com/getLinkedai">
                      <Image
                        src="/assets/Twitter logo.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </Link>
                  </li>
                  <li className="footer-social">
                    <Link href="https://www.facebook.com/getLinkedai">
                      <Image
                        src="/assets/facebook logo.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </Link>
                  </li>
                  <li className="footer-social">
                    <Link href="https://www.linkedin.com/company/getlinked-ai/">
                      <Image
                        src="/assets/linkedin logo.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col lg:w-1/3 sm:items-start">
          <div className="mb-4 lg:mb-0 w-full">
            <h3
              className="text-xl font-bold"
              style={{ color: magentaPurpleColor }}
            >
              Contact Us
            </h3>
            <div className="flex items-center  mb-2">
              <Image src="/assets/phone.svg" alt="phone" width={10} height={10} />
              <p className="ml-2">+234 679 81819</p>
            </div>
            <div className="flex items-start mb-2">
              <Image src="/assets/location.svg" alt="location" width={10} height={10} />
              <p className="ml-2">
                <span>27, Alara Street</span>
                <br />
                <span>Yaba 100012</span>
                <br />
                <span>Lagos State</span>
              </p>
              <div className="w-5 -top-18 left-28 relative">
            <Image src="/assets/star.svg" alt="star white" width={10} height={10} />
          </div>
            </div>
            <div className="w-10 relative lg:top-10 lg:-left-60 hidden lg:block">
        <Image src="/assets/star pu.svg" alt="star purple" width={10} height={10} />
          </div>
            <div className="w-5 sm:-top-10 lg:-left-10 hidden lg:block relative">
            <Image src="/assets/star gray.svg" alt="star white" width={10} height={10} />
          </div>

          </div>
        </div>
      </div>
              {/* Column 4 */}
      <div className="container mx-auto items-center justify-center">
      
        <p className="text-center ">All right reserved.&copy; getlinked Ltd.</p>
      </div>
      <BackToTop /> 
    </footer>
  );
}
