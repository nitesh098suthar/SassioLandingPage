import React from "react";

const PriceCard = ({ data }) => {
  const color = data.title === "Professional" ? "white" : "black";
  return (
    <div
      className="  w-[18vw] bg-white rounded-lg my-14 p-8 mx-6 hover:shadow-lg text-center"
      style={{ backgroundColor: data.title === "Professional" && "navy" }}
    >
      {data.title === "Professional" && <h1
        className="text-xs font-normal bg-sky-600 py-2 mb-4 w-fit mx-auto px-6 rounded-full"
        style={{
          color,
        }}
      >
        Most Popular
      </h1> }
      <h1
        className="text-sm font-semibold"
        style={{
          color,
        }}
      >
        {data.title}
      </h1>
      <h1
        className="text-3xl font-bold p-3"
        style={{
          color,
        }}
      >
        {data.charge}
      </h1>
      <p style={{ color }} className="text-center text-xs mb-10 opacity-70">
       per month
      </p>
      <p style={{ color }} className="text-start text-xs my-4">
        Standard limited submissions, active for 30 days
      </p>
      <ul className="space-y-5 py-5">
        <li style={{ color }} className="text-start text-xs">
          ✔ All Operating supported
        </li>
        <li style={{ color }} className="text-start text-xs">
          ✔ Great Interface
        </li>
        <li style={{ color }} className="text-start text-xs">
          ✔ Allow encryption
        </li>
        <li style={{ color }} className="text-start text-xs">
          ✔ Face Recognized system
        </li>
        <li style={{ color }} className="text-start text-xs">
          ✔ 24/7 full support
        </li>
      </ul>
      <button
      className="mt-8"
        style={{
          backgroundColor:
            data.title === "Professional" ? "white" : "navy",
          color: data.title === "Professional" ? "black" : "white",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
