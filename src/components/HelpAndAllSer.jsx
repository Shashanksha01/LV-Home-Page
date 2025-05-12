import React from "react";

const HelpAndAllSer = () => {
  return (
    <div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-[#959595] text-sm mb-3">HELP</h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm mb-2">
                A Client Advisor is available at{" "}
                <span className="underline underline-offset-4">
                  1800 103 9988
                </span>
                . You can also{" "}
                <span className="underline underline-offset-4">chat</span> or{" "}
                <span className="underline underline-offset-4">email us.</span>
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">FAQ</p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Product Care
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Stores
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#959595] text-sm mb-3">Services</h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Repairs
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Personalisation
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Art of Gifting
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Download our Apps
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-[#959595] text-sm mb-3">About Louis Vuitton</h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Fashion Shows
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Arts & Culture
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                La Maison
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Sustainability
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Latest News
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Careers
              </p>
              <p className="text-sm mb-1 hover:underline cursor-pointer">
                Foundation Louis Vuitton
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#959595] text-sm mb-3">Connect</h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm mb-2">
                <span className="underline underline-offset-4">Sign up</span>{" "}
                for Louis Vuitton emails and receive the latest news from the
                Maison, including exclusive online pre-launches and new
                collections.
              </p>
              <p className="text-sm mt-2 hover:underline cursor-pointer">
                Follow Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndAllSer;
