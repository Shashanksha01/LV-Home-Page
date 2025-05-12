import React from "react";
import { services } from "../assets/assets";

const LouisVuittonServices = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-[80px] border-b-1 border-[#dedede] px-4 sm:px-8 md:px-40 lg:px-32">
      <p className="mb-5 text-3xl">Louis Vuitton Services</p>
      <p className="mb-8 text-[#959595]">
        Louis Vuitton offers complementary wrapping on all orders, carefully
        packaged in the Maison's iconic boxes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:grid-row-1">
        {services.map((item, index) => (
          <div key={index} className="text-center">
            <img className="h-auto max-w-[400px] w-full" src={item.image} />
            <p className="mb-4 mt-2 font-semibold">{item.name}</p>
            <p className="underline underline-offset-5">{item.secName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LouisVuittonServices;
