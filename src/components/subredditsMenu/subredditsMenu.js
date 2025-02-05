import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from './subredditsMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubredditsMenu, isLoadingSubredditsMenu, loadSubredditsMenu } from "./subredditsMenuSlice";
import { loadSelectedSubreddit } from "../subreddit/subredditSlice";

export default function SubredditsMenu() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubredditsMenu);
    const isLoading = useSelector(isLoadingSubredditsMenu);

    useEffect(() => {
        dispatch(loadSubredditsMenu());
    }, []);

    if (isLoading) {
        return (
            <div className={style.container}>
                <ul>
                    <li>Loading...</li>
                </ul>
            </div>
        )
    }

    return (
        <div className={style.container}>
            <ul>
                {subreddits.map((subreddit, index) => (
                <li key={subreddits[index].id}>
                    <NavLink to={`${subreddits[index].display_name_prefixed}`}
                    onClick={(e) => dispatch(loadSelectedSubreddit(subreddits[index].display_name_prefixed))}>
                    {subreddits[index].title}
                    </NavLink>
                </li>
                        )
                    )
                }
            </ul>
        </div>
    )
};