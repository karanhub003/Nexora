import { ChevronLeft,ChevronRight } from "lucide-react"

export default function HeroImageChanger() {
  return (
    <div className='heroImageChangerContainer  flex items-center w-40 space-x-2 justify-center'>
    <div className="leftArrow  w-8 h-8 flex items-center justify-center bg-white rounded-full">
        <ChevronLeft size="16px"/>
    </div>
    <div className="flex text-[14px] font-semibold text-white"><p>01/ <span>03</span></p></div>
    <div className="rightArrow w-8 h-8 flex items-center justify-center bg-white rounded-full">
        <ChevronRight size="16px"/>
    </div>
    </div>
  )
}
