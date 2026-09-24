import React from "react";
import bannerFirst from "../../../images/promotional/bannerfirst.webp";
import secondFirst from "../../../images/promotional/secondbanner.webp";
import Button from "@/components/common/button";
import { ArrowRight } from "lucide-react";

export default function promotionalSection() {
  return ( 
    <div className="promotionalSectionContainer grid grid-cols-[1fr_1fr] gap-5 py-6  max-w-370 mx-auto">
      <div
        className="leftSide  bg-cover bg-no-repeat min-h-80   text-white flex justify-between  p-3 rounded-lg "
        style={{ backgroundImage: `url(${secondFirst.src})` }}
      >
        <div className="headingInfo  flex flex-col gap-2.5 py-3.5 px-5 justify-center   ">
          <p className="text-[10px] font-body font-semibold tracking-[2px]">NEW COLLECTION</p>
          <div className="headingWrapper">
            <h3 className="text-[26px] font-display font-bold leading-8 ">The Next</h3>
            <h3 className="text-[26px] font-display font-bold leading-8 ">Generation</h3>
            <h3 className="text-[26px] font-display font-bold leading-8 ">In Your Hands</h3>
            <p className="text-[12px] font-body font-medium w-35 ">Experience innovation ever before.</p>
          </div>
          
          <Button variant="secondary" size="md" className="w-60 flex items-center justify-center gap-3.5">Explore Electronics <ArrowRight size="16px"/></Button>
        </div>
        <div className="productName  flex flex-col items-center justify-end mr-10.5">
          <p className="text-[14px] font-body font-medium leading-5 tracking-wider">iPhone 15 Pro</p>
          <p className="text-[14px] font-body font-medium leading-5 tracking-wider">Now in Stock</p>
        </div>
       
      </div>
      <div
        className="rightSide  bg-cover bg-no-repeat min-h-80  flex justify-between  p-3 rounded-lg "
        style={{ backgroundImage: `url(${bannerFirst.src})` }}
      >

       <div className="headingInfo  flex flex-col gap-2.5 py-3.5 px-5 justify-center   ">
          <p className="text-[10px] font-body font-semibold tracking-[2px] uppercase ">up to 40% off</p>
          <div className="headingWrapper ">
            <h3 className="text-[28px] font-display font-bold leading-8 ">Elevate</h3>
            <h3 className="text-[28px] font-display font-bold leading-8 ">Your Style</h3>
            <p className="text-[14px] font-body font-medium my-1.5 ">New season. Now perspective.</p>
          </div>
          
          <Button variant="primary" size="md" className="w-45 flex items-center justify-center gap-3.5">Shop Fashion <ArrowRight size="16px"/></Button>
        </div>
        <div className="productName  flex flex-col items-start  mr-9 mt-6 ">
          <p className="text-[14px] font-body font-medium leading-6 tracking-widest uppercase text-[#3B3935]">styles</p>
          <p className="text-[14px] font-body font-medium leading-6 tracking-wider uppercase text-[#3B3935]">lives</p>
          <p className="text-[14px] font-body font-medium leading-6 tracking-wider uppercase text-[#3B3935]">here</p>
          <hr className="w-5 mt-2" />
        </div>



      </div>
    </div>
  );
}
