import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { navbarLists } from "../config/constants";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', ()=>setOpen(false));

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleNavbar = (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav
      ref={navbarRef}
    className="fixed top-0 left-0 w-full glassmorphism text-white flex justify-between items-center md:px-20 sm:px-8 px-6 py-2 z-20">
      <Link to="/" className="">
        <img src={logo} alt="logo" className="object-contain h-16" />
      </Link>
      <ul className="hidden md:flex items-center space-x-4">
        {navbarLists.map((list, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-black font-bold px-2 rounded text-lg xl:text-xl"
                  : "px-2 rounded text-lg xl:text-xl hover:underline"
              }
              to={list.link}
            >
              {list.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="block md:hidden">
        {open ? (
          <RxCross1
            fontSize={28}
            className="cursor-pointer"
            onClick={toggleNavbar}
          />
        ) : (
          <FaBars
            fontSize={28}
            className="cursor-pointer"
            onClick={toggleNavbar}
          />
        )}
      </div>
      <ul
        className={`${
          open ? "left-0" : "-left-full"
        } fixed top-0 w-2/3 h-screen bg-zinc-950 text-center transition-all duration-500 ease-in-out block md:hidden`}
      >
        {navbarLists.map((list, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-black font-bold block w-full text-lg xl:text-xl hover:bg-zinc-900 transition-all duration-300 ease-in-out my-4 py-2 hover:text-white"
                  : "block w-full text-lg xl:text-xl hover:bg-zinc-900 transition-all duration-300 ease-in-out my-4 py-2"
              }
              to={list.link}
              onClick={()=> setOpen(false)}
            >
              {list.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
