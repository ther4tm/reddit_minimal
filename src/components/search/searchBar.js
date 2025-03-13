import React from "react";

export default function SearchBar(props) {
    return (
        <div className='search'>
            <form className='form'>
                <input
                className='search_input'
                type="text"
                placeholder="Search..."
                value={props.search}
                onChange={props.onChange}
                />

                <button
                className='button'
                onClick={props.onClick}
                >Submit</button>
            </form>
        </div>
    )
};