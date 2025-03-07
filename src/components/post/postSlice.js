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
        isLoadingPostAndComments: false,
        failedToLoadPostAndComments: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadPostAndComments.pending, (state) => {
            state.isLoadingPostAndComments = true;
            state.failedToLoadPostAndComments = false;
        })
        .addCase(loadPostAndComments.fulfilled, (state, action) => {
            const responseData = action.payload;
            state.post = responseData[0].data.children[0].data;
            state.comments = responseData[1].data.children.map(child => child.data);
            state.isLoadingPostAndComments = false;
            state.failedToLoadPostAndComments = false;
        })
        .addCase(loadPostAndComments.rejected, (state) => {
            state.isLoadingPostAndComments = false;
            state.failedToLoadPostAndComments = true;
            state.post = [];
        })
    }
});

export const selectPost = (state) => state.post.post;
export const isLoadingPostAndComments = (state) => state.post.isLoadingPostAndComments;
export const failedToLoadPostAndComments = (state) => state.post.failedToLoadPostAndComments;
export const selectPostId = (state) => state.post.post.id;
export const selectComments = (state) => state.post.comments;

export default postSlice.reducer;