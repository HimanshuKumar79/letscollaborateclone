import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Slide from "react-reveal/Slide";

const Card = ({ item }) => {
  return (
    <Slide bottom>
      <div className="w-full flex sm:flex-row flex-col justify-between h-full mb-9 sm:mb-0">
        <div className="flex flex-col w-[36%] lg:gap-12 gap-11 justify-between">
          <div className="flex flex-col lg:gap-12 gap-6">
            <p className="font-medium text-[230%] pl-3 sm:pl-0 sm:w-fit w-[100vw] sm:text-[300%] lg:text-[350%]  md:leading[100px] leading-[70px]">
              {item.heading}
            </p>
            <p className="text-[1.1rem] sm:block hidden lg:text-[1.65rem] font-normal leading-8 text-[#1f1e1e]">
              {item.desc}
            </p>
          </div>
          <div className="hidden items-center sm:flex  h-fit gap-3 group cursor-pointer">
            <p className="text-[19px] font-semibold group-hover:text-[#3f3e3e]">
              {item.link}
            </p>
            <BsArrowRight className="text-[23px] group-hover:animate-arrowmove  group-hover:text-[#3f3e3e]" />
          </div>
        </div>

        <img
          src={item.url}
          alt="Loading..."
          className="sm:w-[46%] w-[100vw] sm:p-0 p-3 object-cover"
        />
        <p className="text-[1.1rem] sm:p-0 p-3 sm:hidden block lg:text-[1.65rem] font-normal leading-8 text-[#1f1e1e]">
          {item.desc}
        </p>
        <div className="flex items-center sm:hidden gap-3 group cursor-pointer sm:pl-0 pl-3">
          <p className="text-[19px] font-semibold group-hover:text-[#3f3e3e] text-[blue]">
            {item.link}
          </p>
          <BsArrowRight className="text-[23px]  group-hover:animate-arrowmove  group-hover:text-[#3f3e3e]" />
        </div>
      </div>
    </Slide>
  );
};

export default Card;
