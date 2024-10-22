'use client';

import React, { useState } from 'react';

// Sample questions data
const questions = [
  {
    question: "Hi, I'm Betsy!  What can I help you with?",
    options: ["Buying a house", "Refinance my Moratage", "Get Cash from House"],
  },
  {
    question: "Where are you in the home buying process?",
    options: ["Signed a Contract", "Making offers", "Going to open House", "Just researching"],
  },
  {
    question: "When do you plan to buy?",
    options: ["0-3 months", "0-4 months", "0-5 months"],
  },
];

export default function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Store user answers

  // Handle option selection and show next question
  const handleOptionClick = (option) => {
    setAnswers([...answers, option]); // Store the selected answer

    // Move to the next question if available
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(" Time to contact the developer here call me at +91 7302667115 or mail me at connect.pawan69@gmail.com");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className=" p-10 mt-10 rounded-md md:w-[700px]">
        <h2 className="text-3xl font-bold text-center mb-6 ">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
         <button
         key={index}
         onClick={() => handleOptionClick(option)}
         className="w-full text-center px-4 py-3 text-lg box-border border-2 border-[#03140f] 
                    rounded-md hover:border-4 hover:border-[#286654] hover:text-[#356658] 
                    transition-all duration-200"
       >
         {option}
       </button>
       
          ))}
        </div>
      </div>

    
    </div>
  );
}
