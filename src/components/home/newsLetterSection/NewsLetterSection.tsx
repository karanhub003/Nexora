import Button from "@/components/common/button"
import { ArrowRight } from "lucide-react"

export default function NewsLetterSection() {
  return (
    <div className='NewsLetterSectionContainer  max-w-370 mx-auto grid grid-cols-[1.5fr_1fr] py-6 '>
        <div className="leftSide px-3 py-1">
            <p className='text-[10px] font-body tracking-[2px] font-medium uppercase text-[#9B968E]'>stay in the loop</p>
            <h3 className='text-[24px] font-display tracking-wide font-bold text-white'>Better products. Better discoveries</h3>
            <p className='text-[12px] font-body font-semibold text-[#9B968E]'>Get new arrivals, exclusive offers and curated collections delivered to your inbox.</p>
        </div>
        <div className="rightSide  px-3 py-1 leading-6">
           <div className="searchBtnBox flex items-center">
                <div className="inputDiv border border-[#30302D] w-80 px-1.5 py-2.5 rounded-lg bg-gray-800/40">
                    <input className=" pl-1.5 w-full outline-none placeholder:text-[#9B968E] placeholder:text-[12px] text-[#9B968E]" type="email" id='email' name='email' placeholder='Enter your email address' />
                </div>
                <Button variant="primary"  className=" text-[16px] font-body font-semibold flex items-center bg-white text-black px-1.5 py-2.5 rounded-lg w-30 justify-center ">Subscribe <ArrowRight size="14px"/></Button>
            
            </div> 
            <p className="text-[10px] font-semibold font-body text-[#9B968E] pl-0.5">No spam. Unsubscribe anytime</p>
        </div>
    </div>
  )
}
 