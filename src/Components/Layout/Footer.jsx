import React from "react";
import logo from "../../assets/images/Logo.png";
import { BsArrowRightShort } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="  bg-white text-white h-[120vh] w-full mx-auto  relative">
      <div className="bg-footer bg-cover bg-center h-full w-full ">
        <div className="absolute bottom-0 left-0 right-0">
   
          <div className="box h-36 bg-blue-800 w-1/2 mx-auto rounded-xl flex justify-around items-center" style={{position: "absolute", top:"-70%", left:"25%"}}>
            <h3 className="font-extrabold text-2xl">
              Join Sassio and increase <br /> your Productivity
            </h3>
            <button>Get Started</button>
          </div>
          <div className="box flex justify-evenly align-top my-16">
            <div className="boxes1 space-y-6">
              <div className="flex items-center">
                <div className="icon pr-2 h-10 w-10">
                  <img
                    src={logo}
                    alt=""
                    className="h-full w-full object-contain block"
                  />
                </div>
                <h3 className="font-extrabold text-2xl">Sassio</h3>
              </div>
              <div className="toll-free">
                <p className="text-start text-sm py-1">
                  Toll free customer care
                </p>
                <p className="font-bold text-sm text-start">
                  +(1) 123 456 7890
                </p>
              </div>
              <div className="mail">
                <p className="text-start text-sm py-1">need live support ? </p>
                <p className="font-bold text-sm text-start">hi@sassio.com</p>
              </div>
            </div>
            <div className="boxes2 space-y-6">
              <h3 className="font-extrabold text-xl">Links</h3>
              <ul className="space-y-2">
                <li className="text-sm text-start">Home</li>
                <li className="text-sm text-start">About</li>
                <li className="text-sm text-start">Page</li>
                <li className="text-sm text-start">Shop</li>
                <li className="text-sm text-start">Features</li>
                <li className="text-sm text-start">Pricing</li>
                <li className="text-sm text-start">Contact</li>
              </ul>
            </div>
            <div className="boxes3 space-y-6">
              <h3 className="font-extrabold text-xl text-start">Legals</h3>
              <ul className="space-y-2">
                <li className="text-sm text-start">Terms of use</li>
                <li className="text-sm text-start">Terms & conditions</li>
                <li className="text-sm text-start">Privacy Policy</li>
                <li className="text-sm text-start">Cookie Policy</li>
              </ul>
            </div>
            <div className="boxes4 space-y-6">
              <h3 className="font-extrabold text-xl text-start">Follow us</h3>
              <ul className="flex space-x-2">
                <li className="text-2xl text-start ">
                  <FaFacebook />
                </li>
                <li className="text-2xl text-start ">
                  <FaInstagram />
                </li>
                <li className="text-2xl text-start ">
                  <FaTwitter />
                </li>
                <li className="text-2xl text-start ">
                  <FaLinkedin />
                </li>
                <li className="text-2xl text-start ">
                  <FaGithub />
                </li>
              </ul>
              <h3 className="font-extrabold text-xl text-start">Subscribe</h3>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-12 px-2  border-none bg-white rounded-lg"
                />
                <button className="bg-teal-500 ml-2 py-2">
                  <BsArrowRightShort size={23} />
                </button>
              </div>
            </div>
          </div>
          <div className="box py-8 border-t-2 text-center border-gray-700">
            <p>© Copyright 2021. Sassio</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
