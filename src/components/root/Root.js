import React from "react";
import NavButtons from "../navButtons/navButtons";
import SubredditsMenu from "../subredditsMenu/subredditsMenu";
/*
import Header from "../components/Header";
import Footer from "../components/Footer";
*/
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            {/*<Header/>*/}
            {/*<NavButtons />*/}
            <SubredditsMenu />
            <main>
                <Outlet/>
            </main>
            {/*<Footer/>*/}
        </>
    )
}