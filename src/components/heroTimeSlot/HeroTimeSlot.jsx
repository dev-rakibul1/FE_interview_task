import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import React, { useState } from "react";
import { BiCalendar, BiMinus, BiPlus } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import "./HeroTimeSlot.css";

const HeroTimeSlot = () => {
  const date = new Date();
  const options = { month: "long" };
  const getMonth = date.toLocaleDateString("en-US", options);
  const getMonthDate = date.getDate();
  const [validationMessage, setValidationMessage] = useState("");

  const startValue = `${getMonth} ${getMonthDate}`;
  console.log(startValue);

  const newStartValue = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const newEndValue = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );

  // handle validation

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const adultsSlots = event.target.adultsSlots.value;
    const regex = /\d+/g;
    const number = adultsSlots.match(regex).map(Number);
    const [rooms, guests] = number;
    console.log(rooms, guests);

    const datePickerValue = startValue + " " + newEndValue.toDateString();

    if (!datePickerValue) {
      setValidationMessage("Please select both start and end dates.");
      return;
    }

    const [start, end] = datePickerValue.split(" ");
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate > endDate) {
      setValidationMessage("Start date cannot be after end date.");
      return;
    }

    if (startDate < newStartValue) {
      setValidationMessage("Start date is invalid.");
      return;
    }

    if (endDate > newEndValue) {
      setValidationMessage("End date is invalid.");
      return;
    }

    // if (rooms && guests) {
    //   setValidationMessage("Please select at least one adult.");
    //   return;
    // }

    if (rooms < 1) {
      setValidationMessage("Please count the room.");
      return;
    }

    if (guests < 1) {
      setValidationMessage("Please selected your guest.");
      return;
    }

    // All validations passed, proceed with form submission
    // Your logic for handling the form submission here
  };

  console.log(validationMessage);

  // ROOM AND GUEST RELATED
  const [showDatePicker, setShowDatePicker] = useState(false);
  // const [selectedDate, setSelectedDate] = useState("");
  const [adultsIncrement, setAdultsIncrement] = useState(0);
  const [childDecrement, setChildDecrement] = useState(0);

  const handleDateClick = () => {
    setShowDatePicker(true);
  };

  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

  const handleDatePickerClose = () => {
    setShowDatePicker(false);
  };

  //   ----------------------------

  // includes their child list
  const childIncrementHandle = () => {
    setChildDecrement(childDecrement + 1);
  };
  const childDecrementHandle = () => {
    setChildDecrement(childDecrement - 1);
  };

  if (childDecrement > 10) {
    console.log("Value is big");
  } else if (childDecrement < 1) {
    console.log("Value is small");
  }

  //   ==================================
  const [selectFields, setSelectFields] = useState([]);

  const handleIncrement = () => {
    if (selectFields.length < 10) {
      setAdultsIncrement(adultsIncrement + 1);
      setSelectFields([...selectFields, selectFields.length + 1]);
    }
  };

  const handleDecrement = () => {
    if (selectFields.length > 0) {
      setAdultsIncrement(adultsIncrement - 1);
      setSelectFields(selectFields.slice(0, selectFields.length - 1));
    }
  };

  return (
    <section className=" theme-container">
      {validationMessage ? (
        <>
          <h3 className="p-4 w-full text-center bg-red-200 text-red-900 font-semibold rounded-lg">
            {validationMessage}
          </h3>
        </>
      ) : undefined}
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-9">
            <div className="relative">
              <div className="flex items-center justify-between gap-7">
                {/* location */}
                <div className="w-full location flex items-center justify-start text-gray-400 p-4 rounded-lg">
                  <span>
                    <MdOutlineLocationOn className="text-4xl" />
                  </span>
                  <div className="ml-4">
                    <h4 className="text-black font-semibold text-xl">
                      Location
                    </h4>
                    <p>Where are you going?</p>
                  </div>
                </div>

                {/* Time and date slot */}
                <div className="w-full relative flex items-center justify-start">
                  <span className="calendar-icons text-3xl text-gray-500">
                    <BiCalendar />
                  </span>
                  <div className="ml-7 relative date-time-slots ">
                    <DateRangePickerComponent
                      startDate={startValue}
                      endDate={startValue}
                      min={newStartValue}
                      format="MMMM dd"
                    ></DateRangePickerComponent>
                    <p className="text-sm time-date-slot-text text-gray-400">
                      Check in - check out
                    </p>
                  </div>
                </div>

                {/* adults slots */}

                <div className="adults-slots-wrap w-full flex items-center justify-start">
                  <span className="text-3xl text-gray-500">
                    <LuUsers />
                  </span>
                  <div className="relative w-full ml-7">
                    <input
                      className="w-full text-xl font-semibold"
                      type="text"
                      id="date"
                      value={`Rooms : ${childDecrement} Guests : ${adultsIncrement}
                      `}
                      onClick={handleDateClick}
                      required
                      name="adultsSlots"
                    />
                    <label
                      className="adults-slots-label text-gray-400"
                      htmlFor="date"
                    >
                      Room & Guest
                    </label>

                    {showDatePicker && (
                      <div className="popup p-4">
                        {/* <input type="date" onChange={handleDateChange} /> */}
                        <h5 className="font-semibold">Room 1</h5>

                        <div className="flex items-center justify-between">
                          <span>Adults</span>
                          <div className="flex items-center justify-between mt-7">
                            <button
                              onClick={() => childDecrementHandle()}
                              disabled={childDecrement < 1 ? true : false}
                              className={`room-guest-btn ${
                                childDecrement < 1
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              <BiMinus />
                            </button>
                            <h5 className="px-4">{childDecrement}</h5>
                            <button
                              disabled={childDecrement > 10 ? true : false}
                              className={`room-guest-btn ${
                                childDecrement > 10
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={() => childIncrementHandle()}
                            >
                              <BiPlus />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span>Children</span>
                          <div className="flex items-center justify-between mt-4">
                            <button
                              onClick={handleDecrement}
                              disabled={adultsIncrement < 1 ? true : false}
                              className={`room-guest-btn ${
                                adultsIncrement < 1
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              <BiMinus />
                            </button>
                            <h5 className="px-4">{adultsIncrement}</h5>
                            <button
                              disabled={adultsIncrement >= 10 ? true : false}
                              className={`room-guest-btn ${
                                adultsIncrement >= 10
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={handleIncrement}
                            >
                              <BiPlus />
                            </button>
                          </div>
                        </div>

                        {/* ========================== */}
                        <div>
                          {selectFields.map((field, index) => (
                            <div key={index} className="traveling-room-slot">
                              <label>{`Child ${index + 1} age *`}</label>
                              <select value={field} onChange={() => {}}>
                                {Array.from({ length: 10 }, (_, i) => (
                                  <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>

                        <div className="text-end">
                          <button
                            className="mt-7 text-end bg-[#4A07DA] py-2 px-5 rounded-lg text-white"
                            onClick={handleDatePickerClose}
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <button
              type="submit"
              className="bg-primary p-4 rounded-xl text-4xl text-white"
            >
              <FiSearch />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HeroTimeSlot;
