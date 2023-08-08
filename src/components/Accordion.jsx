import React, { useEffect, useRef, useState } from "react";

import { FaAngleUp } from "react-icons/fa";
function Accordion({ children, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef()
  const isOpenClassName = `${
    isOpen ? "max-h-screen-20x" : "max-h-0"
  } overflow-hidden custom-scrollbar transition-all duration-500 ease-in-linear w-full pl-4  text-lg md:text-xl`;

  useEffect(() => {
    const handleClickOutside = (e)=>{
      if (accordionRef.current && !accordionRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])
  
  return (
    <div ref={accordionRef} className=" bg-zinc-950 p-2 border-b-2 border-black">
      <div
        className="flex justify-between items-center select-none cursor-pointer text-lg md:text-xl xl:text-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{content}</p>
        <span className={`${isOpen ? "rotate-0": "rotate-180"} transition-transform transform ease-linear duration-300`}><FaAngleUp /> </span>
      </div>
      <div className={isOpenClassName}>{children}</div>
    </div>
  );
}

export default Accordion;
