import React from "react";
import { assets } from "../assets/assets";

const LVFooter = () => {
  return (
    <div className="flex justify-center my-10">
      <img
        className="w-40 md:w-60 h-auto object-contain"
        src={assets.LouisVuittonName}
      />
    </div>
  );
};

export default LVFooter;
