import React from "react";
import Title from "../shared/Title";
import HowItWorksIcons from "../shared/HowItWorksIcons";

const HowItWorks = () => {
  return (
    <div className="bg-white m-0 p-0  w-full grid place-items-center ">
      <div className="pt-20">
        <Title head="How it Works"  />
      </div>
      <div className="icons-box flex justify-evenly w-[70vw] my-8">
        <HowItWorksIcons />
      </div>
    </div>
  );
};

export default HowItWorks;
