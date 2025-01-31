import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubreddit = createAsyncThunk(
    'subreddits/loadSubreddit',
    async (params) => {
        const url = 'https://www.reddit.com/subreddits.json?' + params;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
);

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subredditId: {},
        isLoadingSubreddits: false,
        failedToLoadSubreddits: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadSubreddit.pending, (state) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
        })
        .addCase(loadSubreddit.fulfilled, (state, action) => {
            state.subredditId = action.payload;
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = false;
        })
        .addCase(loadSubreddit.rejected, (state) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
            state.subredditId = '';
        })
    }
});

export const selectSubreddits = (state) => state.subreddits.subredditId;
export const isLoadingSubreddits = (state) => state.subreddits.isLoadingSubreddits;

export default subredditSlice.reducer;