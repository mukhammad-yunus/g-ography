import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../config/searchSlice";
import Card from "./subcomponents/Card";

function SearchResult() {
  const result = useSelector(selectSearchResult);

  if(!result.length) return
  return (
    <div>
      <Card
        //   key={index}
        country={result[0]}
        home={false}
      />
    </div>
  );
}

export default SearchResult;
