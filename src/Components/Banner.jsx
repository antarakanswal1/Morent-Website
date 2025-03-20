import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 pt-6 px-6">
      {/* First Banner */}
      <div className="w-full md:w-1/2 bg-ban1 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden h-[300px]">
        <div className="relative z-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            The Best Platform <br /> for Car Rental
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
          </p>
          <button className="mt-4 btn-color1 text-white font-semibold py-2 px-4 rounded-lg transition text-lg">
            <Link to='./details'>Rent Now</Link>
          </button>
        </div>
        <img
          src={car1}
          alt="Car"
          className="absolute bottom-4 right-6 w-1/2 md:w-[350px] object-contain"
        />
      </div>

      {/* Second Banner */}
      <div className="w-full md:w-1/2 bg-ban2 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden h-[300px]">
        <div className="relative z-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Easy way to rent a <br /> car at a low price
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Providing cheap car rental services <br /> and safe and comfortable facilities.
          </p>
          <button className="mt-4 bg-blue-400 btn-color2 text-white font-semibold py-2 px-4 rounded-lg transition text-lg">
          <Link to='./details'>Rent Now</Link>
          </button>
        </div>
        <img
          src={car2}
          alt="Car"
          className="absolute bottom-4 right-6 w-1/2 md:w-[300px] object-contain flipped"
        />
      </div>
    </div>
  );
};

export default Banner;