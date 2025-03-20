import React from 'react';
import car1 from '../assets/car2.png'
import car4 from '../assets/carhandle.png'
import car3 from '../assets/carhandle2.png'
import { Link } from "react-router-dom";


const CarDetails = ({ }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl max-w-8xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Car Details */}
        <div className="flex-1 p-4 bg-blue-600 text-white rounded-xl">
          <h4 className="text-2xl md:text-3xl font-bold">Sports car with the best <br /> design and acceleration</h4>
          <p className="mt-2 text-base md:text-lg">Safety and comfort while driving a <br /> futuristic and elegant sports car</p>
          <img
            src={car1}
            alt="Car"
            className="rounded-md mt-4 w-full md:w-2/4 flipped"
          />
        </div>

        {/* Right Side - Car Info */}
        <div className="ms-0 md:ms-5 flex-1 p-4">
          <h3 className="text-2xl md:text-3xl font-bold">Nissan GT - R</h3>
          <p className="text-yellow-600"> 440+ Reviewer</p>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </p>

          <div className="grid grid-cols-2 gap-2 mt-4 text-gray-700 text-sm md:text-base">
            <p>Type Car <strong>Sport</strong></p>
            <p>Capacity <strong>2 Person</strong></p>
            <p>Steering <strong>Manual</strong></p>
            <p>Gasoline <strong>70L</strong></p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl md:text-2xl font-bold">$80.00/<span className='font-normal text-sm md:text-lg'>days</span></span>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
             <Link to="/details">Rent Now</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className='flex flex-wrap justify-center items-center gap-4 p-4'>
        <div className='border border-white rounded-lg p-2 w-28 md:w-64'>
          <img src={car1} alt="Car 2" className='w-full object-contain flipped' />
        </div>
        <div>
          <img src={car4} alt="Car Handle 1" className='w-20 md:w-40 rounded-lg' />
        </div>
        <div>
          <img src={car3} alt="Car Handle 2" className='w-24 md:w-48 rounded-lg' />
        </div>
      </div>


      {/* Reviews Section */}
      <div className="mt-8">
        <h4 className="text-lg font-bold">Reviews</h4>
        <div className="bg-gray-100 p-4 rounded-lg mt-2">
          <p className="font-semibold">Alex Stanton</p>
          <p className="text-sm text-gray-600">CEO at Bukapark</p>
          <p className="mt-2 text-gray-700">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mt-2">
          <p className="font-semibold">Skylar Dias</p>
          <p className="text-sm text-gray-600">CEO at Morent</p>
          <p className="mt-2 text-gray-700">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;