import React from "react";
import NavButtons from "../components/navButtons/navButtons";
import Subreddits from "../subreddits/subreddits";
/*
import Header from "../components/Header";
import Footer from "../components/Footer";
*/
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            {/*<Header/>*/}
            <NavButtons />
            <Subreddits />
            <main>
                <Outlet/>
            </main>
            {/*<Footer/>*/}
        </>
    )
}