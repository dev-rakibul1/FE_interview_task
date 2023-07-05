import React from "react";
import { MdFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";
const logo = "https://i.ibb.co/QHNpWYd/logo-1.png";

const Navbar = () => {
  const navItems = (
    <>
      <li className="navbar-items-hover bg-transparent ">
        <Link
          to="/"
          className="navbar-link focus:bg-transparent hover:bg-transparent"
        >
          Hotels
        </Link>
      </li>

      <li className="navbar-items-hover bg-transparent ">
        <Link
          to="/fights"
          className="navbar-link focus:bg-transparent hover:bg-transparent"
        >
          Flights
        </Link>
      </li>
      <li className="navbar-items-hover bg-transparent ">
        <Link
          to="/"
          className="navbar-link focus:bg-transparent hover:bg-transparent"
        >
          Flights + Hotels
        </Link>
      </li>
      <li className="navbar-items-hover bg-transparent ">
        <Link
          to="/"
          className="navbar-link focus:bg-transparent hover:bg-transparent"
        >
          Cars
        </Link>
      </li>
      <li className="navbar-items-hover bg-transparent ">
        <Link
          to="/"
          className="navbar-link focus:bg-transparent hover:bg-transparent"
        >
          Activities
        </Link>
      </li>
      <li className="navbar-items-hover bg-transparent ">
        <Link
          to="/"
          className="navbar-link focus:bg-transparent hover:bg-transparent"
        >
          Tours
        </Link>
      </li>
    </>
  );

  return (
    <nav className=" text-gray-400">
      <div className="theme-container hidden lg:block">
        <div className="navbar mr-auto">
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <MdFormatListBulleted className="text-2xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
      </div>

      {/* off canvas menu */}
      <div className="off-canvas-menu block lg:hidden">
        <div className="w-full flex items-center justify-between theme-container py-4">
          <div className=" w-6/10">
            <div className="navbar mr-auto">
              <div className="">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <MdFormatListBulleted className="text-2xl" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {navItems}
                  </ul>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
              </div>
            </div>
          </div>

          <div className="w-full w-4/10 flex justify-end items-center">
            <div className="max-w-[150px] w-full">
              <img src={logo} alt="logo" />
            </div>
            <div className="ml-7">
              <button class=" btn-primary capitalize text-lg font-extralight text-white py-1 px-5 rounded-lg">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
