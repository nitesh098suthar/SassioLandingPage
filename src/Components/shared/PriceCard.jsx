import React from "react";

const PriceCard = ({ data }) => {
  const color = data.title === "Professional" ? "white" : "black";
  return (
    <div
      className="container w-[16vw] bg-white rounded-lg my-14 p-6 mx-2 shadow-lg"
      style={{ backgroundColor: data.title === "Professional" && "blueviolet" }}
    >
      <h1
        className="text-sm font-semibold"
        style={{
          color,
        }}
      >
        {data.title}
      </h1>
      <h1
        className="text-2xl font-bold"
        style={{
          color,
        }}
      >
        {data.charge}
      </h1>
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
        style={{
          backgroundColor:
            data.title === "Professional" ? "white" : "blueviolet",
          color: data.title === "Professional" ? "black" : "white",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
