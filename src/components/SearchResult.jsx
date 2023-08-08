import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../config/searchSlice";
import Card from "./helpers/Card";

function SearchResult() {
  const result = useSelector(selectSearchResult);
  if (!result?.length) return;
  if(result === 'Request failed with status code 400') return <p className="text-red-200 mt-4 p-2 rounded border border-red-500">We could not find any information.</p>

  return (
    <div className="text-white w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {result?.map((card, index) => (
        <Card key={index} country={card}/>
      ))}
    </div>
  );
}

export default SearchResult;
