import React, { useState } from "react";

const QnA = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid place-items-center w-[99%]">
      <div className="m-2 w-1/2">
        <h4
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-black font-semibold py-3 px-6 border-2 overflow-hidden w-[99%] rounded-lg text-start relative"
        >
          <span>{open ? "- " : "+"}</span>{" "}
          {question ? question : "Lorem ipsum dolor, sit amet consectetur ?"}
        </h4>
        <p
          className="text-black text-sm p-4 w-[99%] text-start"
          style={{ display: open ? "inherit" : "none" }}
        >
          {answer
            ? answer
            : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          cupiditate commodi ratione consectetur minus a recusandae, quisquam
          sed minima ad ducimus nisi maiores sint maxime repellendus nesciunt
          corporis placeat sunt.`}
        </p>
      </div>
    </div>
  );
};

export default QnA;
