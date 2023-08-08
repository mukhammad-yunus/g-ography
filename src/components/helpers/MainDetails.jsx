import React from "react";
import GetElementFromObj from "./GetElementFromObj";

function MainDetails({ current, oddClassName, evenClassName }) {
  return (
    <div className="text-white flex flex-col justify-center items-start">
      <h1 className="flex items-baseline gap-3 flex-wrap font-black text-4xl pb-4">
        <span>{current.name.common}</span>
        <span className="font-normal text-sm text-white">
          {current.independent ? "independent" : "dependent"}
        </span>
        <span className="font-normal text-sm text-orange-200">
          {current.unMember && "Member of United Nations"}
        </span>
      </h1>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        <img
          className="block self-center h-full sm:max-h-40"
          src={current.flags.svg}
          alt={current.flags.alt}
        />
        <div className="col-span-1 xl:col-span-2">
          <p className={oddClassName}>
            <span>Official</span>
            <span>{current.name.official}</span>
          </p>
          <p className={evenClassName}>
            <span>Capital</span>
            <span>{current.capital}</span>
          </p>
          <p className={oddClassName}>
            <span>Population</span>
            <span>{current.population.toLocaleString()} people</span>
          </p>
          <p className={evenClassName}>
            <span>Area</span>
            <span>{current.area.toLocaleString()} km²</span>
          </p>
          <div className={oddClassName}>
            <p>{current.tld?.length > 1 ? "Domains" : "Domain"}</p>
            <span className="flex gap-3 flex-wrap">
              {current.tld?.map((domain, index) => (
                <span key={index}>{domain}</span>
              ))}
            </span>
          </div>
          <div className={evenClassName}>
            <p>Country Codes</p>
            <span className="flex gap-2 flex-wrap">
              <span>{current.cca2}</span>
              <span>{current.cca3}</span>
              <span>{current.ccn3}</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2">
          <h3>Country name in official language(s)</h3>
          <GetElementFromObj obj={current.name.nativeName} />
        </div>
      </div>
    </div>
  );
}

export default MainDetails;
