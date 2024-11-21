import React, { useState } from 'react';

export default function FAQ()
{
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I apply to the Computer Science program?",
      answer: "Applications are typically submitted online through the university's admission portal. Required documents usually include Class 12th mark sheets, entrance exam scores (such as JEE Main/Advanced for undergraduate programs), and personal statements. Specific details are available on the university's admissions page.",
    },
    {
      question: "What are the admission requirements for the Computer Science department?",
      answer: "Students must have completed the Higher Secondary Examination (12th grade) with at least 60% in Physics, Chemistry, and Mathematics. For undergraduate programs, a good score in entrance exams like JEE Main/Advanced or state-level CETs is essential. For postgraduate programs, exams like GATE may be required.",
    },
    {
      question: "Is there any scholarship available for students?",
      answer: "Yes, 25% of seats in each department are reserved for scholarships, based on merit and availability. Scholarships range from 25% to 75% tuition waiver, subject to maintaining 70% academic performance annually.",
    },
    {
      question: "Are lateral entry students accepted into the program?",
      answer: "Yes, lateral entry is available for students who have completed a three-year diploma in a relevant field with at least 60% marks.",
    },
    {
        question: "How is student performance monitored in the department?",
        answer: "The department uses continuous internal assessments, mid-semester exams, end-semester exams, lab assessments, and project reviews to monitor and evaluate student performance.",
    },
  ];

  return (
    <div className="mx-auto px-16 pt-16 pb-6 bg-white">
      <h2 className="text-5xl font-bold font-grotesk text-gray-900 text-center mb-10">
            Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-b-2 border-l-2 border-gray-200 rounded-2xl py-5 px-8 hover:border-blue-400">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-blue-600 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
