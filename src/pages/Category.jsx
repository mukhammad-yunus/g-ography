import React, { useEffect } from "react";
import Accordion from "../components/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  selectAllCountries,
  selectContinents,
  selectCurrencies,
  selectRegions,
  selectSubregions,
} from "../config/countrySlice";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Category() {
  const allCountries = useSelector(selectAllCountries);
  const regions = useSelector(selectRegions);
  const subRegions = useSelector(selectSubregions);
  const continents = useSelector(selectContinents);
  const currencies = useSelector(selectCurrencies);

  const renderData = (region) => {
    const sorted = [...region[1]].sort();
    const children = sorted.map((item, index) => (
      <Link
      key={index}
        to={`/country/${item[1]}`}
        className="block p-1 border-b border-zinc-800 hover:bg-zinc-800 transition-all duration-200 ease-linear"
      >
        {item[0]}
      </Link>
    ));
    return (
        <Accordion key={region[0]} content={region[0]}>
          {children}
        </Accordion>
    );
  };
  
  
  if(!allCountries?.length && !regions?.length && !subRegions?.length && !continents?.length && !currencies?.length) return <div className="h-screen bg-black"><Loader/></div>
  return (
    <div className="min-h-screen text-white mt-10 md:px-20 sm:px-8 px-6 py-2 pb-10">
      <h1 className="select-none md:text-[4rem] text-[2.5rem] md:leading-[4rem] leading-[4rem] font-black text-gray-50 mb-10">Discover By Category</h1>
      <div className=" rounded-lg overflow-hidden">
        <Accordion content="All">{allCountries.map(renderData)}</Accordion>
        <Accordion content="Continents">{continents.map(renderData)}</Accordion>
        <Accordion content="Region">{regions.map(renderData)}</Accordion>
        <Accordion content="Subregion">{subRegions.map(renderData)}</Accordion>
        <Accordion content="Subregion">{subRegions.map(renderData)}</Accordion>
        <Accordion content="Currencies">{currencies.map(renderData)}</Accordion>
      </div>
    </div>
  );
}

export default Category;
