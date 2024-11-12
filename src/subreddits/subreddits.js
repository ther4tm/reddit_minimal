import React from "react";
import { NavLink } from "react-router-dom";
import style from './subreddits.module.css';

//fake data for testing
import resources from '../fakeDataForTesting/FakeSubreddits';

export default function Subreddits() {
    return (
        <div className={style.container}>
            <ul>
                {Object.keys(resources.data.children).map((e) => (
                <li key={resources.data.children[e].data.id}>
                    <NavLink to={`${resources.data.children[e].data.display_name_prefixed}`}>
                    {resources.data.children[e].data.title}
                    </NavLink>
                </li>
                        )
                    )
                }
            </ul>
        </div>
    )
};