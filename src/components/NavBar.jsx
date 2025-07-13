import React from "react";
import logo from "../assets/GOAL.png";
import { NavLink } from "react-router-dom";
import man from "../assets/MAN.png";

const NavBar = () => {
  return (
    <div className="px-[100px]">
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-3 p-3 border-[#0585CD]" : ""
          }
        >
          <img src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-[48px]">
          <NavLink
            to="/ongoing"
            className={({ isActive }) =>
              isActive ? "border-b-3 p-3 border-[#0585CD]" : ""
            }
          >
            <p className="text-[20px] font-semibold leading-[100%] text-[#000000]">
              Ongoing
            </p>
          </NavLink>

          <NavLink
            to="/completed"
            className={({ isActive }) =>
              isActive ? "border-b-3 p-3 border-[#0585CD]" : ""
            }
          >
            <p className="text-[20px] font-semibold leading-[100%] text-[#000000]">
              Completed
            </p>
          </NavLink>
          <NavLink
            to="/goals"
            className={({ isActive }) =>
              isActive ? "border-b-3 p-3 border-[#0585CD]" : ""
            }
          >
            <p className="text-[20px] font-semibold leading-[100%] text-[#000000]">
              All Goals
            </p>
          </NavLink>
        </div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
          <img src={man} alt="" />
        </NavLink>
      </div>
      <hr />
    </div>

    // to="/"
    // className={({ isActive }) => (isActive ? "border-b-2" : "")}
  );
};

export default NavBar;
