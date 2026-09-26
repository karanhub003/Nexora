import bgHome from "../../../images/collection/bgHome.webp"
import bgWork from "../../../images/collection/bgWork.webp"
import bgWeek from "../../../images/collection/bgWeek.webp"
import bgSeason from "../../../images/collection/bgSeason.webp"
import Button from "@/components/common/button"
import { ArrowRight } from "lucide-react"

export default function CollectionSection() {
  return (
    <div className='CollectionSectionContainer max-w-370 mx-auto p-6 my-3 flex flex-col gap-2'>
      <div className="infoHeading flex flex-col gap-1.5">
       <p className="text-[10px] font-body  tracking-[2px]  uppercase font-medium [word-spacing:6px]">
            shop by collection
          </p>
        <p className='text-[14px] font-display font-semibold'>
          Collections designed around by you shop.
        </p>
        
    </div>  

    <div className="collectionCardWrapper grid grid-cols-4  gap-3 py-2 ">
      <div className="collectionCardBox  bg-cover bg-no-repeat min-h-57.5  flex flex-col justify-center space-y-8 px-4 rounded-lg overflow-hidden" style={{backgroundImage:`url(${bgSeason.src})`}}>
        <div className="heading">
          <h3 className="text-[24px] font-display font-bold leading-6">New Season</h3>
          <h3 className="text-[24px] font-display font-bold leading-6">Essentials</h3>
        </div>
       
          <Button variant="outline" size="md" className="w-30 rounded-full flex items-center justify-between">Explore <ArrowRight size="17px"/></Button>
     
      </div>
      <div className="collectionCardBox bg-cover bg-no-repeat min-h-57.5  flex flex-col justify-center space-y-8 px-4 rounded-lg overflow-hidden" style={{backgroundImage:`url(${bgWork.src})`}} >
           <div className="heading">
          <h3 className="text-[24px] font-display font-bold leading-6">Workspace</h3>
          <h3 className="text-[24px] font-display font-bold leading-6">Edit</h3>
        </div>
       
          <Button variant="outline" size="md" className="w-30 rounded-full flex items-center justify-between">Explore <ArrowRight size="17px"/></Button>
      </div>
      <div className="collectionCardBox bg-cover bg-no-repeat min-h-57.5  flex flex-col justify-center space-y-8 px-4 rounded-lg overflow-hidden" style={{backgroundImage:`url(${bgWeek.src})`}}>
             <div className="heading">
          <h3 className="text-[24px] font-display font-bold leading-6">Weekend</h3>
          <h3 className="text-[24px] font-display font-bold leading-6">Style</h3>
        </div>
       
          <Button variant="outline" size="md" className="w-30 rounded-full flex items-center justify-between">Explore <ArrowRight size="17px"/></Button>
      </div>
      <div className="collectionCardBox bg-cover bg-no-repeat min-h-57.5  flex flex-col justify-center space-y-8 px-4 rounded-lg overflow-hidden" style={{backgroundImage:`url(${bgHome.src})`}}>
                   <div className="heading">
          <h3 className="text-[24px] font-display font-bold leading-6">Home</h3>
          <h3 className="text-[24px] font-display font-bold leading-6">refresh</h3>
        </div>
       
          <Button variant="outline" size="md" className="w-30 rounded-full flex items-center justify-between">Explore <ArrowRight size="17px"/></Button>
      </div>
    </div>
    </div>
  )
}
