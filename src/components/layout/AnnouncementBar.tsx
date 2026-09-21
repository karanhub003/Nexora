import { ArrowRight } from "lucide-react"
import{IndianRupee} from "lucide-react"
import{Truck} from "lucide-react"

export default function AnnouncementBar() {
  return (
    <div className="announcementBarContainer  flex items-center justify-between  text-white max-w-370 mx-auto p-1">
        <div className="leftSideContainer  flex space-x-2 items-center justify-center">
            <h3 className="text-[14px] font-semibold">NEW SEASON</h3>
            <div className="w-px h-4 bg-white"></div>  
            <p className="text-[14px] font-extralight">Up to 40% off on selected item</p><ArrowRight size="15px"/>
        </div>
        <div className="rightSideContainer flex items-center space-x-2">
            <Truck size="15px"/>
            <p className="text-[14px] font-extralight">Free shipping orders over ₹1,499</p>
        </div>

    </div>
  )
}

