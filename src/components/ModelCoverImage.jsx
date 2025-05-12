import React from "react";
import { assets } from "../assets/assets";

const ModelCoverImage = () => {
  return (
    <div>
      <div
        className="h-[80vh] sm:h-[70vh] md:h-[90vh] bg-cover bg-top w-full"
        style={{ backgroundImage: `url(${assets.LVModelImage})` }}
      ></div>
    </div>
  );
};

export default ModelCoverImage;
