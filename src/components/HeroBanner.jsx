import React from "react";
import { assets } from "../assets/assets";

const HeroBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${assets.LVBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "84vh",
      }}
      className="flex justify-center items-end"
    >
      <div className="flex flex-col items-center mb-10 text-white">
        <p className="text-[10px]">WOMEN</p>
        <p className="text-[32px]">Mother's Day</p>
        <p className="underline">Discover the Selection</p>
      </div>
    </div>
  );
};

export default HeroBanner;
