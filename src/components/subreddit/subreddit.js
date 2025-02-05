import React, { useEffect } from "react";
import style from './subreddit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, isLoadingSubreddits, loadDefaultSubreddit } from "./subredditSlice";
import PostPreview from "../postPreview/postPreview";

export default function Subreddit() {
    const dispatch = useDispatch();
    const subreddit = useSelector(selectSubreddits);
    const isLoading = useSelector(isLoadingSubreddits);

    useEffect(() => {
        dispatch(loadDefaultSubreddit());
    }, []);

    if (isLoading) {
        return (
            <div className={style.subredditContainer}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={style.subredditContainer}>
            <h1>{subreddit.subreddit_name_prefixed}</h1>
                {subreddit.map((post, index) => (
                <PostPreview
                key={subreddit[index].id}
                link={subreddit[index].permalink}
                postTitle={subreddit[index].title}
                author={subreddit[index].author}
                upVotes={subreddit[index].ups}
                downVotes={subreddit[index].downs}
                comments={subreddit[index].num_comments}
                />
                        )
                    )
                }
        </div>
    )
};