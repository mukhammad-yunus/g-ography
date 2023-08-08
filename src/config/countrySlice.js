import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  sortAllCountries,
  sortByContinent,
  sortByCurrency,
  sortByRegion,
} from "./constants";

const initialState = {
  categories: {
    all: [],
    region: [],
    subregion: [],
    currency: [],
    continent: [],
  },
  myCountry: [],
  neighbors: [],
};

export const getAllCountries = createAsyncThunk(
  "countries/getAllCountries",
  async () => {
    try {
      const ALL = "https://restcountries.com/v3.1/all";
      const allCounts = await axios.get(ALL);
      localStorage.setItem("allCountries", JSON.stringify(allCounts.data));
      return [...allCounts.data];
    } catch (error) {}
  }
);

export const getNeighbors = createAsyncThunk(
  "countries/getNeighbors",
  async (borders) => {
    try {
      const BORDERS_URL = `https://restcountries.com/v3.1/alpha?codes=${borders?.join(
        ","
      )}`;
      const neighbors = await axios.get(BORDERS_URL);
      return { neighbors: [...neighbors.data] };
    } catch (err) {
      return err.message;
    }
  }
);
export const getMyCountry = createAsyncThunk(
  "countries/getMyCountry",
  async () => {
    try {
      const res = await axios.get("http://ip-api.com/json/?fields=61439");
      const country = res.data.country;
      const MY_COUNTRY_URL = `https://restcountries.com/v3.1/name/${country}`;
      const myCountry = await axios.get(MY_COUNTRY_URL);
      return { myCountry: [...myCountry.data] };
    } catch (err) {
      return err.message;
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMyCountry.fulfilled, (state, action) => {
        state.myCountry = action.payload.myCountry;
      })
      .addCase(getNeighbors.fulfilled, (state, action) => {
        state.neighbors = action.payload.neighbors;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        const isRegion = true;
        const isAll = true;
        state.categories.all = sortAllCountries(action.payload, isAll);
        state.categories.region = sortByRegion(action.payload, isRegion);
        state.categories.subregion = sortByRegion(action.payload);
        state.categories.continent = sortByContinent(action.payload);
        state.categories.currency = sortByCurrency(action.payload);
      });
  },
});

export const selectAllCountries = (state) => state.countries.categories.all;
export const selectRegions = (state) => state.countries.categories.region;
export const selectSubregions = (state) => state.countries.categories.subregion;
export const selectContinents = (state) => state.countries.categories.continent;
export const selectCurrencies = (state) => state.countries.categories.currency;
export const selectMyCountry = (state) => state.countries.myCountry;
export const selectNeighbors = (state) => state.countries.neighbors;
export default countriesSlice.reducer;
