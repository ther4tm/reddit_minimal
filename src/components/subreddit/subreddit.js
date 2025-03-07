import React from "react";
import style from './subreddit.module.css';
import { useSelector } from "react-redux";
import { selectSubredditPosts, isLoadingSubredditPosts, failedToLoadSubredditPosts, getSelectedSubreddit } from "./subredditSlice";
import PostPreview from "../postPreview/postPreview";

export default function Subreddit() {
    const subredditPosts = useSelector(selectSubredditPosts);
    const isLoading = useSelector(isLoadingSubredditPosts);
    const hasError = useSelector(failedToLoadSubredditPosts);
    const selectedSubreddit = useSelector(getSelectedSubreddit);

    const displaySubredditPostPreviews = () => {
        if (isLoading) {
            return (
                        <p>Loading...</p>
            )
        } else if (hasError) {
            return (
                        <p>Error</p>
            )
        } else if (subredditPosts.length > 0) {
            return (
                <>
                <h1>{selectedSubreddit}</h1>
                {subredditPosts.map((post, index) => (
                <PostPreview
                key={index}
                post={post}
                />
                        )
                    )
                }
                </>
            )
        }
    }

    return (
        <div className={style.subredditContainer}>
            {displaySubredditPostPreviews()}
        </div>
    )
};