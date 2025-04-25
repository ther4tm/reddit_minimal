import React from "react";
import SubredditsMenu from "../subredditsMenu/subredditsMenu";
import { Outlet } from "react-router-dom";
import SearchBar from '../search/searchBar';
import style from './root.module.css';


export default function Root() {

    return (
        <>
            <SearchBar/>
            <div className={style.rootContainer}>
                <div className={style.menuContainer}>
                    <SubredditsMenu />
                </div>
                <div className={style.outletContainer}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}