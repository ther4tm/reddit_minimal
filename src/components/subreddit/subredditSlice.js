import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubreddit = createAsyncThunk(
    'subreddits/loadSubreddit',
    async (params, thunkAPI) => {
        const url = 'https://www.reddit.com/' + params + '.json';
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
);

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subredditPosts: [],
        isLoadingSubredditPosts: false,
        failedToLoadSubredditPosts: false,
        selectedSubreddit: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadSubreddit.pending, (state) => {
            state.isLoadingSubredditPosts = true;
            state.failedToLoadSubredditPosts = false;
        })
        .addCase(loadSubreddit.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.subredditPosts = responseData.data.children.map(child => child.data);
            state.selectedSubreddit = responseData.data.children[0].data.subreddit_name_prefixed;
            state.isLoadingSubredditPosts = false;
            state.failedToLoadSubredditPosts = false;
        })
        .addCase(loadSubreddit.rejected, (state) => {
            state.isLoadingSubredditPosts = false;
            state.failedToLoadSubredditPosts = true;
            state.subredditPosts = [];
        })
    }
});

export const selectSubredditPosts = (state) => state.subreddits.subredditPosts;
export const isLoadingSubredditPosts = (state) => state.subreddits.isLoadingSubredditPosts;
export const failedToLoadSubredditPosts = (state) => state.subreddits.failedToLoadSubredditPosts;
export const getSelectedSubreddit = (state) => state.subreddits.selectedSubreddit;

export default subredditSlice.reducer;