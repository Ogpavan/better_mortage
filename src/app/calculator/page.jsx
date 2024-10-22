'use client';

import React, { useState } from 'react';

export default function Page() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(8169);
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    setRangeValue(value);

    setHomePrice(300000 + value * 1000);
    setDownPayment(60000 + value * 500);
    setInterestRate(5 + value * 0.1);
    setMonthlyPayment(8169 + value * 50);
  };

  const handleInputChange = (setter) => (e) => {
    setter(Number(e.target.value));
  };

  const handleLoanTermChange = (e) => {
    setLoanTerm(Number(e.target.value));
  };

  return (
    <section className="bg-[#F0F7f1] min-h-screen flex items-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#03140f] pt-20 sm:pt-40 text-center">
          Mortgage Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#031510] mt-4 text-center max-w-[900px] mx-auto">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="w-full md:w-auto">
            <p className="text-[#031510] font-medium py-3">Home Price</p>
            <input
              type="number"
              value={homePrice}
              onChange={handleInputChange(setHomePrice)}
              className="w-full md:w-80 h-16 border border-[#03140f] rounded-md px-4 text-2xl font-bold"
            />
          </div>

          <div className="w-full md:w-auto">
            <p className="text-[#031510] font-medium py-3">Monthly Payment</p>
            <p className="w-full md:w-80 h-16 rounded-md px-4 text-2xl font-bold">
              ${monthlyPayment}
            </p>
          </div>

          <div className="w-full md:w-auto">
            <button className="w-full md:w-64 h-12 bg-[#12513f] text-white rounded-md px-4 text-xl font-semibold">
              Get Approved
            </button>
          </div>
        </div>

        <div className="mt-6">
          <input
            type="range"
            value={rangeValue}
            min="0"
            max="100"
            onChange={handleRangeChange}
            className="w-full h-2 rounded-md mt-4 accent-black"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-evenly items-center mt-10 gap-4">
          <input
            type="number"
            value={downPayment}
            onChange={handleInputChange(setDownPayment)}
            className="w-full sm:w-40 h-12 border border-[#03140f] rounded-md px-4"
            placeholder="Down Payment"
          />

          <input
            type="number"
            value={interestRate}
            onChange={handleInputChange(setInterestRate)}
            className="w-full sm:w-40 h-12 border border-[#03140f] rounded-md px-4"
            placeholder="Interest Rate"
          />

          <select
            value={loanTerm}
            onChange={handleLoanTermChange}
            className="w-full sm:w-40 h-12 border border-[#03140f] rounded-md px-4"
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>
      </div>
    </section>
  );
}
