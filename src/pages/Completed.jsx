import React from "react";
import del from "../assets/DELL.png";
import inn from "../assets/PINN.png";
import ll2 from "../assets/LL2.png";
import lin from "../assets/line.png";
import green from "../assets/green.png";
import gift from "../assets/gift.png";
import { Link } from "react-router-dom";

const Completed = () => {
  return (
    <div className="px-[100px]">
      <div>
        <div className="flex items-center justify-between py-[32px]">
          <h2 className="text-[36px] font-bold leading-[100%] text-[#000000]">
            Completed
          </h2>
          <p className="text-[20px] font-semibold leading-[100%] text-[#0585CD]">
            + Create New Goals
          </p>
        </div>
      </div>

      <div className="pt-[-60px]">
        <div className="px-[30px] flex items-center gap-1">
          <p className="text-[20px] font-semibold leading-[100px] text-[#0585CD]">
            Online Design Class
          </p>
          <img src={gift} alt="" />
        </div>

        <div>
          <div className="px-[33px]">
            <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
              Online Design Class
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Congue augue volutpat
              massa turpis alin tristique. Interdum consequat consectetur eu
              viverra consequat viverra nulla. Aliqu neque rhoncus ut
              scelerisque eu vel ullamcorper mauris neque.
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
                <img src={green} alt="" className="mt-[20px]" />
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

      <div className="">
        <div className="pt-[-60px]">
          <div className="px-[30px] flex items-center gap-1">
            <p className="text-[20px] font-semibold leading-[100px] text-[#0585CD]">
              Congratulations
            </p>
            <img src={gift} alt="" />
          </div>

          <div>
            <div className="px-[33px]">
              <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
                Power Point Presentation Preparation 1
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Congue augue volutpat
                massa turpis alin tristique. Interdum consequat consectetur eu
                viverra consequat viverra nulla. Aliqu neque rhoncus ut
                scelerisque eu vel ullamcorper mauris neque.
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
                  <img src={green} alt="" className="mt-[20px]" />
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
      </div>

      {/* === */}

      <div className="">
        <div className="pt-[-60px]">
          <div className="px-[30px] flex items-center gap-1">
            <p className="text-[20px] font-semibold leading-[100px] text-[#0585CD]">
              Congratulations
            </p>
            <img src={gift} alt="" />
          </div>

          <div>
            <div className="px-[33px]">
              <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
                Learn French Language
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Congue augue volutpat
                massa turpis alin tristique. Interdum consequat consectetur eu
                viverra consequat viverra nulla. Aliqu neque rhoncus ut
                scelerisque eu vel ullamcorper mauris neque.
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
                  <img src={green} alt="" className="mt-[20px]" />
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
      </div>
      {/* ===== */}

      <div className="">
        <div className="pt-[-60px]">
          <div className="px-[30px] flex items-center gap-1">
            <p className="text-[20px] font-semibold leading-[100px] text-[#0585CD]">
              Congratulations
            </p>
            <img src={gift} alt="" />
          </div>

          <div>
            <div className="px-[33px]">
              <h4 className="text-[28px] font-semibold leading-[100%] text-[#000000] pb-[20px]">
                Dashboard Design
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Congue augue volutpat
                massa turpis alin tristique. Interdum consequat consectetur eu
                viverra consequat viverra nulla. Aliqu neque rhoncus ut
                scelerisque eu vel ullamcorper mauris neque.
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
                  <img src={green} alt="" className="mt-[20px]" />
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
            <hr className="my-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
