import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineClose,
  MdOutlineDateRange,
  MdOutlineLocationOn,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import "./HeroTimeSlot.css";

const HeroTimeSlot = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    setSearchValue("");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSearchValue("");
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search or other desired actions
    console.log("Searching for:", searchValue);
  };

  return (
    <section className="bg-gray-100">
      <div>
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content relative">
              <button
                className="close-button absolute top-[-25px] right-[-10px] z-10 text-white"
                onClick={handleClosePopup}
              >
                <MdOutlineClose />
              </button>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="theme-width py-5 mt-4">
        <div className="grid sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-2  xl:grid-cols-2 gap-7">
          <div className="location flex items-center justify-start text-gray-400  border p-4 rounded-lg">
            <span>
              <MdOutlineLocationOn className="text-4xl" />
            </span>
            <div className="ml-4">
              <h4 className="text-black font-semibold text-xl">Location</h4>
              <p>Where are you going?</p>
            </div>
          </div>

          <div className="time-search-slot sm:flex justify-between items-center">
            {/* time */}
            <div className="time-slot flex items-center justify-start text-gray-400 border p-4 rounded-lg">
              <span className="text-4xl">
                <MdOutlineDateRange />
              </span>
              <div className="ml-4">
                <h4 className="text-black font-semibold text-xl">
                  Feb 08 - Feb 14
                </h4>
                <p>Check in - check out</p>
              </div>
            </div>

            {/* user */}
            <div className="time-slot flex items-center justify-start text-gray-400  border p-4 rounded-lg">
              <span className="text-4xl">
                <MdOutlinePeopleAlt />
              </span>
              <div className="ml-4">
                <h4 className="text-black font-semibold text-xl">
                  1 Room, 2 Guests
                </h4>
                <p>Rooms & Guests</p>
              </div>
            </div>

            {/* time */}
            <div className="search">
              <button
                className="text-4xl btn btn-primary text-white"
                onClick={handleOpenPopup}
              >
                <CiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTimeSlot;
