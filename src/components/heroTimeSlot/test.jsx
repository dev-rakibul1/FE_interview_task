import React, { useState } from "react";

const Test = () => {
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
  //   ==================================

  return (
    <div>
      <h1>Date Popup Form</h1>

      <form>
        <input
          type="text"
          id="date"
          value={`Rooms : ${childDecrement} Guests : ${adultsIncrement}`}
          onClick={handleDateClick}
          readOnly
        />
      </form>

      {showDatePicker && (
        <div className="popup">
          {/* <input type="date" onChange={handleDateChange} /> */}

          <div className="flex items-center justify-between">
            <button onClick={() => childIncrementHandle()}>+</button>
            <h1>{childDecrement}</h1>
            <button onClick={() => childDecrementHandle()}>-</button>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={handleIncrement}>Increment</button>
            <h1>{adultsIncrement}</h1>
            <button onClick={handleDecrement}>Decrement</button>
          </div>

          {/* ========================== */}
          <div>
            {selectFields.map((field, index) => (
              <select key={index} value={field} onChange={() => {}}>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            ))}
          </div>

          <button onClick={handleDatePickerClose}>Done</button>
        </div>
      )}
    </div>
  );
};

export default Test;
