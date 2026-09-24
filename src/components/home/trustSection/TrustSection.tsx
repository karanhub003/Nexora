import React from 'react'
import { Truck,RotateCwFadingClock,Lock,Headset } from 'lucide-react'



export default function TrustSection() {
  return (
    <div className='TrustSectionContainer  max-w-370 mx-auto  flex items-center justify-around py-5 mt-2.5 rounded-lg bg-gray-200/50 '>
      <div className="trustBox  flex gap-4 items-center p-2">
        <Truck size="32px"/>
        <div className="infoWrapper">
        <p className='text-[14px] font-semibold font-body'>Free Shipping</p>
        <p className='text-[10px] font-medium font-body text-[#77736D] '>On Order over 1,499</p>
        </div>
      </div>
      <div className="trustBox  flex gap-4 items-center p-2">
         <RotateCwFadingClock size="32px"/>
        <div className="infoWrapper">
        <p className='text-[14px] font-semibold font-body'>Easy Returns</p>
        <p className='text-[10px] font-medium font-body text-[#77736D] '>30-day return policy</p>
        </div>
      </div>
      <div className="trustBox  flex gap-4 items-center p-2">
         <Lock size="32px"/>
        <div className="infoWrapper">
        <p className='text-[14px] font-semibold font-body'>Secure Payments</p>
        <p className='text-[10px] font-medium font-body text-[#77736D] '>100% safe & encrypted</p>
        </div>
      </div>
      <div className="trustBox  flex gap-4 items-center p-2">
         <Headset size="32px"/>
        <div className="infoWrapper">
        <p className='text-[14px] font-semibold font-body'>24/7 Support</p>
        <p className='text-[10px] font-medium font-body text-[#77736D] '>we're here to help</p>
        </div></div>  

    </div>
  )
}
