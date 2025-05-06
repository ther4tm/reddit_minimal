import React, { useState, useEffect } from "react";
import SubredditsMenu from "../subredditsMenu/subredditsMenu";
import { Outlet } from "react-router-dom";
import SearchBar from '../search/searchBar';
import style from './root.module.css';


export default function Root() {
    const [subredditsMenuOpen, setSubredditsMenuOpen] = useState(false);

    const handleMenuChange = () => {
        setSubredditsMenuOpen(!subredditsMenuOpen);
    };

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 497) {
            setSubredditsMenuOpen(true);
          }
        }
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <>
            <SearchBar toggleSubredditsMenu={handleMenuChange}/>
            <div className={style.rootContainer}>
                <div className={subredditsMenuOpen ? style.menuContainerOpen : style.menuContainerClosed}>
                    <SubredditsMenu isOpen={subredditsMenuOpen} toggleSubredditsMenu={handleMenuChange}/>
                </div>
                <div className={subredditsMenuOpen ? style.outletContainerOpen : style.outletContainerClosed}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}