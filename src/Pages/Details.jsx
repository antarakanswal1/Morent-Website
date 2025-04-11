import Sidebar from '../Components/Sidebar'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CarDetails from '../Components/CarDetails'
import ThreeDiv from '../Components/ThreeDiv'


const Details = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        {/* Sidebar Section */}
        <div className='w-1/4 p-4'>
          <Sidebar />
        </div>

        {/* Car Details Section */}
        <div className='w-3/4 p-4'>
          <CarDetails />
      <ThreeDiv/>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details
