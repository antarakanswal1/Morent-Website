import React from "react";
import cars from './Data';
import { Link } from "react-router-dom";


const ThreeDiv = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      {/* Responsive Flexbox Layout */}
      {cars.slice(0, 9).map((car, index) => (
        <div
          key={index}
          className="bg-white p-2 md:p-4 rounded-lg shadow-md relative w-full md:basis-[30%] md:max-w-[30%] box-border"
        >
          {/* Car Name and Type */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-base md:text-lg font-bold">{car.name}</h3>
              <p className="text-xs md:text-sm text-gray-500">{car.type}</p>
            </div>
          </div>

          {/* Car Image */}
          <img
            src={car.image}
            alt={car.name}
            className="w-full mt-2 aspect-[4/3] object-cover"
          />

          {/* Specifications */}
          <div className="flex justify-between text-gray-500 text-xs md:text-sm mt-2">
            <span className="flex items-center">{car.fuel}</span>
            <span className="flex items-center">{car.transmission}</span>
            <span className="flex items-center">{car.capacity}</span>
          </div>

          {/* Price and Button */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
            <div>
              <p className="text-base md:text-lg font-bold">
                {car.price}{" "}
                <span className="text-xs md:text-sm text-gray-400 line-through">
                  {car.oldPrice}
                </span>
              </p>
              <p className="text-gray-500 text-xs md:text-sm">/ day</p>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
              <Link to='./details'>Rent Now</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeDiv;