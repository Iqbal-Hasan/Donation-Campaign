import {  Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MainLayout = () => {
  const [showOrHide, setShowOrHide] = useState(true);

  return (
    <div>
      <div className="flex py-4 mx-5 top-0 justify-between items-center xl:max-w-screen-xl xl:mx-auto">
        <div>
          <Link to={"/"}>
          <img
          title="Donation Campaign"
            className="w-[50%] md:w-[80%]"
            src="https://i.ibb.co/0nVLxy2/Logo.png"
            alt=""
          />
          </Link>
        </div>
        <div
          className={`absolute z-20 w-full text-center ${
            showOrHide ? "right-[800px]" : "right-0"
          } top-[65px] transition-all duration-300`}
        >
          <ul
            onClick={() => setShowOrHide(!showOrHide)}
            className="md:hidden flex flex-col bg-slate-500 text-white gap-5 ]"
          >
            <NavLink className="pt-5" to={"/"}>
              Home
            </NavLink>
            <NavLink to={"/donation"}>Donation</NavLink>
            <NavLink className="pb-5" to={"/statistics"}>
              Statistics
            </NavLink>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline text-[#FF444A]"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline text-[#FF444A]"
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline text-[#FF444A]"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </ul>
        </div>
        <div
          onClick={() => setShowOrHide(!showOrHide)}
          className="text-xl md:hidden"
        >
          {showOrHide ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </div>
      <hr />

      {/*  */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
