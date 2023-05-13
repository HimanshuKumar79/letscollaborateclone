import React from "react";
import cloneData from "../data/Data";
import Card from "../components/Card";

const LetsColaborate = () => {
  return (
    <div className="w-full mb-[101px]">
      <div className="max-w-[57rem] mx-auto">
        <h3 className="font-bold mt-6 mb-24 text-[23px] sm:pl-9 sm:pt-9 pl-5  pt-6">
          Let's Collaborate
        </h3>
        <div className="max-w-full flex flex-col lg:gap-12 gap-0 lg:my-9 my-0 pb-0  lg:pb-9 m-0 md:m-9 h-fit">
          {cloneData.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LetsColaborate;
