import React from "react";
import his from "../assets/hiss.png";
import last from "../assets/amico.png";

const Goals = () => {
  return (
    <div className="flex items-start ">
      <div className="  ms-[77px] bg-[#0585CD29] px-[50px] pt-[60px] flex flex-col items-start gap-[66px] mt-[40px]">
        <input
          type="text"
          placeholder="Goal Title"
          className="pe-[244px] pb-[15px] focus:border-[#0585CD] border border-[#0585CD] rounded-[6px] px-[10px] pt-[15px]"
        />
        <div>
          <input
            type="Longtext"
            placeholder="Goal Description"
            className="pe-[412px] pb-[320px] text-start border border-[#0585CD] px-[10px] pt-[15px] rounded-[6px]  focus:border-[#0585CD] "
          />
        </div>

        <div className="px-[25px] flex flex-col gap-[23px] border border-[#0585CD]">
          <div className="flex flex-col gap-[23px] ">
            <h4 className="text-[16px] leading-[100%] font-normal text-[#000000B2] pt-[15px]">
              Goal Keypoints
            </h4>
            <input
              type="text"
              placeholder="Enter Keypoint"
              className="pe-[329px] pt-[13px] px-[11px] pb-[13px] text-[20px] font-medium leading-[100%] text-[#000000B2]"
            />
          </div>

          <div className="flex flex-col gap-[23px]">
            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px] leading-[100%] text-[#000000]">
                Low Fidelity Wireframe
              </p>
              <img src={his} alt="" />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px] leading-[100%] text-[#000000]">
                High Fidelity Wireframe
              </p>
              <img src={his} alt="" />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px] leading-[100%] text-[#000000]">
                Nav Bar and Hero Section
              </p>
              <img src={his} alt="" />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px] leading-[100%] text-[#000000]">
                Footer Design
              </p>
              <img src={his} alt="" />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px] leading-[100%] text-[#000000]">
                Complete Design
              </p>
              <img src={his} alt="" />
            </div>
            <hr />
          </div>
        </div>
        <button className="my-[35px] bg-[#ffffff] p-[16px] hover:bg-[#0585CD] rounded-[8px] text-[20px] font-semibold leading-[100%] hover:text-[#FFFFFF]">
          Create Goal
        </button>
      </div>
      <img src={last} alt="" className="pt-[90px] " />
    </div>
  );
};

export default Goals;
