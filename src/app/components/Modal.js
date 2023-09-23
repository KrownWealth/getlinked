import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Modal() {
  return (
    <div className="w-3/5 modal">
      <div className="modal-stars">
      <Image src="/assets/star pu.svg" alt="" width={10} height={10}/>
      <Image src="/assets/star gray.svg" alt="" width={10} height={10}/>
      <Image src="/assets/star" alt="" width={10} height={10}/>
      </div>
      <div className="modal-content">
        <div className="modal-imgs flex flex-row">
          <Image src=".assets/successful-done.svg" alt="" width={50} height={50}/>
          <Image src="successful-man.png" alt="" width={50} height={50}/>


        </div>
        <div className="modal-text">
          <p className="pb-5">Congratulations you have successfully Registered</p>
          <p>Yes, it was esy and you did it! check your mail box for next step 
            <span>
              <Image src="emoji-woman.svg" alt="" width={} height={} /> 
            </span>
          </p>
        </div>
        <div className="modal-btn">
        <button className="cta-btn cta-btn-desktop font-montserat font-base">
          <Link href="/register" className="">Back</Link>
          </button>
        </div>
        

      </div>
      



      
    </div>
  )
}
