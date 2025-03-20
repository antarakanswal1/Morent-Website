import React from 'react';  
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import car1 from '../assets/car2.png';
import { Chart } from 'react-google-charts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const data = [
  ['Car Type', 'Count'],
  ['Sport Car', 17439],
  ['SUV', 9478],
  ['Coupe', 18197],
  ['Hatchback', 12510],
  ['MPV', 14406],
];

const carTypes = ['Sports Car', 'SUV', 'Coupe', 'Hatchback', 'MPV'];

const options = {
  pieHole: 0.5,
  is3D: false,
  legend: 'none',
  chartArea: { width: '90%', height: '90%' },
  colors: ['#0d6efd', '#6c757d', '#dc3545', '#fd7e14', '#20c997']
};


const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Details Rental */}
                    <div className="p-4 col-span-1 border-white rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Details Rental</h2>
                        <iframe 
                            id="map-canvas" 
                            className="map_part w-full h-60 mb-4" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0" 
                            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Dehradun&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                        <div className="flex items-center gap-4">
                            <img src={car1} alt="Car" className="w-20 h-18 rounded-md flipped" />
                            <div>
                                <h3 className="font-bold">Nissan GT - R</h3>
                                <p className="text-gray-500">Sport Car</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="location" className="form-radio text-blue-500" />
                                    <span className="text-gray-500">Pick-Up</span>
                                </label>
                                <p>Kota Semarang</p>
                                <p>20 July 2022 - 07:00</p>
                            </div>
                            <div>
                            <label className="flex items-center gap-2">
                                    <input type="radio" name="location" className="form-radio text-blue-500" />
                                    <span className="text-gray-500">Drop-Off</span>
                                </label>
                                <p>Kota Semarang</p>
                                <p>21 July 2022 - 01:00</p>
                            </div>
                        </div>
                        <p className="mt-4 font-bold text-lg">Total Rental Price: <span className="text-blue-600">$80.00</span></p>
                    </div>

                    {/* Top 5 Car Rental */}
                    <div className="p-4 border-white rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Top 5 Car Rental</h2>
                        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="250px"
    />
                        <ul>
            {carTypes.map((car, index) => (
                <li key={index} className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCircle} className="text-gray-400 text-xs px-3" />
                    {car}
                </li>
            ))}
        </ul>
                    </div>

                    {/* Recent Transactions */}
                    <div className="p-4 col-span-1 md:col-span-2 border-white rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                        <ul className="space-y-4">
                            {[
                                { name: "Nissan GT - R", type: "Sport Car", date: "20 July", price: "$80.00" },
                                { name: "Koenigsegg", type: "Sport Car", date: "19 July", price: "$99.00" },
                                { name: "Rolls - Royce", type: "Luxury Car", date: "18 July", price: "$96.00" },
                                { name: "CR - V", type: "SUV", date: "17 July", price: "$80.00" }
                            ].map((item, index) => (
                                <li key={index} className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-gray-500">{item.type} - {item.date}</p>
                                    </div>
                                    <p className="font-bold">{item.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
