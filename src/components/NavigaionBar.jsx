import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { assets, sideNavigation } from "../assets/assets.js";

const NavigaionBar = () => {
  const [sideBarActivate, setSideBarActivate] = useState(false);
  console.log(sideBarActivate);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-30 shadow-md font-semibold">
        <div className="flex justify-between mx-5 sm:mx-5 md:mx-12 items-center h-[88px]">
          <div className="flex gap-3">
            <div
              onClick={() => setSideBarActivate((prev) => !prev)}
              className="flex items-center"
            >
              <RxHamburgerMenu className="text-xl cursor-pointer" />
            </div>
            <p className="hidden md:block font-LVFont">Menu</p>
            <div className="flex items-center">
              <IoIosSearch className="text-xl cursor-pointer" />
            </div>
            <p className="hidden md:block">Search</p>
          </div>
          <div>
            <img
              className="w-40 md:w-60 h-auto object-contain"
              src={assets.LouisVuittonName}
            />
          </div>
          <div className="flex gap-3">
            <p className="hidden lg:block">Call Us</p>
            <div className=" items-center hidden md:flex">
              <IoMdHeartEmpty className="text-xl cursor-pointer" />
            </div>
            <div className="flex items-center">
              <FaRegUser className="text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* {sideBarActivate && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10"
          onClick={() => setSideBarActivate(false)}
        ></div>
      )} */}
        <div
          className={`fixed top-0 left-0 h-full max-w-3xl bg-white border-r-1 z-20 transform transition-transform duration-300 ease-in-out ${
            sideBarActivate ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing sidebar on click inside
        >
          <div className="py-7 mx-12">
            <div className="flex gap-2 mb-5">
              <div
                className="flex items-center"
                onClick={() => setSideBarActivate(false)}
              >
                <IoIosClose className="text-3xl cursor-pointer" />
              </div>
              <p className="text-xl">Close</p>
            </div>
            <ul className="px-[51]">
              {sideNavigation.map((item, index) => (
                <li className="py-3 pr-4 cursor-pointer">{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigaionBar;
