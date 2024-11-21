import { useState, useEffect } from "react";

export default function Outcome() {
  const steps = [
    {
      year: "Year 1",
      outcome: "Establishing Computing fundamentals",
      description:
        "The foundations of engineering will be laid through basic sciences and engineering courses such as engineering mathematics, physics, engineering drawing, engineering electronics and electrical engineering, and graphics, among others. ",
      icon: "📚",
    },
    {
      year: "Year 2",
      outcome: "Broadening Computing Perspectives",
      description:
        "Fundamental subjects for a career in software, such as Database Systems, Design and Analysis of Algorithms, Web Technologies, etc., will also be thoroughly covered.",
      icon: "🌐",
    },
    {
      year: "Year 3",
      outcome: "Gain Expertize in specific domain",
      description:
        "All students will, nevertheless, work on developing an end to end web/ mobile/ embedded applications. Additionally, the choice to start a research endeavor in an emerging computing domain.",
      icon: "🌟",
    },
    {
      year: "Year 4",
      outcome: "Developing Innovative Ideas ",
      description:
        "By concentrating on courses like Big Data Analytics, Deep Learning, Internet of Things, Cloud Computing, and High Performance Computing, among others you will build an end-to-end society centric or industry related application.",
      icon: "🎓",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex flex-col items-center pt-16  pr-16 pl-28">
      <h2 className="text-5xl font-bold font-grotesk text-gray-800 mb-12">
        A Journey of Insights and Discoveries
      </h2>
      <div className="relative w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-start mb-12 relative transition-all duration-500 ${
              currentStep === index
                ? "opacity-100 translate-x-0 scale-105"
                : "opacity-75 translate-x-4 scale-100"
            }`}>
            <div
              className={`flex items-center justify-center w-16 h-16 ${
                currentStep === index
                  ? " text-white shadow-lg scale-110"
                  : " text-white"
              } text-2xl font-bold rounded-full relative z-10 transform transition-all duration-500`}>
              {step.icon}
            </div>

            <div className="ml-12">
              <h3
                className={`text-xl font-semibold transition-all ${
                  currentStep === index
                    ? "text-orange-600"
                    : "text-gray-800"
                }`}>
                {step.year}
              </h3>
              <p
                className={`text-lg font-medium ${
                  currentStep === index
                    ? "text-orange-500"
                    : "text-gray-600"
                }`}>
                {step.outcome}
              </p>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
