import React, { useEffect } from "react";
import style from './indexSubreddit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectIndexSubredditPosts, isLoadingIndexSubredditPosts, failedToLoadIndexSubredditPosts, loadDefaultSubreddit, getIndexSubreddit } from "./indexSubredditSlice";
import IndexPostPreview from "../postPreview/indexPostPreview";

export default function IndexSubreddit() {
    const dispatch = useDispatch();
    const indexSubredditPosts = useSelector(selectIndexSubredditPosts);
    const isLoading = useSelector(isLoadingIndexSubredditPosts);
    const hasError = useSelector(failedToLoadIndexSubredditPosts);
    /*const selectedSubreddit = useSelector(getIndexSubreddit);*/

    useEffect(() => {
        dispatch(loadDefaultSubreddit());
    }, []);
 
    const displayDefaultSubredditPostPreviews = () => {
        if (isLoading) {
            return (
                        <p>Loading...</p>
            )
        } else if (hasError) {
            return (
                        <p>Error</p>
            )
        } else if (indexSubredditPosts.length > 0) {
            return (
                <>
                <h1>{indexSubredditPosts[0].subreddit_name_prefixed}</h1>
                {indexSubredditPosts.map((post, index) => (
                <IndexPostPreview
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
        <div className={style.indexSubredditContainer}>
            {displayDefaultSubredditPostPreviews()}
        </div>
    )
};