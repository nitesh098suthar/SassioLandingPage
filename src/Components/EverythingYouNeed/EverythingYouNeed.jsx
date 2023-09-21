import React from "react";
import Title from "../shared/Title";
import everythingImg from "../../assets/images/Everything_you_need_home_page-transformed.png";
import Menu from "../shared/Menu";
const EverythingYouNeed = () => {
  return (
    <div className="h-full w-screen bg-white m-0 p-0">
      <div className="bg-everything-need min-h-screen w-screen bg-cover bg-center bg-no-repeat">
        <div className="bg-everything-need-asset min-h-screen w-screen bg-contain bg-center bg-no-repeat">
          <div className="pt-16">
            <Title head="Everything you need" />
          </div>
          {/* box */}
            <Menu />
          {/* menu remaining */}
          <div className="flex justify-center items-center mt-10">
            <div className=" h-[50vh] w-[30%] space-y-4">
              <Title
                head="Real time project status monitoring"
                center="start"
              />
              <div className="float-left">
                <button>Get Started</button>
              </div>
            </div>
            <div className="imgContainer w-[50%]">
              <img
                src={everythingImg}
                alt=""
                className="h-full block object-contain w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverythingYouNeed;
