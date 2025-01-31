import { configureStore } from "@reduxjs/toolkit";
import subredditsMenuReducer from '../subredditsMenu/subredditsMenuSlice';
import subredditsReducer from '../components/subreddit/subredditSlice';

export default configureStore({
  reducer: {
    subredditsMenu: subredditsMenuReducer,
    subreddits: subredditsReducer,
  },
});