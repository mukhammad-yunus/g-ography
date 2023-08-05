import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Home from "../components/Home";
import Globe from "../canvas/Globe";
import HomeCountries from "../components/HomeCountries";
import Description from "../components/helpers/Description";

function HomePage() {
  return (
    <main>
      <div className=" relative w-ful h-screen  transition-all ease-in">
        <Home />
        <Canvas
          orthographic
          camera={{ left: 0, right: 0, top: 0, bottom: 0, zoom: 190 }}
        >
          <Globe />
        </Canvas>
      </div>
      <Description />
      <HomeCountries />
    </main>
  );
}

export default HomePage;
