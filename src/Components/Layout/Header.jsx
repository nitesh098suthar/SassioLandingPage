import React from "react";
import logo from "../../assets/images/Logo.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center h-12 pt-10 px-4 w-full">
        <div className="h-20 logo flex items-center">
          <img src={logo} alt="loading" className="h-full w-auto block" />
          <h1 className="text-xl font-bold ml-4">Sassio</h1>
        </div>
        <div className="links">
          <ul className="flex gap-6 font-semibold">
            <li>Home</li>
            <li>page</li>
            <li>Portfolio</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="btn">
          <button className="bg-teal-500">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Header;