import React from "react";
import style from './subredditPreview.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../subreddit/subredditSlice";

export default function SubredditPreview({ subreddit }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickPreviewLink = (e) => {
        dispatch(loadSubreddit(e))
    }

    const goToSubreddit = (e) => {
        navigate(`/${e.display_name_prefixed}`)
        dispatch(loadSubreddit(e.display_name_prefixed))
    }

    return (
        <div className={style.previewContainer}>
            <div className={style.subredditHeader}>
                <Link to={`/${subreddit.display_name_prefixed}`} //to change route add in forward slash to have the link use the root as the beginning of the path otherwise it will just add this link on top of wherever you are in the stack
                onClick={() => onClickPreviewLink(subreddit.display_name_prefixed)}
                >
                    <h2>{subreddit.display_name_prefixed}</h2>
                </Link>
            </div>
            <div className={style.subredditPreviewMain}>
                <p>{subreddit.public_description}</p>
            </div>
            <div className={style.subredditPreviewFooter}>
                <button onClick={() => goToSubreddit(subreddit)}>GO TO SUBREDDIT</button>
            </div>
        </div>
    )
};