import React from "react";
import man1 from "../../assets/man-1.png";
import travel from "../../assets/Travel.png";
import girl from "../../assets/girl-back-img.png";

const TitleSection = () => {
  return (
    <div className="flex ">
      <div className="">
        <div className="pt-[18px] border-b pl-[18px] pr-[20px] pb-[9px]">
          <h2 className="text-[20px] leading-[23px] font-bold text-[#242526] font-Ubuntu">
            This text is for our article title, sometime it should be long as like this
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-2 mt-[7px] justify-center items-center">
              <img src={man1} className="h-7 w-7" alt="Michael_Scott_photo" />
              <span className="text-[#000000] font-Ubuntu">Michael Scott</span>
            </div>
            <div className="flex gap-[10px] justify-center items-center">
              <img src={travel} alt="Travel_logo" />
              <span className="text-[#000000] font-Ubuntu">Travel for explore</span>
            </div>
          </div>
        </div>
        <div className="pl-[19px] py-[16px]">
          <span className="text-[15px] text-[#BCB8B1]">
            Nov 4, 2019 | 2 min read{" "}
            <strong className="text-[#707070]">#Website #Design #Dev_Web #Adobe….</strong>
          </span>
        </div>
      </div>
      <div className="pt-[4px] pr-[4px] pb-[5px]">
        <figure>
          <img src={girl} className="w-[247px] h-[151px]" alt="girl_back_img" />
        </figure>
      </div>
    </div>
  );
};

export default TitleSection;
