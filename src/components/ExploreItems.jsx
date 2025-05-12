import React from "react";
import { assets, category } from "../assets/assets";

const ExploreItems = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 pb-20">
      <p className="text-center mr-auto ml-auto pb-[24px] font-semibold text-3xl">
        Explore a Selection of the Maison's Creations
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm ">
        {category.map((item, index) => (
          <div className="flex flex-col items-center">
            <img className="items-center cursor-pointer" src={item.image} />
            <p className="my-[16px] cursor-pointer">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreItems;
