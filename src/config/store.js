import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from './countrySlice'
import searchReducer from './searchSlice'

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        search: searchReducer,
    }
})