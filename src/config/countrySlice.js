import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  myCountry: [],
  neighbors: [],
};

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
      });
  },
});

export const selectMyCountry = (state) => state.countries.myCountry;
export const selectNeighbors = (state) => state.countries.neighbors;
export default countriesSlice.reducer;
