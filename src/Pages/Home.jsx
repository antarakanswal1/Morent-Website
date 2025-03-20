import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import CarRent from '../Components/CarRent';
import Footer from '../Components/Footer';
import Location from '../Components/Location';


function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Location/>
        <CarRent />
      </main>
      <Footer/>
    </>
  );
}

export default Home;