import React from "react";
import lin from "../assets/line.png";
import last from "../assets/amico.png";
import his from "../assets/TIKKK.png";
import { NavLink } from "react-router-dom";

const Progress = () => {
  return (
    <div className="px-[100px] flex items-start ">
      <div className="pt-[33px] flex flex-col items-start gap-[23px]">
        <h2 className="font-bold text-[36px] leading-[100%] text-[#000000] pt">
          Progress
        </h2>

        <div className="flex flex-col items-start gap-[35px]">
          <div className="flex flex-col items-start gap-[25px]">
            <p className="text-[#000000B2] font-normal text-[16px] leading-[100%]">
              Goal Title
            </p>
            <h4 className="text-[#000000B2] font-semibold text-[16px] leading-[100%]">
              Landing Page
            </h4>
          </div>

          <div className="flex flex-col items-start gap-[26px] pe-[40px]">
            <p className="text-[#000000B2] font-normal text-[16px] leading-[100%]">
              Goal Description
            </p>
            <p className="text-[#000000B2] font-normal text-[16px] leading-[100%]">
              Lorem ipsum dolor sit amet consectetur. Accumsan integer tempor
              ornare lectus eu. Leo amet bibendum consectetur sed ac leo
              rhoncus. Mattis mi iaculis lacus mi vehicula. Nisl nisi eu eu
              suspendisse. Pellentesque convallis egestas purus amet. Massa eget
              proin lorem ultrices nulla quisque. Leo mauris cras mi proin et.
            </p>
          </div>

          <div className="p-[50px] flex flex-col gap-[23px]  border-[#0585CD] bg-[#0585CD29] mb-[25px]">
            <div>
              <div>
                <div className="flex items-start justify-between ">
                  <p className="text-[16px] text-[#000000CC] leading-[100%]">
                    Progress
                  </p>
                  <p className="text-[16px]  leading-[100%] text-[#000000CC]">
                    30%
                  </p>
                </div>
                <img src={lin} alt="" className="mt-[20px]" />
              </div>
            </div>

            {/* == */}

            <div className="flex flex-col gap-[23px] ">
              <h4 className="text-[16px] leading-[100%] font-normal text-[#000000B2] pt-[15px]">
                Goal Keypoints
              </h4>
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
            </div>
            <NavLink to="/goals">
              <button className="my-[20px] bg-[#ffffff] p-[16px] hover:bg-[#0585CD] rounded-[8px] text-[20px] font-semibold leading-[100%] hover:text-[#FFFFFF] w-[156px]">
                Updaten
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <img src={last} alt="" className="pt-[30px] " />
    </div>
  );
};

export default Progress;
