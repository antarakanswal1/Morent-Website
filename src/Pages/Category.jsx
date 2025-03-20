import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Location from "../Components/Location";
import ThreeDiv from "../Components/ThreeDiv";

function Category() {
  return (
    <>
      <Navbar />
      <main className="flex">
        {/* Sidebar - Left */}
        <div className="w-1/4 p-4">
          <Sidebar />
        </div>

        {/* Right Side - Location & CarRent */}
        <div className="w-3/4">
          {/* Location Component - Top */}
          <Location />

          {/* CarRent Component - Below Location */}
          <div className="">
            <ThreeDiv/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Category;
