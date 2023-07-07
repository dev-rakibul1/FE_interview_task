import React, { useState } from "react";

const Test = () => {
  const [rooms, setRooms] = useState([]);

  const handleAddRoom = () => {
    const newRoom = `Room ${rooms.length + 1}`;
    setRooms([...rooms, newRoom]);
  };

  const handleRemoveRoom = () => {
    if (rooms.length > 0) {
      setRooms(rooms.slice(0, rooms.length - 1));
    }
  };

  return (
    <div>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>{room}</li>
        ))}
      </ul>
      <button onClick={handleAddRoom}>Add Another Room</button>
      <button onClick={handleRemoveRoom}>Remove Room</button>
    </div>
  );
};

export default Test;
