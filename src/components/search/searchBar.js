import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadSearchResults } from "./searchSlice";
import { useDispatch } from "react-redux";

export default function SearchBar() {
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
            //still need to create the redirect to the search result component
        }

    return (
        <div className='search'>
            <form className='form'>
                <input
                className='search_input'
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
                />

                <button
                className='button'
                onClick={handleSearch}
                >Submit</button>
            </form>
        </div>
    )
};