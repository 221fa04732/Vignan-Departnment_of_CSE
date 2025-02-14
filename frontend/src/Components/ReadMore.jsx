import React, { useState, useRef, useEffect } from "react";

export default function ReadMore(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const divRef = useRef(null);

  const toggleDiv = () => {
    if (!isOpen) {
      setIsAnimating(true);
      setTimeout(() => setIsOpen(true), 200); 
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 200); 
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsAnimating(false);
        setTimeout(() => setIsOpen(false), 200); 
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button onClick={toggleDiv}>
        {props.show}
      </button>
      <div
        ref={divRef}
        className={`z-50 fixed top-20 right-0 rounded-md transition-all duration-700 ease-in-out transform bg-emerald-700 text-white ${
          isOpen
            ? "opacity-100 scale-100 translate-x-0" 
            : isAnimating
            ? "opacity-0 scale-90 translate-x-full"
            : "hidden translate-x-full" 
        }`}
      >
        <div className="flex items-center justify-end p-2">
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => setIsOpen(false), 200);
            }}>
            <img className="w-5 h-5" src="x-button.png" />
          </button>
        </div>
        <div className="overflow-y-scroll overflow-x-hidden">{props.content}</div>
      </div>
    </>
  );
}
