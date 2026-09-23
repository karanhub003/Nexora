import React from "react";
import Button from "../../common/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { featuredProducts } from "@/data/Products";
import HighLightingProductCard from "./HighLightingProductCard";

export default function HighLightingProductsSection() {
  return (
    <div className="HighLightingProductsSectionContainer max-w-370 mx-auto py-6 px-3.5">
      <div className="HeadingWrapper  flex justify-between items-start my-2.5">
        <div className="leftSide ">
          <p className="text-[12px] font-body font-semibold tracking-[3px] text-[#9B968E]">
            FEATURED FOR YOU
          </p>
          <div className="headingWrapper mt-1.5 ">
            <h3 className="text-[28px] font-display font-bold tracking-[1px] leading-7.5">
              Objects worth
            </h3>
            <h3 className="text-[28px] font-display font-bold tracking-[1px] leading-7.5">
              knowing about
            </h3>
          </div>
          <p className="text-[12px] text-[#3B3935] font-medium">
            Handpicked products for everyday life.
          </p>
        </div>
        <div className="rightSide">
          <Button
            variant="outline"
            size="md"
            className="flex items-center gap-1"
          >
            View all <ChevronRight size="16px" />
          </Button>
        </div>
      </div>
      <div className="featuredProductsContainer my-2.5 relative  ">
        <div
          className=" absolute
    -left-4.75
    top-[32%]
    -translate-y-1/2
    z-10
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    bg-white
    shadow-[0_2px_8px_rgba(18,18,17,0.08)] "
        >
          <ChevronLeft />
        </div>
        <div className="featuredProductWrapper  grid grid-cols-5  ">
          {featuredProducts.map((product) => (
            <HighLightingProductCard key={product.id} product={product} />
          ))}
        </div>
        <div
          className="absolute
    -right-2.5
    top-[32%]
    -translate-y-1/2
    z-10
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    bg-white
    shadow-[0_2px_8px_rgba(18,18,17,0.08)] "
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
