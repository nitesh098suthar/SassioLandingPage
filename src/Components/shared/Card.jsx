import React from "react";

const Card = ({ data }) => {
  return (
    <div className="p-6 border-b-4 mx-4 rounded-lg hover:border-b-teal-500 hover:shadow-lg">
      <div className="flex items-center">
        <div className="icon rounded-full  h-14 w-14  my-3 shadow-lg bg-slate-500 overflow-hidden">
          <img
            src={data.avatar}
            alt=""
            className="h-full  w-full object-cover block "
          />
        </div>

        <div className="w-[45%] ml-8">
          <h4 className="text-black font-semibold text-start">{data.name}</h4>
          <p className="text-black text-sm text-start">{data.post}</p>
        </div>
      </div>
      <div className="paragrph py-6 ">
        <p className="text-black text-sm text-start leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ea itaque ullam deserunt.
        </p>
      </div>
    </div>
  );
};

export default Card;
