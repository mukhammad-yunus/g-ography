import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../config/searchSlice";
import Card from "./helpers/Card";

function SearchResult() {
  const result = useSelector(selectSearchResult);

  if (!result.length) return;
  return (
    <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {result?.map((card, index) => (
        <Card key={index} country={card}/>
      ))}
    </div>
  );
}

export default SearchResult;
