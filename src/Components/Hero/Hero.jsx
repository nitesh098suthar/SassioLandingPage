import React from "react";
import Title from "../shared/Title";
import Header from "../Layout/Header";
const Hero = () => {
  return (
    <div className="min-h-screen border-red-200 w-screen bg-hero bg-cover grid place-items-center ">
      <div className=" flex-col justify-center items-center w-full">
        <Header />
        <div className="mt-28">
          <Title
            color="white"
            head="Let your imagination run wild"
            
          />
          <div className="grid place-items-center my-10">
            <div className="bg-white h-fit rounded-lg w-fit px-2 py-1">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="bg-white px-1 mx-1 border-none outline-none text-gray-600"
              />
              <button className="bg-[#32C89A]">Get Started</button>
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center items-center">
          <div className="bg-hero-asset bg-contain mx-auto bg-center h-[70vh] w-full bg-no-repeat">
            <div className="bg-analytics bg-contain h-[60vh] bg-center bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
