import React, { useState } from "react";
import SubredditsMenu from "../subredditsMenu/subredditsMenu";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from '../search/searchBar';
import { useSelector, useDispatch } from "react-redux";
import { loadSearchResults } from "../search/searchSlice";

export default function Root() {
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
        //still need to create the redirect to the search result component
    }

    return (
        <>
            <SubredditsMenu />
            <SearchBar
            value={search}
            onChange={handleChange}
            onClick={handleSearch}
            />
            <p>{search}</p>
            <main>
                <Outlet/>
            </main>
        </>
    )
}