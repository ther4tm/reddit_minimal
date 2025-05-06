import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadSearchResults } from "./searchSlice";
import { useDispatch } from "react-redux";
import style from './searchBar.module.css';

export default function SearchBar({toggleSubredditsMenu, isOpen}) {
        const [search, setSearch] = useState(''); // User Search
        const dispatch = useDispatch();
        const navigate = useNavigate();
      
        const handleChange = ({target}) => {
            setSearch(target.value);
        }
    
        const handleSearch = (event) => {
            event.preventDefault();
            if (!search) {
              return;
            }
            navigate('search_results');
            dispatch(loadSearchResults(search));
            setSearch('');
            if (isOpen === true) {
                toggleSubredditsMenu();
            };
        }

    return (
        <div className={style.searchBarContainer}>
            <div className={style.logoContainer}>
                <img src={require('./reddit_logo_pixel_art_2.png')} alt='reddit logo' />
                <h1>reddit minimal</h1>
            </div>
            <form>
                <input
                type="text"
                placeholder="SEARCH SUBREDDITS..."
                value={search}
                onChange={handleChange}
                />

                <button
                onClick={handleSearch}
                >SEARCH</button>
            </form>
        </div>
    )
};

//the require method in the img allows local images to load in dev