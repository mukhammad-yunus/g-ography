import React, { useEffect, useState } from "react";

function GetElementFromObj({ obj, context }) {
  const [text, setText] = useState(null);
  const [active, setActive] = useState(null);
  const objToArr = (object) => Object.entries(object);
  const arr = objToArr(obj);
  const selectEl = arr.map((item, index) => {
    const countryCode = item[0];
    const activeClassName =
      active === countryCode
        ? "bg-white text-black font-black border rounded-lg text-center px-6 py-1 hover:bg-neutral-200 cursor-pointer"
        : "bg-black border rounded-lg text-center px-6 py-1 hover:bg-neutral-950 cursor-pointer";
    return (
      <p key={countryCode} className={activeClassName} onClick={handleClick}>
        {countryCode}
      </p>
    );
  });
  function handleClick(e) {
    const { innerText } = e.target;
    if (innerText === active) {
      setText(null);
      setActive(null);
    } else {
      setActive(innerText);
    }
  }
  
  useEffect(() => {
    setActive(arr[0][0])
  }, [obj])
  
  useEffect(() => {
    if (active) {
      const value = objToArr(obj[active]);
      const textEl = value.map((item, index) => (
        <div
          key={`${index}${active.split("").join("_")}`}
          className="grid grid-cols-2 py-1 border-b-2 border-neutral-900  items-center"
        >
          <p className="flex gap-1 flex-wrap">{context}{item[0]}</p>
          <p className=" justify-self-start">{item[1]}</p>
        </div>
      ));
      setText(textEl);
    }
  
  }, [active])
  
  
  return (
    <div className="w-full grid">
      <div className="flex gap-2 items-center w-full overflow-x-scroll custom-scrollbar select-none">
        {selectEl}
      </div>
      {text && <div className=" mt-3">{text}</div>}
    </div>
  );
}

export default GetElementFromObj;
