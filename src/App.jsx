import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="bg-black">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:countryName" element={<Detail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
