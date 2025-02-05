import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadDefaultSubreddit = createAsyncThunk(
    'subreddits/loadDefaultSubreddit',
    async () => {
        const response = await fetch('https://www.reddit.com/r/home.json');
        const json = await response.json();
        return json;
    }
);

export const loadSelectedSubreddit = createAsyncThunk(
    'subreddits/loadSelectedSubreddit',
    async (params) => {
        const url = 'https://www.reddit.com/' + params + '.json';
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
);

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subredditId: [],
        isLoadingSubreddits: false,
        failedToLoadSubreddits: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadDefaultSubreddit.pending, (state) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
        })
        .addCase(loadDefaultSubreddit.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.subredditId = responseData.data.children.map(child => child.data);
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = false;
        })
        .addCase(loadDefaultSubreddit.rejected, (state) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
            state.subredditId = [];
        })
        .addCase(loadSelectedSubreddit.pending, (state) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
        })
        .addCase(loadSelectedSubreddit.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.subredditId = responseData.data.children.map(child => child.data);
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = false;
        })
        .addCase(loadSelectedSubreddit.rejected, (state) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
            state.subredditId = [];
        })
    }
});

export const selectSubreddits = (state) => state.subreddits.subredditId;
export const isLoadingSubreddits = (state) => state.subreddits.isLoadingSubreddits;

export default subredditSlice.reducer;