import React from "react";
import Title from "../shared/Title";
import { iconData } from "../../api/data";

const Features = () => {
  return (
    <div className="bg-white w-screen py-20">
      <div className="title py-14">
        <Title head="Awesome Features" />
      </div>
      <div className="flex w-[70%] mx-auto">
        {iconData?.slice(0, 3).map((data) => (
          <div key={data.title} className="p-4 flex items-center w-[50%]">
            <div className="icon rounded-full p-2 h-20 w-20 mx-4 my-3 shadow-lg bg-slate-500">
              <img
                src={data.icon}
                alt=""
                className="h-full w-[99%] object-contain block"
              />
            </div>

            <div className="w-[45%]">
              <h4 className="text-black font-semibold text-start">{data.title}</h4>
              <p className="text-black text-sm text-start">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
