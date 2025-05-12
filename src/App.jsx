import React from "react";
import NavigaionBar from "./components/NavigaionBar";
import HeroBanner from "./components/HeroBanner";
import ExploreItems from "./components/ExploreItems";
import ModelCoverImage from "./components/ModelCoverImage";
import WomenCollection from "./components/WomenCollection";
import Damoflage from "./components/Damoflage ";
import MenDamoflage from "./components/MenDamoflage";
import LouisVuittonServices from "./components/LouisVuittonServices";
import HelpAndAllSer from "./components/HelpAndAllSer";
import AddressOfManufacturer from "./components/AddressOfManufacturer";
import LVFooter from "./components/LVFooter";

const App = () => {
  return (
    <>
      <div>
        <section className="bg-white relative">
          <NavigaionBar />
        </section>
        <section className=" pb-[48px] pt-[88px]">
          <HeroBanner />
        </section>
        <ExploreItems />
        <ModelCoverImage />
        <WomenCollection />
        <Damoflage />
        <MenDamoflage />
        <LouisVuittonServices />
        <HelpAndAllSer />
        <AddressOfManufacturer />
        <LVFooter />
      </div>
    </>
  );
};

export default App;
