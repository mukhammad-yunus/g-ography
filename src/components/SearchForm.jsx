import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { configArr } from "../config/utils";
import SearchOptionsBtn from "./helpers/searchOptionsBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearch,
  init,
  getSearchError,
  getSearchStatus,
} from "../config/searchSlice";
import Loader from "./Loader";

function SearchForm() {
  const [searchBy, setSearchBy] = useState(configArr[0]);
  const error = useSelector(getSearchError);
  const loading = useSelector(getSearchStatus);
  const searchRef = useRef();
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    const url = `https://restcountries.com/v3.1${searchBy.endpoint(
      searchRef.current.value
    )}`;

    dispatch(fetchSearch(url));
  }
  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <>
      <form
        className="flex w-full justify-between flex-col xs:flex-row md:justify-start gap-2 items-center"
        onSubmit={handleSearch}
      >
        <div className="flex justify-start items-center w-full sm:w-2/3 outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search for..."
            className="bg-transparent select-none w-full p-1 text-lg px-4 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="text-lg w-full xs:w-fit border px-6 py-1 font-semibold rounded-md"
        >
          Search
        </button>
      </form>
      {error && (
        <div className="text-red-500 mt-4 p-1 rounded bg-red-100 border border-red-500">
          <p>
            We could'n find any information on{" "}
            <span className="font-bold">{searchRef?.current?.value}</span>
          </p>
        </div>
      )}
      <div className="text-lg flex flex-col gap-5 mt-4">
        <h2 className="font-semibold">Search by</h2>
        <div className="flex flex-row flex-wrap gap-3 justify-start items-start">
          <SearchOptionsBtn searchBy={searchBy} setSearchBy={setSearchBy} />
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
}

export default SearchForm;
