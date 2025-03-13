import { configureStore } from "@reduxjs/toolkit";
import subredditsMenuReducer from '../components/subredditsMenu/subredditsMenuSlice';
import subredditsReducer from '../components/subreddit/subredditSlice';
import postReducer from '../components/post/postSlice';
import indexSubredditReducer from '../components/indexSubreddit/indexSubredditSlice';
import searchReducer from '../components/search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    indexSubreddit: indexSubredditReducer,
    subredditsMenu: subredditsMenuReducer,
    subreddits: subredditsReducer,
    post: postReducer
  },
});