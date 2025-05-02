import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadDefaultSubreddit = createAsyncThunk(
    'indexSubreddit/loadDefaultSubreddit',
    async () => {
        const response = await fetch('https://www.reddit.com/r/home.json');
        const json = await response.json();
        return json;
    }
);

const indexSubredditSlice = createSlice({
    name: 'indexSubreddit',
    initialState: {
        indexSubredditPosts: [],
        isLoadingIndexSubredditPosts: false,
        failedToLoadIndexSubredditPosts: false,
        indexSubreddit: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadDefaultSubreddit.pending, (state) => {
            state.isLoadingIndexSubredditPosts = true;
            state.failedToLoadIndexSubredditPosts = false;
        })
        .addCase(loadDefaultSubreddit.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.indexSubredditPosts = responseData.data.children.map(child => child.data);
            state.indexSubreddit = responseData.data.children[0].data.subreddit_name_prefixed;
            state.isLoadingIndexSubredditPosts = false;
            state.failedToLoadIndexSubredditPosts = false;
        })
        .addCase(loadDefaultSubreddit.rejected, (state) => {
            state.isLoadingIndexSubredditPosts = false;
            state.failedToLoadIndexSubredditPosts = true;
            state.indexSubredditPosts = [];
        })
    }
});

export const selectIndexSubredditPosts = (state) => state.indexSubreddit.indexSubredditPosts;
export const isLoadingIndexSubredditPosts = (state) => state.indexSubreddit.isLoadingIndexSubredditPosts;
export const failedToLoadIndexSubredditPosts = (state) => state.indexSubreddit.failedToLoadIndexSubredditPosts;

export default indexSubredditSlice.reducer;