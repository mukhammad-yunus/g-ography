import React from "react";

function GetElementFromObj({obj, name}) {
  const objToArr = () => Object.entries(obj);
  const arr = objToArr();
  const key = Object.keys(arr[0][1]);
  const keyOne = key[0];
  const keyTwo = key[1];
  const element = arr.map((item, index) => {
    const isLast = index === arr.length - 1;
    const className = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
    const countryCode = item[0];
    const info = item[1];
    const itemOne = info[keyOne];
    const itemTwo = info[keyTwo];
    return (
      <tr key={index}>
        <td className={className}>
          <p className="font-normal md:text-lg leading-none">{countryCode}</p>
        </td>
        <td className={className}>
          <p className="font-normal md:text-lg leading-none">{itemOne}</p>
        </td>
        <td className={className}>
          <p className="font-normal md:text-lg leading-none">{itemTwo}</p>
        </td>
      </tr>
    );
  });
  return (
    <table className="w-full table-auto text-left">
      <thead>
        <tr>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <p className="font-normal leading-none opacity-70">{name}</p>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <p className="font-normal leading-none opacity-70">{keyOne}</p>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <p className="font-normal leading-none opacity-70">{keyTwo}</p>
          </th>
        </tr>
      </thead>
      <tbody>{element}</tbody>
    </table>
  );
}

export default GetElementFromObj;
