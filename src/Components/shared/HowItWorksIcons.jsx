import React from "react";
import { iconData } from "../../api/data.js";
const HowItWorksIcons = () => {
  return iconData?.map((data) => (
    <div key={data.title} className="p-4 flex-col justify-center items-center">
      <div className="icon rounded-full p-2 h-20 w-20 mx-auto my-3 shadow-lg">
        <img src={data.icon} alt="" className="h-full w-full object-contain block" />
      </div>
      <div>
        <h4 className="text-black font-semibold">{data.title}</h4>
        <p className="text-black text-sm">{data.text}</p>
      </div>
    </div>
  ));
};

export default HowItWorksIcons;
