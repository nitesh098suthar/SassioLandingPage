import React from "react";
import Title from "../shared/Title";
import PriceCard from "../shared/PriceCard";
import { pricingData } from "../../api/data";

const Pricing = () => {
  return (
    <div className="h-[130vh] w-full bg-white m-0 pt-14 border-2 border-transparent ">
      <div className="bg-everything-need h-[118vh] w-full bg-cover bg-center bg-no-repeat border-2 border-transparent">
        <div className="mt-[7rem]">
          <Title head="Simple Pricing for your Team" />
        </div>
        <div className="flex justify-center items-center ">
          {pricingData?.map((item) => (
            <PriceCard key={item.charge} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
