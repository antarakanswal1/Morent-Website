import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PaymentForm from '../Components/PaymentForm';

function Payment() {
  return (
    <>
      <Navbar />
      <main>
        <PaymentForm/>
      </main>
      <Footer/>
    </>
  );
}

export default Payment;