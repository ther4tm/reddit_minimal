import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
    'search/loadSearchResults',
    async (params, thunkAPI) => {
        const url = 'https://www.reddit.com/subreddits/search.json?q=' + params;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        isLoadingSearchResults: false,
        failedToLoadSearchResults: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadSearchResults.pending, (state) => {
            state.isLoadingSearchResults = true;
            state.failedToLoadSearchResults = false;
        })
        .addCase(loadSearchResults.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.searchResults = responseData.data.children.map(child => child.data);
            state.isLoadingSearchResults = false;
            state.failedToLoadSearchResults = false;
        })
        .addCase(loadSearchResults.rejected, (state) => {
            state.isLoadingSearchResults = false;
            state.failedToLoadSearchResults = true;
            state.searchResults = [];
        })
    }
});

export const selectSearchResults = (state) => state.search.searchResults;
export const isLoadingSearchResults = (state) => state.search.isLoadingSearchResults;
export const failedToLoadSearchResults = (state) => state.search.failedToLoadSearchResults;

export default searchSlice.reducer;