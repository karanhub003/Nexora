import React from "react";
import bg from "../../../images/Editorial/bg.webp";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/button";

export default function EditorialSection() {
  return (
    <section
      className="EditorialSectionContainer w-full min-h-100 flex items-center   bg-cover  bg-no-repeat bg-center py-2.5 my-3.5  "
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="w-300 mx-auto flex justify-end items-center ">
        <div className="headingInfo  flex flex-col gap-3 py-3.5 px-5 justify-center  ">
          <p className="text-[10px] font-body font-semibold tracking-[2px] uppercase">
            THE NEXORA EDIt
          </p>
          <div className="headingWrapper space-y-1.5">
            <h3 className="text-[38px] font-display font-bold leading-8 ">
              Designed for
            </h3>
            <h3 className="text-[38px] font-display font-bold leading-8 ">
              the way you live.
            </h3>

            <p className="text-[12px] font-body font-medium w-65 ">
              Thoughtfully selected products for spaces, routines and moments
              that matter.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            className="w-60 flex items-center justify-center gap-3.5"
          >
            Explore the collection <ArrowRight size="16px" />
          </Button>
        </div>
      </div>
    </section>
  );
}
