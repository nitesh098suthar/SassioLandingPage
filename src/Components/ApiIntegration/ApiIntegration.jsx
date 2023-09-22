import React from "react";
import apiPhone from "../../assets/images/1Phone13.5x10.png";
import Title from "../shared/Title";

export const Roadmap = ({ data }) => {
  return (
    <div className="flex h-24">
      <div>
        <div
          style={{ backgroundColor: data.number === 1 && "navy" }}
          className="bg-violet-50 p-4 rounded-xl h-14 w-14 grid place-items-center"
        >
          <p
            style={{ color: data.number !== 1 ? "#1A3553" : "white"}}
            className="font-semibold text-start"
          >
            {data.number}
          </p>
        </div>
        {data.number !== 3 && (
          <span className="block bg-violet-100 h-[50%] w-1 mx-auto"></span>
        )}
      </div>
      <div className="w-[70%]  mx-10">
        <h5 className="text-[#1A3553] font-semibold text-start">{data.title}</h5>
        <p className="text-[#1A3553] text-xs text-start">{data.text}</p>
      </div>
    </div>
  );
};

const ApiIntegration = () => {
  return (
    <div className="flex bg-white h-screen  w-full justify-center items-center">
      <div className="textContainer w-1/3 space-y-8 ">
        <Title head="API Integration" center="start" />
        <div className=" h-[50vh] w-[70%]">
          <Roadmap
            data={{
              title: "Register your API",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, cupiditate.",
              number: 1,
            }}
          />
          <Roadmap
            data={{
              title: "Start Adding Content",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, cupiditate.",
              number: 2,
            }}
          />
          <Roadmap
            data={{
              title: "Unlock your device",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, cupiditate.",
              number: 3,
            }}
          />
        </div>
      </div>
      <div className="imgContainer">
        <img src={apiPhone} alt="" className="h-[70vh]" />
      </div>
    </div>
  );
};

export default ApiIntegration;
