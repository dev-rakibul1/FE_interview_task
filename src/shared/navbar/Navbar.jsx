import React from "react";
import { MdFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
      <div className="theme-width">
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
    </nav>
  );
};

export default Navbar;
