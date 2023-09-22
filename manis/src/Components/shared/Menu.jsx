import React from "react";

const Menu = () => {
  const arr = ["Document", "Create Event", "Meetings", "Sessions"];
  return (
    <div className="w-[60vw] mx-auto my-8">
      <ul className="flex justify-evenly items-center">
        {arr?.map((item) => (
          <li
            key={item}
            className="text-black hover:text-sky-500 cursor-pointer border-b-2 border-b-neutral-200 w-[99%] py-4 hover:border-b-sky-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
