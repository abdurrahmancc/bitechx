import React from "react";
import travel from "../../assets/Travel.png";
import man1 from "../../assets/man-1.png";

const BodySection2 = () => {
  return (
    <div className=" mt-[10px] bg-[#FDFFFC] rounded-lg">
      <div className="pt-9 px-5 ">
        <div className="border-b pb-3">
          <p className="text-[#000000] ">
            Here we believe in dreaming as a team, grooming our skills and advancing towards
            perfection while providing quality service to our customers. All the good things in the
            world are simple. So we always prefer to maintain simplicity while delivering proper
            impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan
            Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in
            their classroom decided to embark on a journey to establish a tech company. We initially
            thought of selling Game CDs. Then we realized our team needed a logo which lead us
            towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming
            our skills and advancing towards perfection while providing quality service to our
            customers. All the good things in the world are simple. So we always prefer to maintain
            simplicity while needed a logo which lead us towards learning Adobe Photoshop and we
            Here we believe in dreaming as a team, grooming our skills and advancing towards
            perfection while providing quality service to our customers. All the good things in the
            world are simple. So we always prefer to maintain simplicity while team, grooming our
            skills and advancing towards perfection while providing quality service to our
            customers. All the good things in the world are simple. So we always prefer to maintain
            simplicity while needed a logo which lead us towards learning Adobe Photoshop and we
            Here we believe in dreaming as a team, grooming our skills and advancing towards
            perfection while providing quality service to our customers. All the good things in the
            world are simple. So we always prefer to maintain simplicity while delivering proper
            impact.
          </p>
        </div>
        <div className="mt-[8.5px] pb-[7px] px-[21px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-2  justify-center items-center">
              <img src={man1} className="h-[42px] w-[42px]" alt="Michael_Scott_photo" />
              <span className="text-[#000000]">Michael Scott</span>
            </div>
            <div>
              <span className="text-[15px] text-[#BCB8B1]">11:22 AM, Nov 11, 2019</span>
            </div>
            <div className="flex gap-[10px] justify-center items-center">
              <img src={travel} alt="Travel_logo" />
              <span className="text-[#000000]">Travel for explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection2;
