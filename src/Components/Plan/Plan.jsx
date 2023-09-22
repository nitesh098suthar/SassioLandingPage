import React from "react";
import Title from "../shared/Title";
import planImg from "../../assets/images/1Asset 213.5x10.png";
const Plan = () => {
  return (
    <div className="flex bg-white h-screen  w-full justify-center items-center">
      <div className="imgContainer ">
        <img src={planImg} alt="" className="h-[70vh]" />
      </div>
      <div className="textContainer w-1/3 ml-20 space-y-8">
        <Title head="We are 100% involved" center="start"/>
        <div className="btn text-start">
          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
