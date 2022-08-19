import React from "react";
import michael from "../../assets/Mask.png";

const CardSection2 = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="bg-[#242526] rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-[15px]  items-center ">
            <figure className="p-3 pr-0">
              <img src={michael} className="w-[142px]  h-[70px]" alt="images" />
            </figure>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="text-[#FDFFFC] font-bold text-[15px]">Michael Scott</h4>
                <span className="text-[#BCB8B1] text-[15px]">121 Stories</span>
                <span className="text-[#BCB8B1] text-[15px]">21 Authors</span>
              </div>
              <span className="text-[#707070] text-[15px]">
                Don't ever, for any reason, do anything to anyone.....
              </span>
            </div>
          </div>
          <div className="flex items-center pr-[22px] gap-[21px]">
            <span className="text-[#BCB8B1] text-[15px]">1,021 Followers</span>
            <strong className="text-[#4392F1] text-[15px]">Follow</strong>
          </div>
        </div>
      </div>
      <div className="bg-[#242526] rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-[15px]  items-center ">
            <figure className="p-3 pr-0">
              <img src={michael} className="w-[142px]  h-[70px]" alt="images" />
            </figure>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="text-[#FDFFFC] font-bold text-[15px]">Michael Scott</h4>
                <span className="text-[#BCB8B1] text-[15px]">121 Stories</span>
                <span className="text-[#BCB8B1] text-[15px]">21 Authors</span>
              </div>
              <span className="text-[#707070] text-[15px]">
                Don't ever, for any reason, do anything to anyone.....
              </span>
            </div>
          </div>
          <div className="flex items-center pr-[22px] gap-[21px]">
            <span className="text-[#BCB8B1] text-[15px]">1,021 Followers</span>
            <strong className="text-[#4392F1] text-[15px]">Follow</strong>
          </div>
        </div>
      </div>
      <div className="bg-[#242526] rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-[15px]  items-center ">
            <figure className="p-3 pr-0">
              <img src={michael} className="w-[142px]  h-[70px]" alt="images" />
            </figure>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="text-[#FDFFFC] font-bold text-[15px]">Michael Scott</h4>
                <span className="text-[#BCB8B1] text-[15px]">121 Stories</span>
                <span className="text-[#BCB8B1] text-[15px]">21 Authors</span>
              </div>
              <span className="text-[#707070] text-[15px]">
                Don't ever, for any reason, do anything to anyone.....
              </span>
            </div>
          </div>
          <div className="flex items-center pr-[22px] gap-[21px]">
            <span className="text-[#BCB8B1] text-[15px]">1,021 Followers</span>
            <strong className="text-[#4392F1] text-[15px]">Follow</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection2;
