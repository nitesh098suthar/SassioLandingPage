import React from "react";
import Title from "../shared/Title";
import PriceCard from "../shared/PriceCard";
import { pricingData } from "../../api/data";

const Pricing = () => {
  return (
    <div className="h-full w-screen bg-white m-0 pt-14">
      <div className="bg-everything-need min-h-screen w-screen bg-cover bg-center bg-no-repeat">
        <div>
          <Title head="Simple Pricing for your Team" />
        </div>
        <div className="flex justify-center items-center">
          {pricingData?.map((item) => (
            <PriceCard key={item.charge} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
