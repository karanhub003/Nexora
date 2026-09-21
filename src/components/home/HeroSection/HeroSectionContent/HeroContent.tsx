import React from "react";
import Button from "../../../common/button";
import {Leaf,Truck,ShieldCheck} from 'lucide-react'
export default function HeroContent() {
  return (
    <div className="heroContentContainer flex flex-col space-y-4 ">
      <div className="eyeBrowContainer">
        <p className="text-[12px] tracking-[2px] text-[#9B968E] font-semibold">DISCOVER A BRIGHTER EVERYDAY</p>
      </div>
      <div className="headingContainer flex flex-col space-y-1">
        <div className="headingWrapper">
          <h1 className="text-[48px] font-bold font-display leading-12">Products</h1>
          <h1 className="text-[48px] font-bold font-display leading-12">for a Better</h1>
          <h1 className="text-[48px] font-bold font-display leading-12">Tomorrow</h1>
        </div>
        <div className="subHeadingContainer w-85">
          <p className="text-[14px] font-light font-body text=[#3B3935]">
            Modern essentials for a more mindful, connected and stylish life.
          </p>
        </div>
      </div>
      <div className="actionBtnWrapper border flex space-x-3">
        <Button>Shop Now</Button>
        <Button>Watch Video</Button>
      </div>
      <div className="heroStats flex  items-center">
        <div className="statsCard  flex w-40 space-x-1 px-2.5 py-1.5 items-center">
            <Leaf size="30px" stroke-width="1.2px"/>
          <p className="text-[14px] font-body font-medium leading-4">Sustainable Choices</p>
        </div>
        <div className="statsCard flex w-40 space-x-1 px-2.5 py-1.5 items-center">
            <Truck size="30px" stroke-width="1.2px"/>
          <p className="text-[14px] font-body font-medium leading-4">Fast & Reliable Delivery</p>
        </div>
        <div className="statsCard flex w-40 space-x-1 px-2.5 py-1.5 items-center">
            <ShieldCheck size="30px" stroke-width="1.2px"/>
          <p className="text-[14px] font-body font-medium leading-4">Trusted by 5OK+ Customers</p>
        </div>
      </div>
    </div>
  );
}
