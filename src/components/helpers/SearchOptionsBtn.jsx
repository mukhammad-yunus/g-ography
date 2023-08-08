import React from "react";
import { configArr } from "../../config/constants";

function SearchOptionsBtn({searchBy, setSearchBy}) {
  const handleClick = (option)=>{
    localStorage.setItem('option', JSON.stringify(option))
    setSearchBy(option)
  }
  return (
    <>
      {configArr.map((option, index) => {
        const btnClass =
          searchBy.type == option.type
            ? "text-white bg-activeBtn px-4 py-1 border rounded-full whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-slate-800"
            : "text-white bg-transparent px-4 py-1 border rounded-full whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-black";
        return (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={btnClass}
          >
            {option.type}
          </button>
        );
      })}
    </>
  );
}

export default SearchOptionsBtn;
