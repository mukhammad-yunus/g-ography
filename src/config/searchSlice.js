import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    search: [],
    loading: false,
    error: null
}

export const fetchSearch = createAsyncThunk("search/fetchSearch", async (url) =>{
    try {
        const res = await axios.get(url);
        return [...res.data]
      } catch (err) {
        return err.message;
      }
})
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        init(state, action){
            state.search = []
            state.error = null
            state.loading = false
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchSearch.pending, (state, action)=>{
                state.loading = true
                state.error = ""
            })
            .addCase(fetchSearch.fulfilled, (state, action)=>{
                state.loading = false
                if(action.payload === 'Request failed with status code 404'){
                    state.search = []
                    state.error = action.payload
                } else{
                    state.search = state.search.concat(action.payload)
                }
            })
    }
})


export const selectSearchResult = (state) => state.search.search
export const getSearchStatus = (state) => state.search.loading
export const getSearchError = (state) => state.search.error

export const {init} = searchSlice.actions;
export default searchSlice.reducer;