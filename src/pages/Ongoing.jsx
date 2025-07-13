import React from "react";
import inn from "../assets/PINN.png";
import del from "../assets/DELL.png";
import lin from "../assets/line.png";
import ll2 from "../assets/LL2.png";
import last from "../assets/LLLL.png";
import { Link, NavLink } from "react-router-dom";

const Ongoing = () => {
  return (
    <div>
      <div className="px-[100px]">
        <div className="flex items-center justify-between py-[32px]">
          <h2 className="text-[36px] font-bold leading-[100%] text-[#000000]">
            Ongoing
          </h2>
          <NavLink
            to="/goals"
            className={({ isActive }) =>
              isActive ? "border-b-1 p-3 border-[#0585CD]" : ""
            }
          >
            <p className="text-[20px] font-semibold leading-[100%] text-[#0585CD]">
              + Create New Goals
            </p>
          </NavLink>
        </div>

        <div className="px-[33px]">
          <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
            Landing Page Design
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue augue volutpat massa
            turpis alin tristique. Interdum consequat consectetur eu viverra
            consequat viverra nulla. Aliqu neque rhoncus ut scelerisque eu vel
            ullamcorper mauris neque.
          </p>
          <div className="flex items-center justify-between pt-[15px]">
            <div>
              <div className="flex items-start justify-between ">
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  Progress
                </p>
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  30%
                </p>
              </div>
              <img src={lin} alt="" className="mt-[20px]" />
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/goals"
                className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD]  rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%]"
              >
                <img src={inn} alt="" />
                <p>Update Progress</p>
              </Link>
              <div className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD] rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%] ">
                <img src={del} alt="" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[40px]" />

        {/* === */}

        <div className="px-[33px] py-[40px]">
          <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
            Power Point Presentation Preparation 2
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue augue volutpat massa
            turpis alin tristique. Interdum consequat consectetur eu viverra
            consequat viverra nulla. Aliqu neque rhoncus ut scelerisque eu vel
            ullamcorper mauris neque.
          </p>
          <div className="flex items-center justify-between pt-[15px]">
            <div>
              <div className="flex items-start justify-between ">
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  Progress
                </p>
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  30%
                </p>
              </div>
              <img src={ll2} alt="" className="mt-[20px]" />
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/goals"
                className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD]  rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%]"
              >
                <img src={inn} alt="" />
                <p>Update Progress</p>
              </Link>
              <div className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD] rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%] ">
                <img src={del} alt="" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[40px]" />

        <div className="px-[33px]  py-[40px]">
          <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
            Learn HTML & CSS
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue augue volutpat massa
            turpis alin tristique. Interdum consequat consectetur eu viverra
            consequat viverra nulla. Aliqu neque rhoncus ut scelerisque eu vel
            ullamcorper mauris neque.
          </p>
          <div className="flex items-center justify-between pt-[15px]">
            <div>
              <div className="flex items-start justify-between  ">
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  Progress
                </p>
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  30%
                </p>
              </div>
              <img src={ll2} alt="" className="mt-[20px]" />
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/goals"
                className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD]  rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%]"
              >
                <img src={inn} alt="" />
                <p>Update Progress</p>
              </Link>
              <div className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD] rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%] ">
                <img src={del} alt="" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[40px]" />

        {/* ===3 */}

        <div className="px-[33px]  py-[40px]">
          <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
            Typing Practice
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue augue volutpat massa
            turpis alin tristique. Interdum consequat consectetur eu viverra
            consequat viverra nulla. Aliqu neque rhoncus ut scelerisque eu vel
            ullamcorper mauris neque.
          </p>
          <div className="flex items-center justify-between pt-[15px]">
            <div>
              <div className="flex items-start justify-between ">
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  Progress
                </p>
                <p className="text-[16px] text-[#000000CC] leading-[100%]">
                  30%
                </p>
              </div>
              <img src={last} alt="" className="mt-[20px]" />
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/goals"
                className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD]  rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%]"
              >
                <img src={inn} alt="" />
                <p>Update Progress</p>
              </Link>
              <div className="flex items-center gap-2 p-[16px] hover:bg-[#0585CD] border border-[#0585CD] rounded-[10px] hover:text-[#ffffff] text-[20px] font-semibold leading-[100%] ">
                <img src={del} alt="" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[40px]" />
      </div>
    </div>
  );
};

export default Ongoing;
