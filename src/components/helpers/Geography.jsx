import React from "react";
import { Link } from "react-router-dom";

function Geography({ current, oddClassName, evenClassName, neighbors }) {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl pb-4">Geography</h2>
      <div>
        <div className={oddClassName}>
          <p>{current.continents.length > 1 ? "Continents" : "Continent"}</p>
          <span className="flex gap-3 flex-wrap">
            {current.continents?.map((continent, index) => (
              <span key={index}>{continent}</span>
            ))}
          </span>
        </div>
        <p className={evenClassName}>
          <span>Region</span>
          <span>{current.region}</span>
        </p>
        <p className={oddClassName}>
          <span>Subregion</span>
          <span>{current.subregion}</span>
        </p>
        {neighbors?.length && (
          <div className={evenClassName}>
            <p>{neighbors.length > 1 ? "Neighbors" : "Neighbor"}</p>
            <span className="flex flex-wrap">
              {neighbors?.map(({ name, link }, index) => (
                <Link
                  to={link}
                  key={index}
                  className="mr-2 hover:underline transition-all duration-200 ease-in-out"
                >
                  {name}
                  {neighbors.length == index + 1
                    ? ""
                    : neighbors.length > 1
                    ? ", "
                    : ""}
                </Link>
              ))}
            </span>
          </div>
        )}
        <div className={oddClassName}>
          <p>{current.timezones.length > 1 ? "Timezones" : "Timezone"}</p>
          <span className="flex gap-3 flex-wrap">
            {current.timezones?.map((timezone, index) => (
              <span key={index}>{timezone}</span>
            ))}
          </span>
        </div>
        <p className={evenClassName}>
          <span>Start of week</span>
          <span>{current.startOfWeek}</span>
        </p>
      </div>
    </div>
  );
}

export default Geography;
