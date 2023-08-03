import React from "react";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";

function Search() {
  return (
    <div className="w-full p-5 min-h-screen">
      <SearchForm/>
      <SearchResult/>
    </div>
  );
}

export default Search;
