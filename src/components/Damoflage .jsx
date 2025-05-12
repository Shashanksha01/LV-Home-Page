import React from "react";
import { assets } from "../assets/assets";

const Damoflage = () => {
  return (
    <div>
      <div
        className="h-[80vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-top w-full mb-20"
        style={{ backgroundImage: `url(${assets.LVDamoflage})` }}
      ></div>
    </div>
  );
};

export default Damoflage;
