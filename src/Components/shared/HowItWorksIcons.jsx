import React from "react";
import { iconData } from "../../api/data.js";
const HowItWorksIcons = () => {
  return iconData?.map((data) => (
    <div key={data.title} className="p-4 flex-col justify-center items-center">
      <div className="icon rounded-full p-2 h-20 w-20 mx-auto my-3 hover:bg-[#1732A5] cursor-pointer transition-[.5s]" style={{boxShadow: "0 0 15px #E1E1E1"}}>
        <img src={data.icon} alt="" className="h-full p-4 w-full object-contain block " id="inverting" />
      </div>
      <div className="">
        <h4 className="text-[#1A3553] font-semibold text-center">{data.title}</h4>
        <p className="text-[#1A3553] text-sm text-center ">{data.text}</p>
      </div>
    </div>
  ));
};

export default HowItWorksIcons;
