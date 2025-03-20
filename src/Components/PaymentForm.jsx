import React, { useState } from 'react';
import car2 from '../assets/car2.png'
import Paypal from '../assets/PayPal.png'
import Bitcoin from '../assets/Bitcoin.png'


const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
    const [termsConsent, setTermsConsent] = useState(false);

  const handlePaymentMethodChange = (method) => setSelectedPaymentMethod(method);
  const handleTermsChange = () => setTermsAccepted(!termsAccepted);

  return (
    <div className="max-w-6xl w-full mx-auto my-10 p-6 bg-white shadow-md rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Billing Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Billing Info</h2>
          <p className="text-sm text-gray-500">Please enter your billing info</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <label>Your Name<input type="text" placeholder="Your name" className="p-2 border border-gray-300 rounded w-full" /></label>
            <label>Phone Number<input type="text" placeholder="Phone number" className="p-2 border border-gray-300 rounded w-full" /></label>
            <label>Address<input type="text" placeholder="Address" className="p-2 border border-gray-300 rounded w-full" /></label>
            <label>Town or City<input type="text" placeholder="Town or city" className="p-2 border border-gray-300 rounded w-full" /></label>
          </div>
        </div>

        {/* Rental Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Rental Info</h2>
          <div className="mt-4">
            <p className="font-bold">Pick - Up</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label>City<input type="text" placeholder="Select your city" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>Date<input type="text" placeholder="Select your date" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>Time<input type="text" placeholder="Select your time" className="p-2 border border-gray-300 rounded w-full" /></label>
            </div>
            <p className="font-bold mt-4">Drop - Off</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label>City<input type="text" placeholder="Select your city" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>Date<input type="text" placeholder="Select your date" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>Time<input type="text" placeholder="Select your time" className="p-2 border border-gray-300 rounded w-full" /></label>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>
          <p className="text-sm text-gray-500">Please enter your payment method</p>
          <div className="p-4 rounded-md">
            <div className="flex items-center space-x-4">
              <input type="radio" id="credit-card" name="payment" checked={selectedPaymentMethod === 'credit-card'} onChange={() => handlePaymentMethodChange('credit-card')} />
              <label htmlFor="credit-card" className="flex items-center space-x-2 cursor-pointer">Credit Card</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <label>Card Number<input type="text" placeholder="Card number" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>Expiration Date<input type="text" placeholder="DD / MM / YY" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>Card Holder<input type="text" placeholder="Card holder" className="p-2 border border-gray-300 rounded w-full" /></label>
              <label>CVC<input type="text" placeholder="CVC" className="p-2 border border-gray-300 rounded w-full" /></label>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-4">
                <input type="radio" id="bitcoin" name="payment" checked={selectedPaymentMethod === 'bitcoin'} onChange={() => handlePaymentMethodChange('bitcoin')} />
                <label htmlFor="bitcoin" className="flex items-center space-x-2 cursor-pointer">Paypal</label>
              </div>
              <img src={Paypal} alt="" />
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-4">
                <input type="radio" id="bitcoin" name="payment" checked={selectedPaymentMethod === 'bitcoin'} onChange={() => handlePaymentMethodChange('bitcoin')} />
                <label htmlFor="bitcoin" className="flex items-center space-x-2 cursor-pointer">Bitcoin</label>
              </div>
              <img src={Bitcoin} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Rental Summary */}
      <div className="p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Rental Summary</h3>
        <div className="flex items-center space-x-6 mb-4">
          <img src={car2} alt="Nissan GT-R" className="h-20 w-28 rounded flipped" />
          <div>
            <h3 className="text-xl font-bold">Nissan GT-R</h3>
            <p className="text-yellow-500">★★★★☆ 440+ Reviewer</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>$80.00</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>Tax</span>
          <span>$0</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <input type="text" placeholder="Apply promo code" className="p-2 border border-gray-300 rounded w-full" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply now</button>
        </div>
        <div className="text-xl font-bold text-blue-600">Total Rental Price: $80.00</div>
      </div>
    </div>
  );
};

export default PaymentForm;