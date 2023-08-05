import React from "react";
import { configArr } from "../../config/utils";

function SearchOptionsBtn({searchBy, setSearchBy}) {
  return (
    <>
      {configArr.map((option, index) => {
        const btnClass =
          searchBy.type == option.type
            ? "bg-activeBtn px-4 py-1 text-white border rounded-full whitespace-nowrap transition-all duration-300 ease-in-out"
            : "bg-transparent px-4 py-1 text-black border rounded-full whitespace-nowrap transition-all duration-300 ease-in-out";
        return (
          <button
            key={index}
            onClick={() => setSearchBy(option)}
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
