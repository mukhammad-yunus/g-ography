import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Home from "../components/Home";
import Globe from "../canvas/Globe";
import HomeCountries from "../components/HomeCountries";

function HomePage() {

  return (
    <main className="app transition-all ease-in overflow-x-hidden w-screen">
      <Home />
      <Canvas
        orthographic
        camera={{ left: 0, right: 0, top: 0, bottom: 0, zoom: 190 }}
      >
        <Globe />
      </Canvas>
      <HomeCountries/>
    </main>
  );
}

export default HomePage;
