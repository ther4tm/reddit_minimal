import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPostAndComments = createAsyncThunk(
    'post/loadPostAndComments',
    async (params, thunkAPI) => {
        const url = 'https://www.reddit.com' + params + '.json';
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
);

const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: [],
        comments: [],
        isLoadingPost: false,
        failedToLoadPost: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadPostAndComments.pending, (state) => {
            state.isLoadingPost = true;
            state.failedToLoadPost = false;
        })
        .addCase(loadPostAndComments.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.post = responseData[0].data.children[0].data;
            state.comments = responseData[1].data.children.map(child => child.data);
            state.isLoadingPost = false;
            state.failedToLoadPost = false;
        })
        .addCase(loadPostAndComments.rejected, (state) => {
            state.isLoadingPost = false;
            state.failedToLoadPost = true;
            state.post = [];
        })
    }
});

export const selectPost = (state) => state.post.post;
export const isLoadingPost = (state) => state.post.isLoadingPost;
export const selectPostId = (state) => state.post.post.id;

export default postSlice.reducer;