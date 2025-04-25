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

    const minimiseMenu = (event) => {
        event.target.style.display = 'none';
    }

    const maximiseMenu = (event) => {
        event.target.style.display = 'block';
    }

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
                        {subreddits[index].display_name_prefixed}
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
        <div className={style.subredditMenuContainer}>
            <p id="closeMenu" className={style.closeMenu} onClick={() => {minimiseMenu()}} >&lt;&lt; close</p>
            <p id="openMenu" className={style.openMenu} onClick={() => {maximiseMenu()}}>open &gt;&gt;</p>
            {displaySubredditMenu()}
        </div>
    )
}