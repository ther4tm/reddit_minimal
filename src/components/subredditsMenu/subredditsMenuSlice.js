import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubredditsMenu = createAsyncThunk(
    'subredditsMenu/loadSubredditsMenu',
    async () => {
        const url = 'https://www.reddit.com/subreddits.json';
        const response = await fetch(url);
        const json = await response.json();
        return json.data.children.map(child => child.data);
    }
);

const subredditsMenuSlice = createSlice({
    name: 'subredditsMenu',
    initialState: {
        subreddits: [],
        isLoadingSubredditsMenu: false,
        failedToLoadSubredditsMenu: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadSubredditsMenu.pending, (state) => {
            state.isLoadingSubredditsMenu = true;
            state.failedToLoadSubredditsMenu = false;
        })
        .addCase(loadSubredditsMenu.fulfilled, (state, action) => {
            state.subreddits = action.payload
            state.isLoadingSubredditsMenu = false;
            state.failedToLoadSubredditsMenu = false;
        })
        .addCase(loadSubredditsMenu.rejected, (state) => {
            state.isLoadingSubredditsMenu = false;
            state.failedToLoadSubredditsMenu = true;
            state.subreddits = [];
        });
    }
});

export const selectSubredditsMenu = (state) => state.subredditsMenu.subreddits;
export const isLoadingSubredditsMenu = (state) => state.subredditsMenu.isLoadingSubredditsMenu;
export const failedToLoadSubredditsMenu = (state) => state.subredditsMenu.failedToLoadSubredditsMenu;

export default subredditsMenuSlice.reducer;