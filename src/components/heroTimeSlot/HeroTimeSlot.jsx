import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import React, { useState } from "react";
import { BiCalendar, BiMinus, BiPlus } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import "./HeroTimeSlot.css";

const HeroTimeSlot = () => {
  const date = new Date();
  const options = { month: "long" };
  const getMonth = date.toLocaleDateString("en-US", options);
  const getMonthDate = date.getDate();

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newEndValue && newEndValue) {
      console.log("Start Date:", newEndValue);
      // console.log('End Date:', endDate);
      // Add your logic for handling the form submission here
    } else {
      console.log("Please select both start and end dates.");
    }
  };

  // ROOM AND GUEST RELATED
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [adultsIncrement, setAdultsIncrement] = useState(0);
  const [childDecrement, setChildDecrement] = useState(0);

  const handleDateClick = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

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
                <div className="w-full relative flex items-center justify-between">
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
                      value={`Rooms : ${childDecrement} Guests : ${adultsIncrement}`}
                      onClick={handleDateClick}
                      readOnly
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
                              className="room-guest-btn"
                              onClick={() => childDecrementHandle()}
                            >
                              <BiMinus />
                            </button>
                            <h5 className="px-4">{childDecrement}</h5>
                            <button
                              className="room-guest-btn"
                              onClick={() => childIncrementHandle()}
                            >
                              <BiPlus />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span>Adults</span>
                          <div className="flex items-center justify-between mt-4">
                            <button
                              className="room-guest-btn"
                              onClick={handleDecrement}
                            >
                              <BiMinus />
                            </button>
                            <h5 className="px-4">{adultsIncrement}</h5>
                            <button
                              className="room-guest-btn"
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
          <div className="col-span-1 bg-red-200">
            <button type="submit">Submit message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HeroTimeSlot;
