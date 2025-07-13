import React from "react";
import gll from "../assets/GM1.png";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="flex items-start px-[100px] pt-[73px]  ">
        <img src={gll} alt="" />
        <div className="px-[65px] flex flex-col items-start gap-[30px] ">
          <h2 className="text-[36px] font-semibold leading-[100%] ">
            Improve Productivity By Managing{" "}
            <span className="text-[#0585CD] text-[36px] font-semibold leading-[100%] ">
              {" "}
              Your Goals
            </span>
          </h2>
          <p className="text-[20px] leading-[100%] font-normal text-[#000000CC]">
            Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa
            sed. Turpis ac aliquet lacinia justo turpis amet at arcu. Diam
            vulputate suspendisse aliquam enim sagittis cursiodio ultrices.
            Condimentum lacus nunc rhoncus massa. Tortorstiu ultricies neque
            aliquam sit non. Diam vehicula dignissimepei pellentesque eros
            vitae. Viverra in vitae nunc lorem eget lciou imperdiet tortor. Ac
            mauris vel non amet eget egestas inoriou pellentesque commodo amet.
            Facilisi sed ut nisi pellentesque diam egestas et turpis donor amet.
          </p>
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              isActive ? "border-b-3 p-3 border-[#0585CD]" : ""
            }
          >
            <button className="font-semibold text-[20px] border-[#0585CD] leading-[100%] border  hover:text-[#ffffff] p-[16px] hover:bg-[#0585CD] rounded-[10px]">
              Manage Goals
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
