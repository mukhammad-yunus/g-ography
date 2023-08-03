import React, { useEffect } from "react";
import Card from "./subcomponents/Card";
import { useDispatch, useSelector } from "react-redux";
import { getNeighbors, selectMyCountry, selectNeighbors } from "../config/countrySlice";

function HomeCountries() {
  const dispatch = useDispatch();
  const myCountry = useSelector(selectMyCountry);
  const neighbors = useSelector(selectNeighbors)

  useEffect(() => {
    if (myCountry.length) {
      const borders = myCountry[0].borders;
      dispatch(getNeighbors(borders));
    }
  }, [myCountry]);

  if (!myCountry) return <div className="text-white">Loading...</div>;
  return (
    <>
      {myCountry && (
        <div className="bg-white md:py-8 md:px-20 sm:p-8 p-6 flex flex-col gap-2">
          <div className="flex flex-col justify-between items-start">
            <h1 className="text-3xl font-bold mb-5">Your country</h1>
            <Card country={myCountry[0]} home={true} />
          </div>
          <div>
            <h1 className="text-3xl font-bold my-5 ">
              Neighboring countries
            </h1>
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {neighbors?.map((country, index) => (
                <Card key={index} country={country} home={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeCountries;
