import React from "react";
import style from './subredditPreview.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../subreddit/subredditSlice";

export default function SubredditPreview({ subreddit }) {
    const dispatch = useDispatch();

    const onClickPreviewLink = (e) => {
        dispatch(loadSubreddit(e))
    }

    return (
        <div className={style.previewContainer}>
            <Link to={`${subreddit.display_name_prefixed}`}
            onClick={() => onClickPreviewLink(subreddit.display_name_prefixed)}
            >
                <h2>{subreddit.display_name_prefixed}</h2>
            </Link>
            <h3>{subreddit.public_description}</h3>
            <p>UpVotes: </p>
            <p>DownVotes: </p>
            <p>Comments: </p>
        </div>
    )
};