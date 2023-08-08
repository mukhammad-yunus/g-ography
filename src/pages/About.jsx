import React, { useEffect } from "react";
import Description from "../components/helpers/Description";
import profile from "../assets/profile.png";
function About() {
  return (
    <div className="min-h-screen mt-10 text-white ">
      <Description />
      <div className=" md:px-20 sm:px-8 px-6 flex flex-col justify-center min-h-screen">
        <div className="mx-auto rounded-xl flex flex-col items-center md:flex-row bg-zinc-950 min-h-[300px] md:gap-8 gap-4 max-w-xl w-4/5 mt-20">
          <img
            src={profile}
            alt="profile picture"
            className=" bg-stone-400 -mt-8 ml-0 md:-ml-10 md:mt-0 rounded-xl h-48 "
          />
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div>
              <h4 className="text-bold text-2xl">Mukhammadyunus</h4>
              <p>Junior Front-end Web Developer</p>
            </div>
            <div className="flex justify-between items-center gap-2 pb-6 md:pb-0">
              <a
                href="mailto:dr.mukhammadyunus@gmail.com"
                className="py-2 text-center border rounded hover:bg-white hover:text-black font-bold transition-all duration-200 block w-1/2"
              >
                eMail
              </a>
              <a
                href="https://github.com/mukhammad-yunus" target="_blank"
                className="py-2 text-center border rounded hover:bg-white hover:text-black font-bold transition-all duration-200 block w-1/2"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:px-20 sm:px-8 px-6 flex flex-col justify-center items-center mx-auto min-h-screen w-1/2 gap-4">
      <h2 className=" md:text-[4rem] text-[2.5rem] md:leading-[4rem] leading-[4rem] font-bold text-gray-50">Thanks to </h2>
      <div className="text-center">
        <p className="text-lg">the incredible creators of the <a href="https://restcountries.com/" className="underline" target="_blank">REST COUNTRIES</a>! Your exceptional work has truly elevated this website with valuable country data. I extend my heartfelt gratitude for the seamless experience you've made possible. Here's to your outstanding API!</p>
        <p className="text-lg">Warm regards,</p>
        <h3 className="text-2xl">Mukhammadyunus</h3>
      </div>
      </div>
    </div>
  );
}

export default About;
