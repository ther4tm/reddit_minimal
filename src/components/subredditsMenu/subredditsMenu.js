import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from './subredditsMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubredditsMenu } from "./subredditsMenuSlice";
import { loadSubreddit } from "../subreddit/subredditSlice";

export default function SubredditsMenu() {
    const dispatch = useDispatch();
    const subreddit = useSelector(state => state.subredditsMenu);
    const { subreddits, isLoadingSubredditsMenu, failedToLoadSubredditsMenu } = subreddit;

    useEffect(() => {
        dispatch(loadSubredditsMenu());
    }, []);

    const onClickMenuLink = (e) => {
        dispatch(loadSubreddit(e))
    }
    
    const displaySubredditMenu = () => {
        if (isLoadingSubredditsMenu) {
            return (
                        <p>Loading...</p>
            )
        } else if (failedToLoadSubredditsMenu) {
            return (
                        <p>Error</p>
            )
        } else if (subreddits.length > 0) {
            return (
                <ul>
                    {subreddits.map((subreddit, index) => (
                    <li key={subreddits[index].id}>
                        <NavLink to={`${subreddits[index].display_name_prefixed}`}
                        onClick={() => onClickMenuLink(subreddits[index].display_name_prefixed)}>
                        {subreddits[index].title}
                        </NavLink>
                    </li>
                            )
                        )
                    }
                </ul>
            )
        }
    }

    return (
        <div className={style.container}>
            {displaySubredditMenu()}
        </div>
    )
}