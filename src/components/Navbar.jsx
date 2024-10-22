"use client";

import { useState } from "react";
import Link from 'next/link'; // Correct import without braces

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#004733] p-6 w-full fixed top-0 left-0 z-50 text-white flex justify-center">
      <div className="flex items-center justify-between w-full md:max-w-[1480px]">
        <svg role="img" class="icon icon-LogoBetter2021" width="85px" height="35px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Better</title><path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="white"></path></svg>
<div className="hidden md:block">
        <ul className="flex items-center justify-center gap-x-8 pr-32 pl-10 text-lg ">
        <NavItem
  label="Home"
  dropdownItems={[
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Mortgage Calculator", path: "/calculator" },
    { name: "Start Page", path: "/start" },
  ]}
/>

<NavItem
              label="Buy"
              dropdownItems={[
                { name: "Apply Now", path: "/apply" },
                { name: "Purchase Rates", path: "/purchase-rates" },
                { name: "Affordability Calculator", path: "/affordability" },
              ]}
            />

            <NavItem
              label="Refinance"
              dropdownItems={[
                { name: "Apply Now", path: "/apply-refinance" },
                { name: "Finance Rates", path: "/finance-rates" },
                { name: "Cash-Out Refinance Calculator", path: "/cash-out-refinance" },
                { name: "Learning Center", path: "/learning-center" },
              ]}
            />

            <NavItem
              label="HELOC"
              dropdownItems={[
                { name: "Apply for HELOC", path: "/apply-heloc" },
                { name: "Calculate Your Cash", path: "/calculate-your-cash" },
                { name: "HELOC vs Cash-Out Refinance", path: "/heloc-vs-cash-out" },
                { name: "Learning Center", path: "/learning-center" },
              ]}
            />

            <NavItem  label="Rates"
              dropdownItems={[
                { name: "Mortgage Rates", path: "/mortgage-rates" },
                { name: "APR Comparison", path: "/apr-comparison" },
                { name: "Purchase Rates", path: "/purchase-rates" },
                { name: "HELOC Rates", path: "/heloc-rates" },
                { name: "Purchase VA Rates", path: "/purchase-va-rates" },
              ]}
            />
      
        </ul>
        </div>

        <div className="flex items-center md:gap-x-6 gap-x-4 justify-end">
          <p className="cursor-pointer hover:bg-white hover:text-black px-4 py-2 rounded-full hidden md:block">
            Sign in
          </p>

          <button className="text-black rounded-full bg-[#1ee07f] md:px-4 md:py-2 px-3 py-1 transition delay-[50] hover:bg-white hover:text-black">
            Continue
          </button>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

function NavItem({ label, dropdownItems }) {
  return (
    <li className="relative group cursor-pointer">
      <div className="hover:bg-white hover:text-[#004733] px-4 py-2 transition delay-[50] rounded-full">
        {label}
      </div>

      <ul className="absolute left-0 mt-1 hidden w-64 bg-white text-black rounded-lg shadow-lg group-hover:block px-4 py-2">
        {dropdownItems.map(({ name, path }, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-[#e9e9e9] hover:text-black transition-colors rounded-lg"
          >
            <Link href={path} legacyBehavior>
              <a className="block w-full h-full">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 p-8 shadow-lg transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-[#004733]">Better</h1>
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="space-y-6 text-[#03130f]">
          <li className="text-lg hover:text-[#004733]">
            <Link href="/" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Home</a>
            </Link>
          </li>
          <li className="text-lg hover:text-[#004733]">Buy</li>
          <li className="text-lg hover:text-[#004733]">Refinance</li>
          <li className="text-lg hover:text-[#004733]">HELOC</li>
          <li className="text-lg hover:text-[#004733]">Rates</li>
          
          {/* Add dropdown items as individual links */}
          <li className="text-lg hover:text-[#004733]">
            <Link href="/about" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>About Us</a>
            </Link>
          </li>
          <li className="text-lg hover:text-[#004733]">
            <Link href="/calculator" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Mortgage Calculator</a>
            </Link>
          </li>
          <li className="text-lg hover:text-[#004733]">
            <Link href="/start" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Start Page</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
