import Button from "@/components/common/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTASection() {
  return (
    <div className='FinalCTASectionContainer  flex items-center justify-center py-6'>
      <div className="wrapper  flex flex-col items-center justify-center p-1.5 gap-2">
          <div className="flex flex-col items-center justify-center leading-6">
            <h3 className="text-[20px] font-display font-bold [word-spacing:3px]">READY TO DISCOVER SOMETHING NEW?</h3>
            <p className="text-[14px] [word-spacing:5px] font-display font-semibold text-[#77736D] ">Explore thousands of products across the categories you love.</p>
          </div>
            <Button variant="primary"  className="flex items-center py-2.5  w-60 justify-center rounded-full text-[14px] ">Shop All Products <ArrowRight size="16px"/></Button>
        </div>  
    </div>
  )
}
