"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileFooter({lightPurpleColor}) {
  
  return (
    <div className="flex flex-col items-center justify-center py-10 sm:hidden">
        <p style={{ color: lightPurpleColor }} 
        className="font-monteserat text-base font-bold pb-5">Share on</p>
        <div className="flex flex-row gap-2 items-center justify-center text-white">
          <Link href="" >
          <Image src="/assets/insta logo.svg" 
           alt="instagram" width={50} height={50}
           className="social-logo" />
           </Link>
           <Link href="" >
            <Image src="/assets/Twitter logo.svg" 
           alt="instagram" width={50} height={50} 
           className="social-logo" 
           />
           </Link>
           <Link href="" >
            <Image src="/assets/facebook logo.svg" 
           alt="instagram" width={50} height={50} 
           className="social-logo"
           />
           </Link>
            <Link href="" >
           <Image src="/assets/linkedin logo.svg" 
           alt="instagram" width={50} height={50} 
           className="social-logo"
           />
           </Link>

        </div>
      </div>
  )
}
