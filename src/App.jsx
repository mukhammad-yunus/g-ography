import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getAllCountries } from "./config/countrySlice";
import { useDispatch } from "react-redux";
import Category from "./pages/Category";
import About from "./pages/About";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const allCountries = JSON.parse(localStorage.getItem("allCountries"));
    if (!allCountries) {
      dispatch(getAllCountries());
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const locPathname = location.pathname.split("/")[1];
    if (locPathname) {
      document.title =
        locPathname.charAt(0).toUpperCase() + locPathname.slice(1);
    }
  }, [location]);

  return (
    <div className="bg-black relative pt-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/country/:countryName" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
