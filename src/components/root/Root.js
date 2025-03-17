import React from "react";
import SubredditsMenu from "../subredditsMenu/subredditsMenu";
import { Outlet } from "react-router-dom";
import SearchBar from '../search/searchBar';


export default function Root() {

    return (
        <>
            <SubredditsMenu />
            <SearchBar
            />
            <main>
                <Outlet/>
            </main>
        </>
    )
}