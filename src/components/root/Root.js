import React, { useState } from "react";
import SubredditsMenu from "../subredditsMenu/subredditsMenu";
import { Outlet } from "react-router-dom";
import SearchBar from '../search/searchBar';
import style from './root.module.css';


export default function Root() {
    const [subredditsMenuOpen, setSubredditsMenuOpen] = useState(true);

    const handleMenuChange = () => {
        setSubredditsMenuOpen(!subredditsMenuOpen);
    };

    return (
        <>
            <SearchBar/>
            <div className={style.rootContainer}>
                <div className={style.menuContainer}>
                    <SubredditsMenu isOpen={subredditsMenuOpen} toggleSubredditsMenu={handleMenuChange}/>
                </div>
                <div className={style.outletContainer}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}