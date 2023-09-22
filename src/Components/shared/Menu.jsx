import React from "react";

const Menu = () => {
  const arr = ["Document", "Create Event", "Meetings", "Sessions"];
  return (
    <div className="w-[60vw] mx-auto my-8">
      <ul className="flex justify-evenly items-center">
        {arr?.map((item) => (
          <li
            key={item}
            className="text-black hover:text-[navy] cursor-pointer border-b-2 border-b-neutral-200  w-full py-4 hover:border-b-[navy] text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
