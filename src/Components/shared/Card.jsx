import React from "react";

const Card = ({ data }) => {
  return (
    <div className="p-4 border-4 mx-4 rounded-lg hover:border-b-teal-500 hover:shadow-lg">
      <div className="flex justify-evenly items-center">
        <div className="icon rounded-full p-2 h-14 w-14 mx-4 my-3 shadow-lg bg-slate-500">
          <img
            src={data.avatar}
            alt=""
            className="h-full w-full object-contain block"
          />
        </div>

        <div className="w-[45%]">
          <h4 className="text-black font-semibold text-start">{data.name}</h4>
          <p className="text-black text-sm text-start">{data.post}</p>
        </div>
      </div>
      <div className="paragrph">
        <p className="text-black text-sm text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ea itaque ullam deserunt,
        </p>
      </div>
    </div>
  );
};

export default Card;
