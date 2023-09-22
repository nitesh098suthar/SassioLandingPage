import React from "react";
import logo from "../../assets/images/Logo.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center h-12 pt-10 px-20  w-full">
        <div className="h-20 logo flex items-center cursor-pointer">
          <img src={logo} alt="loading" className="h-full w-auto block" />
          <h1 className="text-xl font-bold ml-4 text-white">Sassio</h1>
        </div>
        <div className="links">
          <ul className="flex gap-6 font-semibold text-white cursor-pointer ">
            <li className="hover:opacity-90">Home</li>
            <li className="hover:opacity-90">Page</li>
            <li className="hover:opacity-90">Portfolio</li>
            <li className="hover:opacity-90">Shop</li>
            <li className="hover:opacity-90">Blog</li>
            <li className="hover:opacity-90">Contact</li>
          </ul>
        </div>
        <div className="btn">
          <button className="text-white bg-[rgba(70,91,182)]">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Header;
