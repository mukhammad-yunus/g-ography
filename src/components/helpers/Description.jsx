import React from "react";
import { tick } from "../../assets/tick";

function Description() {
  return (
    <section className="bg-black text-white md:px-20 sm:px-8 px-6 flex flex-col justify-center min-h-screen">
      <h1 className="select-none md:text-[4rem] text-[2.5rem] md:leading-[4rem] leading-[4rem] font-bold text-gray-50 mb-10">
        About the G-ography
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-start items-start border p-2 xs:p-4 rounded-lg hover:bg-zinc-900">
          <h2 className="text-2xl sm:text-2xl font-bold  xs:pb-4 pb-2">
            Information About All Countries
          </h2>
          <p>You can search for countries by their:</p>
          <ul className="grid grid-cols-2 w-full">
            <li className="flex items-center">{tick} name</li>
            <li className="flex items-center">{tick} full name</li>
            <li className="flex items-center">{tick} country code</li>
            <li className="flex items-center">{tick} currency</li>
            <li className="flex items-center">{tick} language</li>
            <li className="flex items-center">{tick} capital city</li>
            <li className="flex items-center">{tick} calling code</li>
            <li className="flex items-center">{tick} region</li>
            <li className="flex items-center">{tick} regional bloc</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start border p-2 xs:p-4 rounded-lg hover:bg-zinc-900">
          <h2 className=" text-2xl sm:text-2xl font-bold pb-4">
            All Information About Countries
          </h2>
          <p>You can get information about country's:</p>
          <ul className="grid grid-cols-2 w-full">
            <li className="flex items-center">{tick} capital city</li>
            <li className="flex items-center">{tick} population</li>
            <li className="flex items-center">{tick} languages</li>
            <li className="flex items-center">{tick} currencies</li>
            <li className="flex items-center">{tick} regions</li>
            <li className="flex items-center">{tick} country code</li>
            <li className="flex items-center">{tick} and many more.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Description;
