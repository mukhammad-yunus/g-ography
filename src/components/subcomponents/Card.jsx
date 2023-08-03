import React from "react";
import { Link } from "react-router-dom";

function Card({ country, home }) {
  const capital = Array.isArray(country?.capital)
    ? country?.capital?.join(", ")
    : "none";

  const parentClass = home
    ? "glassmorphism border-gray-200 max-w-3xl flex flex-row border rounded p-2 flex gap-3 cursor-pointer items-center"
    : "glassmorphism w-full border-gray-200 border rounded p-2 flex flex-col justify-between gap-3 cursor-pointer";
  const infoClass = home
    ? "place-self-start w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3"
    : "flex flex-col justify-between items-start";

  return (
    <Link to={"#"} className={parentClass}>
      <div>
        <img
          className="m-0 py-2 rounded w-full object-contain max-h-36"
          src={country?.flags?.png}
          alt={`flag of ${country?.name?.official}`}
        />
      </div>
      <div className={infoClass}>
        <h3 className="text-xl font-bold w-full  col-span-1  sm:col-span-2 lg:col-span-3">
          {country?.name?.common}
        </h3>
        <p>Capital: {capital}</p>
        {home && (
          <>
            <p>Area: {country?.area?.toLocaleString()} km²</p>
            <p>Population: {country?.population?.toLocaleString()}</p>
          </>
        )}
        <div className="flex flex-wrap">
          <p className="mr-2">{country?.region}:</p>
          <p>{country?.subregion}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
