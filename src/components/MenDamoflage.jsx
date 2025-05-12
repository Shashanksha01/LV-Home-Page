import React from "react";
import { assets, menCollection } from "../assets/assets";
import { IoMdHeartEmpty } from "react-icons/io";

const MenDamoflage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 pb-20 mt-15">
      <div>
        <p className="text-center font-light text-xs mb-5">Men</p>
        <p className="text-center mb-6 font-medium text-3xl">Online Pre-launch: Damoflage Black</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {menCollection.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div className="bg-gradient-to-b from-[#c7c7c7] to-[#eaeaea] h-auto w-auto">
                <div className="pr-4 pt-4 flex justify-end">
                  <IoMdHeartEmpty className="text-xl cursor-pointer" />
                </div>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="my-3 text-black text-sm">
                <p className="mb-2">{item.name}</p>
                <p className="text-[#959595]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-13 ">
          <button className="px-8 py-3 rounded-full border border-black transition-all duration-300 ease-in-out hover:border-[2px] cursor-pointer">
            Discover the Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenDamoflage;
