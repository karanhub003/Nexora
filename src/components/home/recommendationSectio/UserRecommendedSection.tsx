import { ChevronRight } from "lucide-react";
import React from "react";
import Button from "@/components/common/button";
import { searchProduct } from "@/data/Products";
import RecommendedCard from "./RecommendedCard";

export default function UserRecommendedSection() {
  return (
    <div className="UserRecommendedSectionContainer max-w-370 mx-auto py-6 px-3.5">
      <div className="HeadingWrapper  flex justify-between items-start my-2.5 space-y-1.5">
        <div className="leftSide flex flex-col gap-1 ">
          <p className="text-[12px] font-body font-semibold tracking-[3px] text-[#9B968E] uppercase">
            just for you
          </p>

          <h3 className="text-[28px] font-display font-bold tracking-[1px] leading-7.5">Based on what you've explored</h3>
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
      <div className="featuredProductWrapper  grid grid-cols-5  ">
                {searchProduct.map((product) => (
                  <RecommendedCard key={product.id} product={product} />
                ))}
              </div>
    </div>
  );
}
