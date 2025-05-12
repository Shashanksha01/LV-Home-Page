import React from "react";
import { assets } from "../assets/assets";

const AddressOfManufacturer = () => {
  return (
    <div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 border-t-1 border-[#dedede] text-[#959595] pt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <img src={assets.India} alt="India" className="w-5 h-5" />
              <p className="text-black underline underline-offset-4">India</p>
            </div>
            <p className="font-medium">
              Full Name and Address of the Manufacturer
            </p>
            <p>Louis Vuitton Malletier SAS</p>
            <p>2 Rue du Pont Neuf</p>
            <p>75034 Paris CEDEX 01</p>
            <p>FRANCE</p>
            <p>
              Please refer to the product label for specific country of origin
              for each product.
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="font-medium">Full Name and Address of the Importer</p>
            <p>Louis Vuitton India Retail Private Limited</p>
            <p>901A Ninth Floor, Time Tower</p>
            <p>MG Road, Gurgaon, Haryana - 122002</p>
            <p>INDIA</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="hover:underline cursor-pointer">Sitemap</p>
            <p className="hover:underline cursor-pointer">Legal & Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressOfManufacturer;
