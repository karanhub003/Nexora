import React from "react";
import Button from "../../../common/button";
import { Leaf, Truck, ShieldCheck } from "lucide-react";
export default function HeroContent() {
  return (
    <div className="heroContentContainer flex flex-col space-y-4 gap-2.5 py-14    ">
      <div className="flex flex-col gap-1.5">
        <div className="eyeBrowContainer">
          <p className="text-[12px] tracking-[2px] text-[#9B968E] font-semibold font-body">
            DISCOVER A BRIGHTER EVERYDAY
          </p>
        </div>
        <div className="headingContainer flex flex-col space-y-1 ">
          <div className="headingWrapper">
            <h1 className="text-[58px] font-bold font-display leading-14 tracking-[-0.045em]">
              Products
            </h1>
            <h1 className="text-[58px] font-bold font-display leading-14 tracking-[-0.045em]">
              for a Better
            </h1>
            <h1 className="text-[58px] font-bold font-display leading-14 tracking-[-0.045em]">
              Tomorrow
            </h1>
          </div>
          <div className="subHeadingContainer w-95">
            <p
              className="text-[15px] font-normal font-body text=[#3B3935]  leading-[1.55]
  tracking-[-0.01em]"
            >
              Modern essentials for a more mindful, connected and stylish life.
            </p>
          </div>
        </div>
      </div>
      <div className="actionBtnWrapper  flex space-x-3 mt-3">
        <Button variant="primary" size="lg" className="w-50">
          Shop Now
        </Button>
        <Button variant="outline" size="lg" className="w-50">
          Watch Video
        </Button>
      </div>
      <div className="heroStats flex  items-center mt-3">
        <div className="statsCard  flex w-40 space-x-1 px-2.5 py-1.5 items-center">
          <Leaf size="30px" stroke-width="1.2px" />
          <p className="text-[14px] font-body font-medium leading-4">
            Sustainable Choices
          </p>
        </div>
        <div className="statsCard flex w-40 space-x-1 px-2.5 py-1.5 items-center">
          <Truck size="30px" stroke-width="1.2px" />
          <p className="text-[14px] font-body font-medium leading-4">
            Fast & Reliable Delivery
          </p>
        </div>
        <div className="statsCard flex w-40 space-x-1 px-2.5 py-1.5 items-center">
          <ShieldCheck size="30px" stroke-width="1.2px" />
          <p className="text-[14px] font-body font-medium leading-4">
            Trusted by 5OK+ Customers
          </p>
        </div>
      </div>
    </div>
  );
}
