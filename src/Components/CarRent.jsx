import React from "react";
import cars from './Data';
import { Link } from "react-router-dom";

const CarRent = () => {
  return (
    <div className="mt-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold ml-7">Popular Cars</h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>

      {/* Car Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md relative"
          >
            {/* Car Name and Type */}
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.type}</p>
              </div>
            </div>

            {/* Car Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-auto mt-2 mx-auto"
            />

            {/* Car Details */}
            <div className="flex justify-between text-gray-500 text-sm mt-2">
              <span className="flex items-center">{car.fuel}</span>
              <span className="flex items-center">{car.transmission}</span>
              <span className="flex items-center">{car.capacity}</span>
            </div>

            {/* Price and Button */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4 space-y-2 sm:space-y-0">
              <div>
                <p className="text-lg font-bold">
                  {car.price}{" "}
                  <span className="text-sm text-gray-400 line-through">
                    {car.oldPrice}
                  </span>
                </p>
                <p className="text-gray-500 text-sm">/ day</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                <Link to="/details">Rent Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRent;