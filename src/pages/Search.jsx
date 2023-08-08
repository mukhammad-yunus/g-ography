import React from "react";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import { useSelector } from "react-redux";
import { getSearchError } from "../config/searchSlice";

function Search() {
  const error = useSelector(getSearchError);

  return (
    <div className="w-full md:px-20 sm:px-8 px-6 pt-14 min-h-screen">
      <SearchForm />
      {error ? (
          <p className="text-red-200 mt-4 p-2 rounded border border-red-500">We could not find any information.</p>
      ) : (
        <SearchResult />
      )}
    </div>
  );
}

export default Search;
