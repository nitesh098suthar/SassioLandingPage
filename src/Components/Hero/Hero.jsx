import React from "react";
import Title from "../shared/Title";
import Header from "../Layout/Header";
const Hero = () => {
  return (
    <div className="bg-hero bg-cover grid place-items-cente min-h-screen">
      <div className=" flex-col w-full min-h-full justify-center items-center ">
        <Header />
        <div className="mt-28">
          <Title color="white" head="Let your imagination run wild" />
          <div className="grid place-items-center m-auto w-full my-10">
            <div className="bg-white h-fit rounded-xl w-1/4 px-1 py-1 flex justify-between">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="bg-white px-1 mx-1 border-none outline-none text-gray-600"
              />
              <button className="bg-[#32C89A] text-white">Get Started</button>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="bg-hero-asset bg-contain mx-auto bg-center h-[69vh] w-full bg-no-repeat relative ">
            <div className="bg-analytics bg-contain h-[55vh] bg-center bg-no-repeat mt-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
