import React, { useState } from "react";

const Sidebar = () => {
  const [selectedType, setSelectedType] = useState(["Sport", "SUV"]);
  const [selectedCapacity, setSelectedCapacity] = useState(["2 Person", "8 or More"]);
  const [price, setPrice] = useState(100);

  const handleTypeChange = (type) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity) => {
    setSelectedCapacity((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
    );
  };

  return (
    <div className="hidden md:block p-4 bg-white shadow-md rounded-lg w-72 h-screen">
      {/* Car Type Filter */}
      <h6 className="text-gray-500 uppercase text-sm font-semibold mb-2">Type</h6>
      <ul>
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
          <li key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id={type}
              checked={selectedType.includes(type)}
              onChange={() => handleTypeChange(type)}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <label htmlFor={type} className="text-gray-700 cursor-pointer">
              {type} <span className="text-gray-400">({Math.floor(Math.random() * 20) + 10})</span>
            </label>
          </li>
        ))}
      </ul>

      {/* Capacity Filter */}
      <h6 className="text-gray-500 uppercase text-sm font-semibold mt-4 mb-2">Capacity</h6>
      <ul>
        {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
          <li key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id={capacity}
              checked={selectedCapacity.includes(capacity)}
              onChange={() => handleCapacityChange(capacity)}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <label htmlFor={capacity} className="text-gray-700 cursor-pointer">
              {capacity} <span className="text-gray-400">({Math.floor(Math.random() * 20) + 10})</span>
            </label>
          </li>
        ))}
      </ul>

      {/* Price Filter */}
      <h6 className="text-gray-500 uppercase text-sm font-semibold mt-4">Price</h6>
      <input
        type="range"
        min={0}
        max={200}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mt-2 cursor-pointer accent-blue-500"
      />
      <p className="text-gray-700 text-sm mt-1">Max. ${price}.00</p>
    </div>
  );
};

export default Sidebar;