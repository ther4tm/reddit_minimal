import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from './subredditsMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubredditsMenu } from "./subredditsMenuSlice";
import { loadSubreddit } from "../subreddit/subredditSlice";

const SubredditsMenu = (props) => {
    const dispatch = useDispatch();
    const subreddit = useSelector(state => state.subredditsMenu);
    const { subreddits, isLoadingSubredditsMenu, failedToLoadSubredditsMenu } = subreddit;

    useEffect(() => {
        dispatch(loadSubredditsMenu());
    }, [dispatch]);

    const onClickMenuLink = (e) => {
        dispatch(loadSubreddit(e))
        if (window.innerWidth < 498) {
            props.toggleSubredditsMenu();
        };
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
        <div className={props.isOpen ? style.subredditMenuContainerOpen : style.subredditMenuContainerClosed}>
            <p className={props.isOpen ? style.closeMenu : style.openMenu} onClick={props.toggleSubredditsMenu}>&lt;&lt; close</p>
            <p className={props.isOpen ? style.openMenu : style.closeMenu} onClick={props.toggleSubredditsMenu}>open &gt;&gt;</p>
            {displaySubredditMenu()}
        </div>
    )
};

export default SubredditsMenu;